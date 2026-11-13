/* BeerSports - phone fixes for the web version.
 *
 * Two things went wrong on phones in a browser:
 *   - after typing and closing the on-screen keyboard, a blank strip stayed at the bottom (the tab bar sat above
 *     it) until the next tap;
 *   - the bottom tab bar jumped when the address bar slid in or out.
 *
 * The page sizes itself with the keyboard (viewport meta: interactive-widget=resizes-content) and no longer pins
 * <body> in place for pop-ups (see lockBodyScroll in app-en.js). This file does the rest:
 *   1. It sets class "kb-open" on <html> while the keyboard is up, so webapp.css can step the tab bar aside. The
 *      class follows the real size of the visible area, not focus/blur, so it also goes away when the keyboard is
 *      closed with the phone's back button (the field keeps focus then).
 *   2. When the keyboard closes, a pop-up closes, the phone is turned or the page comes back to the front, it
 *      makes the browser lay the tab bar out again, which clears a late or stale position at once.
 * Nothing here touches the app's data.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var vv = window.visualViewport || null;
  var baseH = 0;          // the tallest visible height seen in this orientation = the height without a keyboard
  var orient = '';
  var kbOpen = false;
  var queued = 0;

  function isTextField(el) {
    if (!el || el.nodeType !== 1) return false;
    var tag = el.tagName;
    if (tag === 'TEXTAREA') return true;
    if (tag !== 'INPUT') return !!el.isContentEditable;
    var type = (el.getAttribute('type') || 'text').toLowerCase();
    return !/^(checkbox|radio|button|submit|reset|file|range|color|image|hidden)$/.test(type);
  }

  // Lay the fixed tab bar out again (display off and on in one go, so nothing flickers).
  function reseat() {
    var nav = document.querySelector('.tabbar');
    if (!nav) return;
    nav.style.display = 'none';
    void nav.offsetHeight;
    nav.style.display = '';
  }
  function reseatSoon() {
    reseat();
    setTimeout(reseat, 120);
    setTimeout(reseat, 450);   // some phones report the new size a little late
  }

  function measure() {
    queued = 0;
    var visible = vv ? vv.height : window.innerHeight;
    var o = window.innerWidth > window.innerHeight ? 'l' : 'p';
    if (o !== orient) { orient = o; baseH = 0; }
    baseH = Math.max(baseH, window.innerHeight, visible);
    var open = (baseH - visible) > 150 && isTextField(document.activeElement);
    if (open !== kbOpen) {
      kbOpen = open;
      root.classList.toggle('kb-open', open);
      if (!open) reseatSoon();
    }
  }
  function queue() {
    if (queued) return;
    queued = requestAnimationFrame(measure);
  }
  function queueLate() {          // after a field loses focus the keyboard needs a moment to go
    queue();
    setTimeout(queue, 150);
    setTimeout(queue, 500);
  }

  window.addEventListener('resize', queue, { passive: true });
  window.addEventListener('orientationchange', function () { baseH = 0; queueLate(); reseatSoon(); });
  if (vv) vv.addEventListener('resize', queue, { passive: true });
  document.addEventListener('focusin', queue, true);
  document.addEventListener('focusout', queueLate, true);
  window.addEventListener('pageshow', function () { queueLate(); reseatSoon(); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { queueLate(); reseatSoon(); } });

  // A pop-up closing (app-en.js removes body.body-scroll-locked) is the other moment the page size can be stale.
  if (window.MutationObserver && document.body) {
    var wasLocked = document.body.classList.contains('body-scroll-locked');
    new MutationObserver(function () {
      var locked = document.body.classList.contains('body-scroll-locked');
      if (wasLocked && !locked) reseatSoon();
      wasLocked = locked;
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  queue();

  // ---- phone scroll container (see webapp.css): the body scrolls, so window.scrollTo / scrollY / "scroll" follow it
  var phone = window.matchMedia ? window.matchMedia('(max-width: 759.98px)') : { matches: false };
  var nativeTo = window.scrollTo.bind(window), nativeBy = window.scrollBy.bind(window);
  function asOptions(a, b) { return (a && typeof a === 'object') ? a : { left: a || 0, top: b || 0 }; }
  window.scrollTo = window.scroll = function (a, b) {
    if (!phone.matches) return nativeTo.apply(window, arguments);
    document.body.scrollTo(asOptions(a, b));
  };
  window.scrollBy = function (a, b) {
    if (!phone.matches) return nativeBy.apply(window, arguments);
    document.body.scrollBy(asOptions(a, b));
  };
  ['scrollY', 'pageYOffset'].forEach(function (k) {
    var was = Object.getOwnPropertyDescriptor(window, k);
    Object.defineProperty(window, k, {
      configurable: true,
      get: function () { return phone.matches ? document.body.scrollTop : (was && was.get ? was.get.call(window) : 0); }
    });
  });
  document.body.addEventListener('scroll', function () { if (phone.matches) window.dispatchEvent(new Event('scroll')); }, { passive: true });
})();
