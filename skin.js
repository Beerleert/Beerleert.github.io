/* BeerSports - which look the app wears (new in 1.6.0), and in which mode (new in 1.8.0).
 *
 * There are two looks: "medieval" (the one the app has always had) and "cyberpunk". The page holds the style sheets of both
 * (<link data-skin-css="medieval"> and <link data-skin-css="cyberpunk">); this switches the ones of the look that is not worn off
 * (link.disabled) and the others on, and writes the look into <html data-skin="...">, so scripts, the icons and the Android shell
 * know which one is on. Everything that both looks share (stylese.css, calculator.css, motion.css) is never switched.
 *
 * 1.8.0: every look has a light and a dark mode (<html data-mode="light|dark">). Each look keeps its own: Medieval starts light
 * (vellum), Cyberpunk starts dark (black steel) - which is what they always were, so an update changes nothing until the person
 * picks. A style sheet with data-mode-css="dark" (medieval-dark.css) or "light" (cyberpunk-light.css) is only on while its look is
 * worn in that mode; the two looks' own style sheets stay on in both modes and the extra one repaints what the mode changes.
 *
 * It is loaded in <head>, right after the style sheets and before anything is painted, so the page never shows the wrong look
 * for a moment - not even the lock screen. For that the choice is also kept in localStorage ("bsSkin", and "bsMode" for the
 * modes): the saved state may be locked (encrypted) at that point, and which look you wear is not a secret. Once the state is
 * loaded, app-en.js is the one that decides (it keeps the choice in state.profile.skin and state.profile.mode) and calls
 * BSSkin.setModes() / BSSkin.set().
 *
 * Nothing in here touches the app's data. No network.
 */
(function () {
  'use strict';

  var KEY = 'bsSkin';
  var MODE_KEY = 'bsMode';
  var DEFAULT = 'medieval';
  // bar: the colour of the status bar / browser chrome (<meta name="theme-color">) in each mode; mode: what a look wears until the person picks
  var SKINS = {
    medieval:  { bar: { light: '#24160b', dark: '#150d07' }, mode: 'light' },
    cyberpunk: { bar: { light: '#e7ebf3', dark: '#07080c' }, mode: 'dark' }
  };
  // the fonts of each look that must be ready before it is shown (used by BSSkin.ready)
  var FONTS = {
    medieval: [],
    cyberpunk: ['700 16px Orbitron', '900 16px Orbitron', '500 16px Rajdhani', '700 16px Rajdhani', '400 16px "Share Tech Mono"']
  };

  var html = document.documentElement;
  var current = DEFAULT;
  var currentMode = SKINS[DEFAULT].mode;
  var modes = {};   // what the person chose, per look: { medieval: 'dark' }. A look that is not in it wears its own default.

  // (an own-property test: "__proto__" or "constructor" are not looks)
  function valid(k) { return typeof k === 'string' && Object.prototype.hasOwnProperty.call(SKINS, k); }
  function validMode(m) { return m === 'light' || m === 'dark'; }
  function stored() { try { var v = localStorage.getItem(KEY); return valid(v) ? v : null; } catch (e) { return null; } }
  function remember(k) { try { localStorage.setItem(KEY, k); } catch (e) { /* private window, blocked storage: the look still changes */ } }
  function cleanModes(o) {
    var out = {};
    if (o && typeof o === 'object') {
      Object.keys(SKINS).forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(o, k) && validMode(o[k])) out[k] = o[k];
      });
    }
    return out;
  }
  function storedModes() { try { return cleanModes(JSON.parse(localStorage.getItem(MODE_KEY) || '{}')); } catch (e) { return {}; } }
  function rememberModes() { try { localStorage.setItem(MODE_KEY, JSON.stringify(modes)); } catch (e) { /* the mode still changes */ } }
  function modeOf(k) { return validMode(modes[k]) ? modes[k] : SKINS[valid(k) ? k : DEFAULT].mode; }

  function apply(k) {
    if (!valid(k)) k = DEFAULT;
    var mode = modeOf(k);
    var links = document.querySelectorAll('link[data-skin-css]');
    for (var i = 0; i < links.length; i++) {
      var wantMode = links[i].getAttribute('data-mode-css');
      links[i].disabled = links[i].getAttribute('data-skin-css') !== k || (wantMode !== null && wantMode !== mode);
    }
    html.setAttribute('data-skin', k);
    html.setAttribute('data-mode', mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', SKINS[k].bar[mode]);
    var changed = k !== current || mode !== currentMode;
    current = k;
    currentMode = mode;
    if (changed) {
      try { window.dispatchEvent(new CustomEvent('bsskinchange', { detail: { skin: k, mode: mode } })); } catch (e) { /* very old engine */ }
    }
    return k;
  }

  // the fonts of a look are in the app, so this takes a moment at most; it never waits longer than a second
  function ready(k) {
    var list = valid(k) ? FONTS[k] : [];
    if (!list.length || !document.fonts || !document.fonts.load) return Promise.resolve();
    var all = Promise.all(list.map(function (f) { return document.fonts.load(f, 'Aa0 kcal'); }));
    var limit = new Promise(function (res) { setTimeout(res, 1000); });
    return Promise.race([all.catch(function () {}), limit]);
  }

  window.BSSkin = {
    names: Object.keys(SKINS),
    valid: valid,
    get: function () { return current; },
    stored: stored,
    ready: ready,
    // the mode the look that is on wears now, and the mode of any look
    mode: function () { return currentMode; },
    modeOf: modeOf,
    // the person's choices (from the loaded state): { medieval: 'dark', cyberpunk: 'light' } - a look that is left out wears its default
    setModes: function (o) { modes = cleanModes(o); rememberModes(); return apply(current); },
    // switch to a look (and keep it for the next start); the fonts of the new look are waited for first
    set: function (k) {
      if (!valid(k)) k = DEFAULT;
      remember(k);
      return ready(k).then(function () { return apply(k); });
    },
    // same, now and without waiting (the first paint, a look that is already worn, a state that has just been loaded)
    apply: function (k) { if (!valid(k)) k = DEFAULT; remember(k); return apply(k); }
  };

  modes = storedModes();
  apply(stored() || DEFAULT);
})();
