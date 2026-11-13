/* BeerSports - reminders as notifications in a browser (the web version of the app).
 *
 * Inside the Android app the shell rings reminders itself and this file does nothing. In a browser it
 *   - asks, with a button the person taps, for permission to show notifications (browsers ignore a prompt that
 *     does not come from a tap),
 *   - looks at the Agenda reminders and the Daily To-Do reminder times every few seconds and shows a notification
 *     when one is due (through the service worker, which is the only way Chrome on Android allows it),
 *   - says plainly what a web page can and cannot do: it can only notice a due reminder while the page is alive
 *     (open, or running in the background). A closed web app cannot be woken up without a server pushing to it, and
 *     BeerSports has none on purpose (no network at all, see the CSP in the HTML). The Android app can.
 *
 * It reads the reminders through window.BSNotifyData(), which app-en.js provides. Nothing is sent anywhere.
 */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- words (edit here) */
  var S = {
    bannerTitle: 'Turn on notifications',
    bannerText: 'Get an alert when a reminder or a to-do is due. It works while BeerSports is open or running in the background.',
    turnOn: 'Turn on',
    notNow: 'Not now',
    cardTitle: 'Notifications',
    stDefault: 'Off. Reminders will not pop up.',
    stGranted: 'On. Reminders and to-do times pop up as notifications.',
    stDenied: 'Blocked by this browser, so reminders cannot pop up.',
    stUnsupported: 'This browser cannot show notifications.',
    stInsecure: 'Notifications need a secure page (https://).',
    stIos: 'On iPhone and iPad, notifications work once BeerSports is on the Home Screen.',
    btnEnable: 'Turn on notifications',
    btnTest: 'Send a test notification',
    btnCheck: 'Check again',
    noteLimit: 'A web page can only notice a due reminder while it is open or running in the background. To be reminded when BeerSports is closed, use the Android app.',
    noteDenied: 'Open the site settings of this page (the icon next to the address bar, then Permissions > Notifications > Allow), then tap Check again.',
    noteIos: 'Tap Share, then Add to Home Screen. Open BeerSports from the Home Screen and come back here.',
    noteTestSent: 'Sent. Look in your notification shade. Nothing there? Check the browser\'s notification settings for this site.',
    noteTestFail: 'The browser would not show it. Check the notification settings for this site.',
    onTitle: 'Notifications are on',
    onBody: 'BeerSports will alert you when a reminder or a to-do is due.',
    testTitle: 'Test notification',
    testBody: 'If you can read this, reminders will reach you.',
    kindReminder: 'Reminder',
    kindTodo: 'To-Do',
    comingUp: 'Coming up today:',
    nothingDue: 'Nothing more is due today.'
  };

  /* The notification and the alert card follow the look the person has chosen (medieval or cyberpunk). */
  var THEME = {
    medieval:  { icon: 'notif-medieval.png',  reminder: 'Royal Reminder', todo: 'Quest',  onTitle: 'Hail! Notifications are on', testTitle: 'A test raven has landed' },
    cyberpunk: { icon: 'notif-cyberpunk.png', reminder: 'REMINDER //',    todo: 'TASK //', onTitle: 'Notifications online',       testTitle: 'Test signal received' }
  };
  function look() { return THEME[document.documentElement.getAttribute('data-skin')] || THEME.medieval; }

  /* ---------------------------------------------------------------- settings */
  var FIRED_KEY = 'bsNotifyFired';          // { "<id>|<day>|<time>": when it was shown } - so nothing rings twice
  var LATER_KEY = 'bsNotifyAskLater';       // when the banner may come back after "Not now"
  var TICK_MS = 15 * 1000;
  var CATCHUP_MS = 30 * 60 * 1000;          // a reminder missed by less than this still rings when the page wakes up
  var KEEP_FIRED_MS = 3 * 24 * 60 * 60 * 1000;
  var ASK_AGAIN_MS = 7 * 24 * 60 * 60 * 1000;

  /* ---------------------------------------------------------------- small helpers */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage full or blocked: carry on */ } }
  function isNative() { return !!window.BeerSportsWidgets; }       // the Android shell rings reminders itself
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent || '') ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
  function isStandalone() {
    try { return navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches; }
    catch (e) { return false; }
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function dueMs(day, time) {
    var d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(day || ''), t = /^(\d{1,2}):(\d{2})$/.exec(time || '');
    if (!d || !t) return NaN;
    return new Date(+d[1], +d[2] - 1, +d[3], +t[1], +t[2], 0, 0).getTime();
  }

  /* ---------------------------------------------------------------- what is the situation? */
  // 'native' | 'insecure' | 'ios-install' | 'unsupported' | 'default' | 'granted' | 'denied'
  function status() {
    if (isNative()) return 'native';
    if (!window.isSecureContext) return 'insecure';
    if (!('Notification' in window)) return isIOS() && !isStandalone() ? 'ios-install' : 'unsupported';
    return Notification.permission || 'default';
  }

  /* ---------------------------------------------------------------- what is due */
  function collect() {
    var out = [];
    var data = null;
    try { data = typeof window.BSNotifyData === 'function' ? window.BSNotifyData() : null; } catch (e) { data = null; }
    if (!data) return out;

    (data.reminders || []).forEach(function (r) {
      if (!r || r.done || !r.date || !r.time) return;
      out.push({ id: 'r' + r.id, d: r.date, t: r.time, text: r.text || '', sound: r.sound !== false, kind: 'reminder' });
    });

    var todos = data.todos || [];
    if (window.BSCore && typeof BSCore.todoReminders === 'function') {
      var byId = {};
      todos.forEach(function (it) { if (it && it.id != null) byId[String(it.id)] = it; });
      BSCore.todoReminders(todos, dayKey(new Date()), 1).forEach(function (x) {
        var it = byId[x.id];
        out.push({ id: 't' + x.id, d: x.d, t: x.t, text: x.text || '', sound: !(it && it.sound === false), kind: 'todo' });
      });
    }
    return out;
  }

  /* ---------------------------------------------------------------- showing one */
  function ready() {
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    return Promise.race([
      navigator.serviceWorker.ready,
      new Promise(function (res) { setTimeout(function () { res(null); }, 2500); })
    ]).catch(function () { return null; });
  }
  function absolute(name) { try { return new URL(name, location.href).href; } catch (e) { return name; } }

  function show(it) {
    var th = look();
    var kind = it.kind === 'todo' ? th.todo : th.reminder;
    var title = it.title || it.text || kind;
    var body = it.body || (kind + ' \u00b7 ' + it.t);
    var opts = {
      body: body,
      tag: 'bs-' + it.id + '-' + it.d + '-' + it.t,
      icon: absolute(th.icon),
      badge: absolute('notif-badge.png'),
      silent: it.sound === false,
      data: { tab: it.kind === 'todo' ? 'todo' : 'agenda', id: it.id }
    };
    var due = dueMs(it.d, it.t);
    if (due === due) opts.timestamp = due;
    if (it.sound !== false) opts.vibrate = [200, 100, 200];
    return ready().then(function (reg) {
      if (reg && typeof reg.showNotification === 'function') return reg.showNotification(title, opts);
      var n = new Notification(title, opts);   // desktop browsers that have no service worker
      return n;
    });
  }

  /* A reminder that falls due while the app is open also shows as a card in the current look. */
  function toast(it) {
    var th = look(), old = document.querySelector('.bsn-toast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.className = 'card bsn-toast';
    el.setAttribute('role', 'alert');
    el.innerHTML = '<div class="card-title"><span></span></div><p class="bsn-toast-text"></p><button type="button" class="btn btn-sm">OK</button>';
    el.querySelector('.card-title span').textContent = (it.kind === 'todo' ? th.todo : th.reminder) + ' \u00b7 ' + it.t;
    el.querySelector('.bsn-toast-text').textContent = it.text || '';
    el.querySelector('button').addEventListener('click', function (e) { e.stopPropagation(); el.remove(); });
    el.addEventListener('click', function () {
      el.remove();
      if (typeof window.switchTab === 'function') { try { window.switchTab(it.kind === 'todo' ? 'todo' : 'agenda'); } catch (err) { /* not ready */ } }
    });
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.remove(); }, 20000);
  }
  function comingUp() {
    var now = Date.now(), today = dayKey(new Date());
    return collect().filter(function (it) { return it.d === today && dueMs(it.d, it.t) > now; })
      .sort(function (a, b) { return dueMs(a.d, a.t) - dueMs(b.d, b.t); }).slice(0, 4)
      .map(function (it) { return it.t + '  ' + (it.kind === 'todo' ? S.kindTodo : S.kindReminder) + (it.text ? ' - ' + it.text : ''); });
  }

  /* ---------------------------------------------------------------- the check */
  function loadFired() {
    try { var o = JSON.parse(lsGet(FIRED_KEY) || '{}'); return o && typeof o === 'object' ? o : {}; }
    catch (e) { return {}; }
  }
  function saveFired(o) {
    var now = Date.now();
    Object.keys(o).forEach(function (k) { if (now - o[k] > KEEP_FIRED_MS) delete o[k]; });
    lsSet(FIRED_KEY, JSON.stringify(o));
  }
  function firedKey(it) { return it.id + '|' + it.d + '|' + it.t; }

  var checking = false;
  function check() {
    if (checking || status() !== 'granted') return;
    checking = true;
    try {
      var now = Date.now();
      var fired = loadFired();
      var changed = false;
      collect().forEach(function (it) {
        var due = dueMs(it.d, it.t);
        if (!(due <= now) || now - due > CATCHUP_MS) return;
        var key = firedKey(it);
        if (fired[key]) return;
        fired[key] = now;
        changed = true;
        if (document.visibilityState === 'visible') toast(it);
        show(it).catch(function () { /* the browser refused: nothing more to do */ });
      });
      if (changed) saveFired(fired);
    } finally { checking = false; }
  }

  // Right after permission is given, everything that was already due is treated as seen, so only what is
  // still to come rings.
  function markPastSeen() {
    var now = Date.now(), fired = loadFired();
    collect().forEach(function (it) { var due = dueMs(it.d, it.t); if (due <= now) fired[firedKey(it)] = now; });
    saveFired(fired);
  }

  /* ---------------------------------------------------------------- asking */
  function ask() {
    return new Promise(function (resolve) {
      try {
        var r = Notification.requestPermission(function (p) { resolve(p); });   // old Safari
        if (r && typeof r.then === 'function') r.then(resolve, function () { resolve(Notification.permission); });
      } catch (e) { resolve(status()); }
    });
  }
  function snoozed() { return Number(lsGet(LATER_KEY)) > Date.now(); }

  /* ---------------------------------------------------------------- the screen */
  function bannerHTML() {
    return '<div class="card wide-card bsn-card" role="region" aria-label="' + S.cardTitle + '">' +
      '<div class="card-title"><span>' + S.bannerTitle + '</span></div>' +
      '<p class="lock-sub bsn-text">' + S.bannerText + '</p>' +
      '<div class="btn-row bsn-row">' +
      '<button type="button" class="btn btn-sm" data-bsn="enable">' + S.turnOn + '</button>' +
      '<button type="button" class="btn btn-sm btn-ghost" data-bsn="later">' + S.notNow + '</button>' +
      '</div></div>';
  }
  function button(action, label) {
    return '<button type="button" class="btn btn-sm" data-bsn="' + action + '">' + label + '</button>';
  }

  var testNote = '';
  function render() {
    var st = status();

    var banners = document.querySelectorAll('[data-bsn-banner]');
    var showBanner = st === 'default' && !snoozed();
    for (var i = 0; i < banners.length; i++) {
      var b = banners[i];
      if (!showBanner) { b.hidden = true; b.innerHTML = ''; continue; }
      if (!b.firstChild) b.innerHTML = bannerHTML();
      b.hidden = false;
    }

    var card = document.getElementById('bsNotifyCard');
    if (!card) return;
    if (st === 'native') { card.hidden = true; return; }
    card.hidden = false;
    var stText = { 'default': S.stDefault, granted: S.stGranted, denied: S.stDenied, unsupported: S.stUnsupported,
      insecure: S.stInsecure, 'ios-install': S.stIos }[st] || S.stUnsupported;
    var actions = st === 'default' ? button('enable', S.btnEnable)
      : st === 'granted' ? button('test', S.btnTest)
      : st === 'denied' ? button('recheck', S.btnCheck) : '';
    var note = st === 'denied' ? S.noteDenied : st === 'ios-install' ? S.noteIos
      : (st === 'default' || st === 'granted') ? S.noteLimit : '';
    if (st === 'granted') {
      var up = comingUp();
      note = (up.length ? S.comingUp + '\n' + up.join('\n') : S.nothingDue) + '\n\n' + note;
      if (testNote) note = testNote + '\n\n' + note;
    }
    var el;
    if ((el = document.getElementById('bsNotifyStatus'))) { el.textContent = stText; el.setAttribute('data-state', st); }
    if ((el = document.getElementById('bsNotifyActions'))) { el.innerHTML = actions; el.hidden = !actions; }
    if ((el = document.getElementById('bsNotifyNote'))) { el.textContent = note; el.hidden = !note; }
  }

  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('[data-bsn]') : null;
    if (!btn) return;
    var what = btn.getAttribute('data-bsn');
    if (what === 'enable') {
      ask().then(function (p) {
        if (p === 'granted') {
          markPastSeen();
          show({ id: 'on', d: dayKey(new Date()), t: '', title: look().onTitle, body: S.onBody, kind: 'reminder', sound: true })
            .catch(function () {});
        }
        render();
      });
    } else if (what === 'later') {
      lsSet(LATER_KEY, String(Date.now() + ASK_AGAIN_MS));
      render();
    } else if (what === 'test') {
      testNote = '';
      if (document.visibilityState === 'visible') toast({ kind: 'reminder', t: pad2(new Date().getHours()) + ':' + pad2(new Date().getMinutes()), text: S.testBody });
      show({ id: 'test', d: dayKey(new Date()), t: String(Date.now()), title: look().testTitle, body: S.testBody, kind: 'reminder', sound: true })
        .then(function () { testNote = S.noteTestSent; render(); })
        .catch(function () { testNote = S.noteTestFail; render(); });
    } else if (what === 'recheck') {
      render();
    }
  });

  // The person may change the permission in the browser's settings and come back.
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { render(); check(); } });
  window.addEventListener('focus', function () { render(); check(); });
  window.addEventListener('pageshow', function () { render(); check(); });
  window.addEventListener('online', check);
  try {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'notifications' }).then(function (p) { p.onchange = function () { render(); check(); }; }, function () {});
    }
  } catch (e) { /* not available */ }

  // The Settings page is a pop-up that is built once: refresh the card each time it opens.
  var sheet = document.getElementById('bannerEditModal');
  if (sheet && window.MutationObserver) {
    new MutationObserver(function () { if (sheet.classList.contains('open')) render(); })
      .observe(sheet, { attributes: true, attributeFilter: ['class'] });
  }

  // Tapping a notification brings the app to the front (sw.js) and says which page it was about.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', function (e) {
      var m = e && e.data;
      if (m && m.type === 'bs-notification-click' && m.tab && typeof window.switchTab === 'function') {
        try { window.switchTab(m.tab); } catch (err) { /* the page may not be ready */ }
      }
    });
  }

  setInterval(check, TICK_MS);
  render();
  check();

  window.BSNotify = { check: check, render: render, status: status, show: show, collect: collect };
})();
