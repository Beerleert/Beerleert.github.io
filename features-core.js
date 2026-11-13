/* BeerSports - the logic behind the Deeds record, the reminders and the calendar.
 *
 * Nothing in here touches the page or the app's state: every function takes plain data and returns
 * plain data, so tools/test_core.js can run all of it on a bare Node.js with made-up dates.
 * Loaded before app-en.js, which does the drawing. Exposes window.BSCore.
 *
 *   1. dates      - "YYYY-MM-DD" keys, day arithmetic that survives daylight-saving changes
 *   2. seasons    - which season a month belongs to (the calendar page changes colour with it)
 *   3. deeds      - the Daily To-Do history: remembers what was done on every day, derives streaks,
 *                   completion rates, and a per-deed record
 *   3b. schedules - which days a Daily To-Do task is called for (every day, chosen weekdays, or a rhythm of
 *                   days on and days of rest that is not tied to the week), the reminder times of a task and
 *                   the notifications they turn into
 *   4. reminders  - any number of reminders per day: cleaning up, sorting, "what is next", and the
 *                   one-time upgrade from the old single "remind me" time on a day's note
 */
(function (root) {
  'use strict';

  /* ------------------------------------------------------------------ 1. dates */

  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function keyOf(y, m0, d) { return y + '-' + pad2(m0 + 1) + '-' + pad2(d); }

  /** "2026-10-14" -> {y, m (0-based), d}, or null when it is not a real calendar day. */
  function parseKey(k) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(k == null ? '' : k));
    if (!m) return null;
    var y = +m[1], mo = +m[2] - 1, d = +m[3];
    var dt = new Date(y, mo, d);
    if (dt.getFullYear() !== y || dt.getMonth() !== mo || dt.getDate() !== d) return null;
    return { y: y, m: mo, d: d };
  }
  function isKey(k) { return parseKey(k) !== null; }
  function keyFromDate(dt) { return keyOf(dt.getFullYear(), dt.getMonth(), dt.getDate()); }

  /** The key `n` days after (or before, when negative) another one. Calendar arithmetic, so 25-hour days are no problem. */
  function addDays(k, n) {
    var p = parseKey(k);
    if (!p) return k;
    var dt = new Date(p.y, p.m, p.d + n);
    return keyOf(dt.getFullYear(), dt.getMonth(), dt.getDate());
  }
  /** Days since 1970-01-01, counted in UTC so that daylight-saving never makes a day 23 or 25 hours. */
  function dayNumber(k) {
    var p = parseKey(k);
    return p ? Math.round(Date.UTC(p.y, p.m, p.d) / 86400000) : NaN;
  }
  function diffDays(a, b) { return dayNumber(a) - dayNumber(b); }
  /** Monday = 0 ... Sunday = 6, like the calendar grid. */
  function weekdayMon0(k) {
    var p = parseKey(k);
    return (new Date(p.y, p.m, p.d).getDay() + 6) % 7;
  }
  function daysInMonth(y, m0) { return new Date(y, m0 + 1, 0).getDate(); }

  /** "9:5", "09:05", "9:05" -> "09:05"; anything that is not a time of day -> null. */
  function normTime(s) {
    var m = /^\s*(\d{1,2}):(\d{2})\s*$/.exec(String(s == null ? '' : s));
    if (!m) return null;
    var h = +m[1], mi = +m[2];
    if (h > 23 || mi > 59) return null;
    return pad2(h) + ':' + pad2(mi);
  }

  /* ------------------------------------------------------------------ 2. seasons */

  /** Winter 0, spring 1, summer 2, autumn 3 (northern hemisphere, by whole months). */
  function seasonOf(m0) { return [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 0][((m0 % 12) + 12) % 12]; }

  /* ------------------------------------------------------------------ 3. deeds (the Daily To-Do history) */

  /*
   * The Daily To-Do remembers only the last day each deed was ticked (`doneOn`), and that is what makes
   * it start fresh every morning. The record below keeps the history that this throws away:
   *
   *   reg  { id: { n: "Read ten pages", c: "2026-09-01" (first seen), r: "2026-10-02" (taken off the list) } }
   *   log  { "2026-10-13": [id, id, ...] }    the deeds ticked on that day
   *
   * A day with no log entry simply means nothing was ticked. Which deeds *existed* on a day comes from the
   * register (created on or before it, and not removed before it), so a deed added on the 10th is not
   * counted as "missed" on the 9th, and a deleted deed stops counting - but its past ticks stay.
   */

  function asId(x) { return String(x); }

  /*
   * Since 1.5.0 a deed can also have a schedule (see 3b): some days it is called for, other days it rests. The register
   * keeps the HISTORY of that schedule, `s: [{f: "2026-10-21", v: <schedule>|null}, ...]` - from day `f` on, the deed
   * follows `v` (null = every day) - so changing a schedule today does not rewrite what past days asked for.
   * A day on which a deed rests (it existed, was not due, and was not ticked anyway) is neither done nor missed:
   * it does not count towards a percentage and it does not break a streak.
   */

  /** Makes sure the record has the right shape, dropping anything that is not usable (it can come from an imported backup). */
  function deedsNormalize(model) {
    var reg = (model && typeof model.reg === 'object' && model.reg && !Array.isArray(model.reg)) ? model.reg : {};
    var log = (model && typeof model.log === 'object' && model.log && !Array.isArray(model.log)) ? model.log : {};
    var cleanReg = {}, cleanLog = {};
    Object.keys(reg).forEach(function (id) {
      var r = reg[id];
      if (!r || typeof r !== 'object' || !isKey(r.c)) return;
      var o = { n: String(r.n == null ? '' : r.n).slice(0, 200), c: r.c };
      if (isKey(r.r)) o.r = r.r;
      var hist = histClean(r.s);
      if (hist.length) o.s = hist;
      cleanReg[id] = o;
    });
    Object.keys(log).forEach(function (k) {
      if (!isKey(k) || !Array.isArray(log[k])) return;
      var seen = {}, list = [];
      log[k].forEach(function (id) {
        if (typeof id !== 'number' && typeof id !== 'string') return;
        var s = asId(id);
        if (seen[s]) return;
        seen[s] = 1; list.push(id);
      });
      if (list.length) cleanLog[k] = list;
    });
    return { reg: cleanReg, log: cleanLog };
  }

  /**
   * Brings the record up to date with the live list. `live` is state.dailyTodos ({id, text, doneOn}).
   * Safe to call as often as you like: ticking, un-ticking, adding, deleting, opening the app, midnight.
   * Mutates and returns the model.
   */
  function deedsSync(model, live, today) {
    var reg = model.reg, log = model.log;
    var liveIds = {};
    (live || []).forEach(function (it) {
      if (!it) return;
      var id = asId(it.id);
      liveIds[id] = 1;
      var text = String(it.text == null ? '' : it.text).slice(0, 200);
      var r = reg[id];
      if (!r) {
        // first time this deed is seen: it exists since today, or since the day it was last ticked when that is earlier
        var c = today;
        if (isKey(it.doneOn) && it.doneOn < c) c = it.doneOn;
        reg[id] = { n: text, c: c };
      } else {
        r.n = text || r.n;
        if (r.r) delete r.r; // it is back on the list
      }
      histSync(reg[id], schedNormalize(it.sched), today);
      if (isKey(it.doneOn) && it.doneOn <= today) {
        var arr = log[it.doneOn] || (log[it.doneOn] = []);
        if (arr.map(asId).indexOf(id) < 0) arr.push(it.id);
      }
    });
    // today's ticks follow the live list exactly (that is how an un-tick takes effect), except that the
    // ticks of deeds that were deleted today are kept
    var todays = log[today] || [];
    var kept = todays.filter(function (id) { return !liveIds[asId(id)]; });
    var fresh = [];
    (live || []).forEach(function (it) { if (it && it.doneOn === today) fresh.push(it.id); });
    var merged = fresh.concat(kept);
    if (merged.length) log[today] = merged; else delete log[today];
    // deeds that left the list
    Object.keys(reg).forEach(function (id) {
      if (!liveIds[id] && !reg[id].r) reg[id].r = today;
    });
    return model;
  }

  function existedOn(reg, id, key, doneMap) {
    var r = reg[id];
    if (doneMap && doneMap[id]) return true;
    if (!r) return false;
    return r.c <= key && (!r.r || key < r.r);
  }

  /**
   * What one deed was on one day: 'none' (it did not exist), 'done' (ticked - also on a day off, that is a bonus),
   * 'due' (it existed and the day called for it, not ticked) or 'rest' (it existed, but its schedule gave the day off).
   */
  function dayState(reg, id, key, doneMap) {
    if (doneMap && doneMap[id]) return 'done';
    var r = reg[id];
    if (!r || !(r.c <= key && (!r.r || key < r.r))) return 'none';
    return schedDue(schedAt(r.s, key), key) ? 'due' : 'rest';
  }

  function doneMapFor(log, key) {
    var m = {};
    (log[key] || []).forEach(function (id) { m[asId(id)] = 1; });
    return m;
  }

  /** The most history that is ever scanned (about ten years): streaks beyond it simply stop there. */
  var MAX_SCAN_DAYS = 3700;
  /** In the per-deed day lists: 1 done, 0 called for but not done, null did not exist - and this, a day off. */
  var REST = 2;

  /**
   * Everything the tracker shows, for a window of `range` days ending today - or, with range 'all', for the whole
   * record: from the first day anything was recorded up to today.
   *
   *   rows   one per day of the window, oldest first: {key, total, done, rest, ratio, state, counts}
   *          state: 'none' (no deed existed), 'rest' (deeds exist, all of them have the day off), 'zero', 'some', 'all'
   *          total/done only count what the day called for (plus anything ticked anyway)
   *   cur    current streak of perfect days ("all"); a day that is not perfect *yet* does not break it,
   *          and neither does a day off
   *   best   the best streak ever recorded
   *   perfect / kept / avg   perfect days in the window, days with at least one deed done, overall completion (0..1 or null)
   *   deeds  one record per deed: {id, name, live, done, possible, rate, streak, best, strip[]}
   *
   * Today is only held against you when it is already complete or the day is over: a deed that is simply
   * still waiting to be done today is "pending", not "missed".
   */
  function deedsStats(model, today, range) {
    var reg = model.reg, log = model.log;
    var ids = Object.keys(reg);
    var start = today;
    ids.forEach(function (id) { if (reg[id].c < start) start = reg[id].c; });
    Object.keys(log).forEach(function (k) { if (log[k].length && k < start) start = k; });
    var floor = addDays(today, -(MAX_SCAN_DAYS - 1));
    var scanFrom = start > floor ? start : floor;
    range = (range === 'all') ? diffDays(today, scanFrom) + 1 : Math.max(1, Math.min(MAX_SCAN_DAYS, range | 0 || 30));
    var windowFrom = addDays(today, -(range - 1));

    var all = [];          // every scanned day
    var perDeed = {};      // id -> array of 1 (done) / 0 (called for, not done) / 2 (a day off) / null (did not exist), aligned with `all`
    ids.forEach(function (id) { perDeed[id] = []; });
    var k = scanFrom;
    while (k <= today) {
      var dm = doneMapFor(log, k);
      var total = 0, done = 0, rest = 0;
      ids.forEach(function (id) {
        var st = dayState(reg, id, k, dm);
        if (st === 'none') { perDeed[id].push(null); return; }
        if (st === 'rest') { rest++; perDeed[id].push(REST); return; }
        total++;
        if (st === 'done') { done++; perDeed[id].push(1); } else perDeed[id].push(0);
      });
      // 'rest': tasks exist but every one of them has the day off - a quiet day, not an empty one
      var state = total === 0 ? (rest > 0 ? 'rest' : 'none') : (done === total ? 'all' : (done > 0 ? 'some' : 'zero'));
      all.push({ key: k, total: total, done: done, rest: rest, ratio: total ? done / total : null, state: state, counts: total > 0 && (k < today || done > 0) });
      k = addDays(k, 1);
    }

    // streaks over the whole scanned history: a day off neither adds to a streak nor breaks it
    var best = 0, run = 0;
    all.forEach(function (r) { if (r.state === 'all') { run++; if (run > best) best = run; } else if (r.state !== 'rest') run = 0; });
    var cur = 0, i = all.length - 1;
    if (i >= 0 && all[i].state !== 'all') i--; // today is not over: it does not break the streak yet
    for (; i >= 0; i--) {
      if (all[i].state === 'all') cur++;
      else if (all[i].state !== 'rest') break;
    }

    // the window
    var rows = all.filter(function (r) { return r.key >= windowFrom; });
    // pad the front with "no deeds" days so the window always has `range` rows
    var missing = range - rows.length;
    if (missing > 0) {
      var pad = [];
      for (var j = missing; j >= 1; j--) pad.push({ key: addDays(windowFrom, missing - j), total: 0, done: 0, ratio: null, state: 'none', counts: false });
      rows = pad.concat(rows);
    }
    var perfect = 0, kept = 0, sumDone = 0, sumTotal = 0;
    rows.forEach(function (r) {
      if (r.state === 'all') perfect++;
      if (r.done > 0) kept++;
      if (r.counts) { sumDone += r.done; sumTotal += r.total; }
    });
    // (padding rows made above carry no `rest`; make the field always there)
    rows.forEach(function (r) { if (r.rest === undefined) r.rest = 0; });

    // per deed
    var offset = all.length - rows.length + Math.max(0, missing); // index in `all` of rows[missing]
    var deeds = [];
    var liveFirst = ids.slice().sort(function (a, b) {
      var la = reg[a].r ? 1 : 0, lb = reg[b].r ? 1 : 0;
      if (la !== lb) return la - lb;
      return a < b ? -1 : a > b ? 1 : 0;
    });
    liveFirst.forEach(function (id) {
      var arr = perDeed[id];
      var done = 0, possible = 0;
      for (var x = Math.max(0, all.length - range); x < all.length; x++) {
        var v = arr[x];
        if (v === null || v === REST) continue;   // not there yet, or a day off: not "possible"
        if (v === 1) { done++; possible++; }
        else if (all[x].key < today) possible++;
      }
      var sBest = 0, sRun = 0;
      arr.forEach(function (v) { if (v === 1) { sRun++; if (sRun > sBest) sBest = sRun; } else if (v !== REST) sRun = 0; });
      var sCur = 0, y = arr.length - 1;
      if (y >= 0 && arr[y] !== 1) y--;
      for (; y >= 0; y--) {
        if (arr[y] === 1) sCur++;
        else if (arr[y] !== REST) break;
      }
      var strip = [];
      for (var z = 6; z >= 0; z--) {
        var idx = arr.length - 1 - z;
        var key = addDays(today, -z);
        var val = idx >= 0 ? arr[idx] : null;
        strip.push({ key: key, s: val === 1 ? 'done' : (val === 0 ? (key === today ? 'pending' : 'miss') : (val === REST ? 'rest' : 'none')) });
      }
      // a deed that was removed and has nothing in the window is not worth a row
      if (reg[id].r && done === 0) return;
      deeds.push({ id: id, name: reg[id].n, live: !reg[id].r, done: done, possible: possible,
                   rate: possible ? done / possible : null, streak: sCur, best: sBest, strip: strip });
    });

    return {
      rows: rows, cur: cur, best: best, perfect: perfect, kept: kept,
      avg: sumTotal ? sumDone / sumTotal : null, deeds: deeds, start: start,
      hasHistory: ids.length > 0 || Object.keys(log).length > 0
    };
  }

  /**
   * What happened on one day: every deed that existed, and whether it was done. A deed that had the day off is in
   * `items` too (flagged `rest`, listed last) but is not part of `total`: a day is complete when everything that was
   * called for is done.
   */
  function deedsDay(model, key) {
    var reg = model.reg, dm = doneMapFor(model.log, key);
    var items = [];
    Object.keys(reg).forEach(function (id) {
      var st = dayState(reg, id, key, dm);
      if (st === 'none') return;
      items.push({ id: id, name: reg[id].n, done: st === 'done', rest: st === 'rest', live: !reg[id].r });
    });
    function rank(i) { return i.rest ? 2 : (i.done ? 1 : 0); }
    items.sort(function (a, b) {
      return rank(a) !== rank(b) ? rank(a) - rank(b) : (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    });
    var counted = items.filter(function (i) { return !i.rest; });
    return {
      key: key, items: items,
      done: counted.filter(function (i) { return i.done; }).length, total: counted.length,
      rest: items.length - counted.length
    };
  }

  /* ------------------------------------------------------------------ 3b. schedules (1.5.0) */

  /*
   * A Daily To-Do task is called for every day, unless it has a schedule. A schedule is one of
   *
   *   null                                         every day
   *   { t: 'days',  d: [0, 2, 4] }                 chosen weekdays, Monday = 0 ... Sunday = 6
   *   { t: 'cycle', a: '2026-10-21', p: [1,1,1,0,0,0] }
   *                                                a rhythm that is not tied to the week: it goes round and round,
   *                                                day 1 of the rhythm falls on `a`, and p says for each day of it
   *                                                whether the task is called for (1) or the day is a rest (0).
   *                                                "Days 1, 2, 3 on, 4, 5, 6 rest" is the example above.
   *
   * Nothing here knows about the clock or the page: everything takes a schedule and a "YYYY-MM-DD" key.
   */

  var MIN_CYCLE = 2;     // a rhythm is at least two days long ...
  var MAX_CYCLE = 60;    // ... and at most this many
  var MAX_HIST = 120;    // schedule changes remembered per task
  var MAX_TIMES = 8;     // reminder times per task

  /** Monday = 0 ... Sunday = 6 for a day number (1970-01-01, day 0, was a Thursday). */
  function weekdayOfDayNumber(dn) { return (((dn % 7) + 7) + 3) % 7; }

  /** A schedule in its one clean form, or null (= every day) for anything that is not usable or asks for every day anyway. */
  function schedNormalize(s) {
    if (!s || typeof s !== 'object') return null;
    if (s.t === 'days') {
      var seen = {}, d = [];
      (Array.isArray(s.d) ? s.d : []).forEach(function (x) {
        if (typeof x !== 'number' || x % 1 !== 0 || x < 0 || x > 6 || seen[x]) return;
        seen[x] = 1; d.push(x);
      });
      d.sort(function (a, b) { return a - b; });
      return (d.length === 0 || d.length === 7) ? null : { t: 'days', d: d };
    }
    if (s.t === 'cycle') {
      if (!isKey(s.a) || !Array.isArray(s.p)) return null;
      var p = s.p.slice(0, MAX_CYCLE).map(function (v) { return v ? 1 : 0; });
      if (p.length < MIN_CYCLE) return null;
      var on = 0;
      p.forEach(function (v) { on += v; });
      return (on === 0 || on === p.length) ? null : { t: 'cycle', a: s.a, p: p };
    }
    return null;
  }

  /** Is the task called for on this day? (An unusable day key counts as yes: nothing is hidden by mistake.) */
  function schedDue(s, key) {
    if (!s) return true;
    var dn = dayNumber(key);
    if (dn !== dn) return true;
    if (s.t === 'days') return s.d.indexOf(weekdayOfDayNumber(dn)) >= 0;
    if (s.t === 'cycle') {
      var n = s.p.length, i = (((dn - dayNumber(s.a)) % n) + n) % n;
      return s.p[i] === 1;
    }
    return true;
  }

  function schedSame(a, b) { return JSON.stringify(schedNormalize(a)) === JSON.stringify(schedNormalize(b)); }

  /** The first day on or after `from` that the schedule calls for (within a year), or null when it never does. */
  function schedNext(s, from, limit) {
    for (var i = 0; i < (limit || 370); i++) {
      var k = addDays(from, i);
      if (schedDue(s, k)) return k;
    }
    return null;
  }

  /** How a rhythm reads: its length, days on and days off, and how many separate stretches of "on" days it has. */
  function schedCycleInfo(p) {
    var n = p.length, on = 0, runs = 0;
    for (var i = 0; i < n; i++) {
      if (p[i]) on++;
      if (p[i] && !p[(i + n - 1) % n]) runs++;
    }
    return { n: n, on: on, off: n - on, runs: runs };
  }

  /** Which day of its rhythm a day is (1-based), for a cycle schedule; 0 for anything else. */
  function schedCycleDay(s, key) {
    if (!s || s.t !== 'cycle') return 0;
    var n = s.p.length;
    return ((((dayNumber(key) - dayNumber(s.a)) % n) + n) % n) + 1;
  }

  /** The history of a deed's schedule, cleaned: oldest first, one entry per day, no entry that changes nothing. */
  function histClean(list) {
    if (!Array.isArray(list)) return [];
    var byDay = {};
    list.forEach(function (e) {
      if (e && typeof e === 'object' && isKey(e.f)) byDay[e.f] = schedNormalize(e.v);
    });
    var out = [], prev = null;
    Object.keys(byDay).sort().forEach(function (f) {
      if (schedSame(prev, byDay[f])) return;
      out.push({ f: f, v: byDay[f] });
      prev = byDay[f];
    });
    return out.length > MAX_HIST ? out.slice(out.length - MAX_HIST) : out;
  }

  /** The schedule a deed followed on a day: the last entry of its history that began on or before that day. */
  function schedAt(hist, key) {
    var v = null;
    if (!Array.isArray(hist)) return v;
    for (var i = 0; i < hist.length; i++) {
      if (hist[i].f <= key) v = hist[i].v; else break;
    }
    return v;
  }

  /**
   * Records, in a deed's register entry, that it follows `sched` from `today` on - when that is a change. An edit made
   * earlier today is replaced rather than stacked, and nothing before today is ever touched.
   */
  function histSync(r, sched, today) {
    var s = Array.isArray(r.s) ? r.s : [];
    if (!schedSame(schedAt(s, today), sched)) {
      while (s.length && s[s.length - 1].f >= today) s.pop();   // today's own earlier edit (or a clock that was set back)
      if (!schedSame(schedAt(s, today), sched)) s.push({ f: today, v: sched });
    }
    if (s.length > MAX_HIST) s = s.slice(s.length - MAX_HIST);
    if (s.length) r.s = s; else delete r.s;
  }

  /** Reminder times of a task: valid "HH:MM" only, no doubles, earliest first. */
  function timesClean(list) {
    if (!Array.isArray(list)) return [];
    var seen = {}, out = [];
    list.forEach(function (x) {
      var t = normTime(x);
      if (!t || seen[t]) return;
      seen[t] = 1; out.push(t);
    });
    out.sort();
    return out.slice(0, MAX_TIMES);
  }

  /**
   * The notifications the Daily To-Do asks Android for: every task with reminder times, on every day of the next
   * `days` days that it is called for, at each of its times - [{d, t, text, id}], earliest first.
   * Today's are left out once the task is ticked; times that are already past today stay in (Android knows the
   * clock and simply does not ring them), so the list only changes when a person changes something or a day ends.
   * Tomorrow's work is not announced because it is only ever a few lines: the app re-sends the list whenever it
   * is open, and Android keeps what it was last given.
   */
  function todoReminders(todos, today, days) {
    var out = [];
    if (!Array.isArray(todos) || !isKey(today)) return out;
    todos.forEach(function (it) {
      if (!it || typeof it !== 'object') return;
      var times = timesClean(it.rem);
      if (!times.length) return;
      var sc = schedNormalize(it.sched);
      var text = String(it.text == null ? '' : it.text);
      for (var i = 0; i < days; i++) {
        var k = addDays(today, i);
        if (!schedDue(sc, k)) continue;
        if (i === 0 && it.doneOn === today) continue;
        times.forEach(function (t) { out.push({ d: k, t: t, text: text, id: String(it.id) }); });
      }
    });
    out.sort(function (a, b) {
      return a.d !== b.d ? (a.d < b.d ? -1 : 1) : a.t !== b.t ? (a.t < b.t ? -1 : 1) : a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });
    return out;
  }

  /* ------------------------------------------------------------------ 4. reminders */

  function newReminderId() { return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  /** One reminder in its clean form, or null when it is not usable (no valid day or time). */
  function reminderClean(r) {
    if (!r || typeof r !== 'object') return null;
    var time = normTime(r.time);
    if (!isKey(r.date) || !time) return null;
    var text = String(r.text == null ? '' : r.text).replace(/\s+/g, ' ').trim().slice(0, 300);
    var out = { id: String(r.id == null || r.id === '' ? newReminderId() : r.id).slice(0, 40), date: r.date, time: time, text: text, done: !!r.done };
    if (r.sound === false) out.sound = false;   // 1.8.0: a reminder without sound (left out when it has one)
    return out;
  }

  /** A clean, de-duplicated list. Unusable entries are dropped; two with the same id keep the first. */
  function remindersClean(list) {
    if (!Array.isArray(list)) return [];
    var seen = {}, out = [];
    list.forEach(function (r) {
      var c = reminderClean(r);
      if (!c || seen[c.id]) return;
      seen[c.id] = 1; out.push(c);
    });
    return out;
  }

  function cmpReminder(a, b) {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    if (a.time !== b.time) return a.time < b.time ? -1 : 1;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  }
  function remindersSorted(list) { return list.slice().sort(cmpReminder); }
  function remindersOn(list, key) { return remindersSorted(list.filter(function (r) { return r.date === key; })); }
  function remindersByDay(list) {
    var map = {};
    list.forEach(function (r) { (map[r.date] || (map[r.date] = [])).push(r); });
    Object.keys(map).forEach(function (k) { map[k].sort(cmpReminder); });
    return map;
  }

  /** "2026-10-14 09:30": text that sorts and compares like time does. */
  function stamp(dt) { return keyFromDate(dt) + ' ' + pad2(dt.getHours()) + ':' + pad2(dt.getMinutes()); }

  /** 'done', 'overdue' (its time has passed), 'today' (later today) or 'later'. */
  function reminderStatus(r, now) {
    if (r.done) return 'done';
    var n = stamp(now);
    if (r.date + ' ' + r.time < n) return 'overdue';
    return r.date === n.slice(0, 10) ? 'today' : 'later';
  }

  /** Everything still to do, oldest first: overdue ones, then today's, then what is ahead. */
  function remindersUpcoming(list, now) {
    return remindersSorted(list.filter(function (r) { return !r.done; }));
  }

  /**
   * The old app kept ONE optional reminder time per day, `remindAt`, on the day's note (and the reminder
   * showed the note's text). Each of those becomes a reminder of its own; the note stays where it was.
   * Returns how many were converted. The id is made from the day, so doing this twice never doubles up.
   */
  /* 1.1.0 kept ONE reminder per day on the note itself: entries[day].remindAt ('HH:MM', '' = off, missing = the
   * default 09:00 for a note on today or a later day). This turns those into reminders of their own and removes the
   * old field. Only reminders still to come are made, so an old backup cannot fill the list with overdue ones.
   *   opts.today, opts.now   'YYYY-MM-DD' and 'HH:MM': when given, anything that is already over is skipped
   *   opts.implicit          also convert the default 09:00 of notes that never picked a time (done once, on the
   *                          first start after the update - see remNormalizeState)
   *   opts.defaultTime       that default ('09:00')
   * Without opts only the times a person chose are converted, wherever they lie. Safe to repeat: one reminder
   * per day at most is made this way (id "legacy-<day>"), and nothing is made twice. Returns how many were made. */
  function remindersFromLegacy(entries, list, defaultText, opts) {
    opts = opts || {};
    var made = 0;
    if (!entries || typeof entries !== 'object') return made;
    var have = {};
    list.forEach(function (r) { have[r.id] = 1; });
    var defTime = normTime(opts.defaultTime || '09:00');
    Object.keys(entries).forEach(function (key) {
      var e = entries[key];
      var isObj = !!e && typeof e === 'object';
      if (isKey(key)) {
        var note = isObj ? (typeof e.note === 'string' ? e.note : '') : (typeof e === 'string' ? e : '');
        note = note.replace(/\s+/g, ' ').trim().slice(0, 300);
        var chosen = isObj && e.remindAt !== undefined && e.remindAt !== null;
        var time = chosen ? normTime(e.remindAt) : (opts.implicit && note ? defTime : '');
        if (time && opts.today && !(key > opts.today || (key === opts.today && time > (opts.now || '00:00')))) time = '';
        var id = 'legacy-' + key;
        if (time && !have[id]) {
          list.push({ id: id, date: key, time: time, text: note || defaultText || '', done: false });
          have[id] = 1; made++;
        }
      }
      if (isObj && 'remindAt' in e) delete e.remindAt;
    });
    return made;
  }

  root.BSCore = {
    // dates
    pad2: pad2, keyOf: keyOf, parseKey: parseKey, isKey: isKey, keyFromDate: keyFromDate, addDays: addDays,
    dayNumber: dayNumber, diffDays: diffDays, weekdayMon0: weekdayMon0, daysInMonth: daysInMonth, normTime: normTime,
    // seasons
    seasonOf: seasonOf,
    // deeds
    deedsNormalize: deedsNormalize, deedsSync: deedsSync, deedsStats: deedsStats, deedsDay: deedsDay,
    // schedules (1.5.0)
    schedNormalize: schedNormalize, schedDue: schedDue, schedSame: schedSame, schedNext: schedNext,
    schedCycleInfo: schedCycleInfo, schedCycleDay: schedCycleDay, schedAt: schedAt, histClean: histClean,
    timesClean: timesClean, todoReminders: todoReminders,
    MIN_CYCLE: MIN_CYCLE, MAX_CYCLE: MAX_CYCLE, MAX_TIMES: MAX_TIMES,
    // reminders
    newReminderId: newReminderId, reminderClean: reminderClean, remindersClean: remindersClean,
    remindersSorted: remindersSorted, remindersOn: remindersOn, remindersByDay: remindersByDay,
    reminderStatus: reminderStatus, remindersUpcoming: remindersUpcoming, remindersFromLegacy: remindersFromLegacy
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.BSCore;
})(typeof window !== 'undefined' ? window : globalThis);
