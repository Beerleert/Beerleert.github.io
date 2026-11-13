/* BeerSports - the medieval look, part 2: the icons.
 *
 * Everything in the app that used to be a picture-emoji (calendar, shield, hourglass, treasure chest...)
 * is drawn here instead, as a small hand-made SVG in one engraved style - no network, no image files.
 *
 *   1. The icon set (ICONS below): 24x24 line drawings, stroked with currentColor, with a few parts filled
 *      with the "accent" (--ia, gilt by default).
 *   2. A hidden SVG sprite with one <symbol> per icon, put at the top of <body>.
 *   3. An emoji -> icon swap: every emoji the app writes into the page (static HTML, translated strings,
 *      rendered lists...) is replaced by its icon, once, as soon as it appears. The emoji itself stays in
 *      the page as visually hidden text, so reading element.textContent still gives what it always gave.
 *   4. window.BSIcons.html(name, cls) for code that wants an icon in a template string.
 *
 * 1.6.0: the engine serves both looks. The drawings above are the medieval set. Another look registers its own in
 *   window.BSIconSets[name] = { base: '<attributes of the <g> every icon sits in>', icons: { iconName: '<svg parts>', ... } }
 * (cyberpunk-icons.js does); an icon the set does not draw is taken from the medieval set. The set follows <html data-skin>
 * (skin.js) and changes when the look does ("bsskinchange"): the symbols of the sprite are redrawn in place, so every icon on
 * the page changes with it.
 *
 * Loaded before app-en.js. Nothing in here touches the app's data.
 */
(function () {
  'use strict';

  var A = 'style="fill:var(--ia,currentColor)"';        // accent fill, keeps the outline
  var AO = 'style="fill:var(--ia,currentColor);stroke:none"'; // accent fill, no outline
  var K = 'style="fill:currentColor;stroke:none"';      // solid ink

  function teeth(n, make) {
    var out = '';
    for (var i = 0; i < n; i++) out += make(i * (360 / n));
    return out;
  }

  var ICONS = {
    /* ---------- the four main tabs ---------- */
    scroll:
      '<rect x="4.5" y="3" width="15" height="3.8" rx="1.9"/><rect x="4.5" y="17.2" width="15" height="3.8" rx="1.9"/>' +
      '<path d="M6.6 6.8v10.4M17.4 6.8v10.4"/><path d="M9.4 9.6h5.2M9.4 12.4h5.2"/>' +
      '<circle cx="12" cy="15.1" r="1.25" ' + AO + '/>',
    shield:
      '<path d="M12 2.9l7.6 2.5v5.7c0 4.8-3.2 8.2-7.6 9.9-4.4-1.7-7.6-5.1-7.6-9.9V5.4z"/>' +
      '<path d="M8.5 11.7l2.7 2.7 4.5-5.3"/>',
    hourglass:
      '<path d="M6 3h12M6 21h12"/>' +
      '<path d="M7.5 3v3c0 3 4.5 4.8 4.5 6s-4.5 3-4.5 6v3M16.5 3v3c0 3-4.5 4.8-4.5 6s4.5 3 4.5 6v3"/>' +
      '<path d="M9.1 18.7h5.8L12 15.2z" ' + AO + '/><path d="M12 12.3v2.2"/>',
    chest:
      '<path d="M3.5 11V9.6C3.5 6.2 6.4 4 9.6 4h4.8c3.2 0 6.1 2.2 6.1 5.6V11"/>' +
      '<rect x="3.5" y="11" width="17" height="9.2" rx="1.5"/><path d="M8 4.2v15.8M16 4.2v15.8"/>' +
      '<rect x="10" y="9.4" width="4" height="5.2" rx=".9" ' + A + '/><circle cx="12" cy="11.8" r=".75" ' + K + '/>',

    /* ---------- everyday ---------- */
    quill:
      '<path d="M20.6 3.4c-6.3.2-10.5 3.4-12.3 8.4L6.8 16l1.4 1.4 4.2-1.5c4.8-1.8 8.2-6.2 8.2-12.5z"/>' +
      '<path d="M7.6 16.4 3.4 20.6"/><path d="M12.4 12.6l2.6 2.4M14.6 9.4l2.6 2.4"/>',
    bell:
      '<path d="M5.8 17.4v-6a6.2 6.2 0 0 1 12.4 0v6l1.7 1.7H4.1z"/><path d="M12 2.8v2.4"/>' +
      '<path d="M9.8 21.2a2.3 2.3 0 0 0 4.4 0"/>',
    bellOff:
      '<path d="M5.8 17.4v-6a6.2 6.2 0 0 1 6.2-6.2M17.5 8.3a6.2 6.2 0 0 1 .7 3.1v6l1.7 1.7H7"/><path d="M12 2.8v2.4"/>' +
      '<path d="M9.8 21.2a2.3 2.3 0 0 0 4.4 0"/><path d="M3.8 3.8l16.4 16.4"/>',
    book:
      '<path d="M12 6.3C9.6 4.7 6.4 4.2 3.5 4.7v13.5c2.9-.5 6.1 0 8.5 1.6 2.4-1.6 5.6-2.1 8.5-1.6V4.7c-2.9-.5-6.1 0-8.5 1.6z"/>' +
      '<path d="M12 6.3v13.5"/><path d="M6 8.5c1.2 0 2.4.2 3.4.7M6 11.5c1.2 0 2.4.2 3.4.7M18 8.5c-1.2 0-2.4.2-3.4.7M18 11.5c-1.2 0-2.4.2-3.4.7"/>',
    candle:
      '<rect x="8.4" y="10.2" width="7.2" height="10.8" rx="1.2"/><path d="M12 10.2V8.7"/>' +
      '<path d="M12 2.7c1.8 1.9 2.3 3.2 1.4 4.6-.4.6-.9.9-1.4.9s-1-.3-1.4-.9C9.7 5.9 10.2 4.6 12 2.7z" ' + A + '/>' +
      '<path d="M8.4 14.2c1.6.9 3.2.9 4.4 0"/>',
    gear:
      '<circle cx="12" cy="12" r="6.1"/><circle cx="12" cy="12" r="2.6"/>' +
      teeth(8, function (a) { return '<rect x="10.6" y="2.2" width="2.8" height="3.7" rx=".8" transform="rotate(' + a + ' 12 12)" ' + K + '/>'; }),
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M4.8 12.6l4.7 4.7L19.2 7.3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    chevR: '<path d="M9 5.5l6.5 6.5L9 18.5"/>',
    chevL: '<path d="M15 5.5L8.5 12 15 18.5"/>',
    arrowL: '<path d="M20 12H5"/><path d="M11.2 5.4L4.6 12l6.6 6.6"/>',
    chevD: '<path d="M5.5 9l6.5 6.5L18.5 9"/>',
    chevU: '<path d="M5.5 15l6.5-6.5L18.5 15"/>',
    play: '<path d="M7 4.8v14.4L19 12z" ' + A + '/>',
    playL: '<path d="M17 4.8v14.4L5 12z" ' + A + '/>',
    pause: '<rect x="6.4" y="4.8" width="4" height="14.4" rx="1" ' + A + '/><rect x="13.6" y="4.8" width="4" height="14.4" rx="1" ' + A + '/>',
    next: '<path d="M5.5 5v14l9.5-7z" ' + A + '/><path d="M18.5 5v14"/>',
    prev: '<path d="M18.5 5v14L9 12z" ' + A + '/><path d="M5.5 5v14"/>',
    undo: '<path d="M4.3 11.8a8 8 0 1 0 2.5-5.9"/><path d="M4 4.2v5.6h5.6"/>',
    swap: '<path d="M4 8h14.5M15 4.5L18.5 8 15 11.5M20 16H5.5M9 12.5L5.5 16 9 19.5"/>',
    cycle:
      '<path d="M4.5 11A7.8 7.8 0 0 1 18 6.8l1.7 1.7"/><path d="M19.6 4v4.6H15"/>' +
      '<path d="M19.5 13A7.8 7.8 0 0 1 6 17.2l-1.7-1.7"/><path d="M4.4 20v-4.6H9"/>',
    lock:
      '<rect x="5" y="10.5" width="14" height="10.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>' +
      '<circle cx="12" cy="15.2" r="1.45" ' + AO + '/><path d="M12 16.4v2"/>',
    unlock:
      '<rect x="5" y="10.5" width="14" height="10.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 7.5-1.9"/>' +
      '<circle cx="12" cy="15.2" r="1.45" ' + AO + '/><path d="M12 16.4v2"/>',
    clock: '<circle cx="12" cy="12" r="8.6"/><path d="M12 7v5.4l3.4 2"/><circle cx="12" cy="12" r=".9" ' + K + '/>',
    helm:
      '<path d="M5 21V11.6a7 7 0 0 1 14 0V21z"/><rect x="6.4" y="10.4" width="11.2" height="2.6" rx="1.3" ' + K + '/>' +
      '<path d="M12 13V21"/><path d="M8.2 16.4h.01M8.2 18.8h.01M15.8 16.4h.01M15.8 18.8h.01" stroke-width="2.3"/>' +
      '<path d="M12 4.7c-1.8-.6-2.7-2-2.4-3.2 1.2.1 2 .8 2.4 1.8.4-1 1.2-1.7 2.4-1.8.3 1.2-.6 2.6-2.4 3.2z" ' + AO + '/>',
    abacus:
      '<rect x="3.5" y="4.4" width="17" height="15.2" rx="1.6"/>' +
      '<path d="M3.5 8.6h17M3.5 12h17M3.5 15.4h17" stroke-width="1"/>' +
      '<g stroke-width="1" ' + A + '>' +
      '<circle cx="7.4" cy="8.6" r="1.35"/><circle cx="10.2" cy="8.6" r="1.35"/><circle cx="16" cy="8.6" r="1.35"/>' +
      '<circle cx="7.4" cy="12" r="1.35"/><circle cx="13.2" cy="12" r="1.35"/><circle cx="16" cy="12" r="1.35"/>' +
      '<circle cx="7.4" cy="15.4" r="1.35"/><circle cx="10.2" cy="15.4" r="1.35"/><circle cx="16.6" cy="15.4" r="1.35"/></g>',
    chart:
      '<path d="M4 3.8v16.4h16.4"/><path d="M7.6 15.4l3.7-4.4 3 2.6 4.8-6.2"/>' +
      '<circle cx="7.6" cy="15.4" r="1.35" ' + A + '/><circle cx="11.3" cy="11" r="1.35" ' + A + '/>' +
      '<circle cx="14.3" cy="13.6" r="1.35" ' + A + '/><circle cx="19.1" cy="7.4" r="1.35" ' + A + '/>',
    folder:
      '<path d="M3.5 6.8A1.8 1.8 0 0 1 5.3 5h4.1l2.2 2.6h7.1a1.8 1.8 0 0 1 1.8 1.8v8.8a1.8 1.8 0 0 1-1.8 1.8H5.3a1.8 1.8 0 0 1-1.8-1.8z"/>' +
      '<path d="M3.5 10.8h17"/>',
    books:
      '<rect x="3.3" y="7" width="4.4" height="13.5" rx=".9"/><rect x="8.8" y="3.4" width="4.4" height="17.1" rx=".9"/>' +
      '<rect x="14.3" y="8.8" width="4.4" height="11.7" rx=".9"/><path d="M19.9 20.5L22 11.8" />' +
      '<path d="M3.3 10.6h4.4M3.3 16.6h4.4M8.8 7h4.4M8.8 16.6h4.4M14.3 12.2h4.4" stroke-width="1.2"/>',
    clasp:
      '<path d="M16.2 6.6L8.4 14.4a2.3 2.3 0 0 0 3.2 3.2l8-8a4.1 4.1 0 0 0-5.8-5.8l-8 8a5.7 5.7 0 0 0 8 8l6.4-6.4"/>',
    trayUp:
      '<path d="M4 14.5v4.2a1.8 1.8 0 0 0 1.8 1.8h12.4a1.8 1.8 0 0 0 1.8-1.8v-4.2"/><path d="M12 15.2V3.6M7.8 7.8L12 3.6l4.2 4.2"/>',
    trayDown:
      '<path d="M4 14.5v4.2a1.8 1.8 0 0 0 1.8 1.8h12.4a1.8 1.8 0 0 0 1.8-1.8v-4.2"/><path d="M12 3.6v11.6M7.8 11L12 15.2 16.2 11"/>',
    warning:
      '<path d="M12 3.3l9.4 16.4H2.6z"/><path d="M12 9.6v4.6"/><circle cx="12" cy="17" r=".95" ' + K + '/>',
    list:
      '<rect x="5.5" y="4.6" width="13" height="16.4" rx="1.6"/><rect x="8.8" y="2.6" width="6.4" height="3.6" rx="1.2" ' + A + '/>' +
      '<path d="M9 10.8h6M9 14h6M9 17.2h4"/>',
    dumbbell:
      '<path d="M7 12h10"/><rect x="4.4" y="7" width="2.6" height="10" rx=".9" ' + A + '/><rect x="17" y="7" width="2.6" height="10" rx=".9" ' + A + '/>' +
      '<rect x="2" y="9.4" width="2.4" height="5.2" rx=".8"/><rect x="19.6" y="9.4" width="2.4" height="5.2" rx=".8"/>',
    tally:
      '<path d="M5.6 5.2v13.6M9.6 5.2v13.6M13.6 5.2v13.6M17.6 5.2v13.6"/><path d="M3.2 15.4L20.6 8" ' + 'style="stroke:var(--ia,currentColor)"/>',
    flame:
      '<path d="M12.3 2.5c.9 3.5-3 5.1-3 9.1 0 1.2.5 2 1.1 2.4-.2-1.8.6-3.1 1.7-4.1 1.6 2 3.1 3.4 3.1 5.6a5.2 5.2 0 0 1-10.4 0c0-2.2 1-3.9 2.2-5.4 1.6-2 3.8-4.3 3.3-7.6z"/>' +
      '<path d="M12 21.2c-1.6 0-2.8-1.2-2.8-2.8 0-1.4 1.2-2.3 2.2-3.5.2 1 1.4 1.9 2.6 3.1 0 1.8-.8 3.2-2 3.2z" ' + AO + '/>',
    target:
      '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.3" ' + AO + '/>' +
      '<path d="M12 12L20.2 3.8"/><path d="M16.9 3.4l3.9-.2-.2 3.9z" ' + A + '/>',
    speaker:
      '<path d="M4 9.4v5.2h3.7L12.8 19V5L7.7 9.4z"/><path d="M15.8 9.2a4.3 4.3 0 0 1 0 5.6M18.4 6.6a8 8 0 0 1 0 10.8"/>',
    checkSeal:
      '<circle cx="12" cy="12" r="9" ' + A + '/><path d="M7.9 12.4l3 3 5.5-6.3"/>',
    palette:
      '<path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.5 0 2.2-1 2.2-2.1 0-1.3-1.1-1.6-1.1-2.8 0-1.1.9-1.9 2.1-1.9h2.4a4.2 4.2 0 0 0 4.2-4.2c0-3.9-4.2-6.6-9.8-6.6z"/>' +
      '<circle cx="7.6" cy="11.4" r="1.25" ' + AO + '/><circle cx="10.4" cy="7.4" r="1.25" ' + AO + '/>' +
      '<circle cx="15" cy="7.4" r="1.25" ' + AO + '/><circle cx="17.2" cy="11" r="1.25" ' + AO + '/>',
    page:
      '<path d="M6.5 3h7.8l4.2 4.2V21h-12z"/><path d="M14.3 3v4.2h4.2"/><path d="M9 12.2h6M9 15.4h6M9 18.4h3.4"/>',
    drop:
      '<path d="M12 3.2c3.6 4.2 6.2 7.2 6.2 10.7a6.2 6.2 0 0 1-12.4 0c0-3.5 2.6-6.5 6.2-10.7z"/>' +
      '<path d="M8.7 14.6a3.5 3.5 0 0 0 2.5 3" style="stroke:var(--ia,currentColor)"/>',
    ruler:
      '<g transform="rotate(-35 12 12)"><rect x="1.8" y="8.4" width="20.4" height="7.2" rx="1.2"/>' +
      '<path d="M6 8.4v3.2M9.6 8.4v2M13.2 8.4v3.2M16.8 8.4v2M20.4 8.4v3.2"/></g>',
    crate:
      '<path d="M12 3l8.4 4.2v9.6L12 21l-8.4-4.2V7.2z"/><path d="M3.6 7.2L12 11.4l8.4-4.2M12 11.4V21"/>',
    trophy:
      '<path d="M7.2 3.5h9.6v5.3a4.8 4.8 0 0 1-9.6 0z" ' + A + '/><path d="M7.2 5.4H4.6c0 3 1.3 4.6 3 5M16.8 5.4h2.6c0 3-1.3 4.6-3 5"/>' +
      '<path d="M12 13.6v4M8.4 20.5h7.2M9.6 17.6h4.8"/>',
    picture:
      '<rect x="3.5" y="4.5" width="17" height="15" rx="1.6"/><path d="M3.5 16l5-5 4 4 3-3 5 5"/>' +
      '<circle cx="16.4" cy="9.2" r="1.5" ' + AO + '/>',
    key:
      '<circle cx="7.6" cy="12" r="3.9"/><circle cx="7.6" cy="12" r="1.2" ' + AO + '/><path d="M11.5 12H21M17.6 12v3.2M20.6 12v2.4"/>',
    lens: '<circle cx="10.6" cy="10.6" r="6.6"/><path d="M15.6 15.6L21 21"/>',
    sun:
      '<circle cx="12" cy="12" r="4.2" ' + A + '/><path d="M12 2.6v2.4M12 19v2.4M2.6 12H5M19 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3L17 7M7 17l-1.7 1.7"/>',
    moon: '<path d="M20 14.2A8.6 8.6 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2z" ' + A + '/>',
    crown:
      '<path d="M3.6 18.6L2.6 8.4l5.2 4 4.2-7 4.2 7 5.2-4-1 10.2z" ' + A + '/><path d="M4.6 21h14.8"/>' +
      '<circle cx="12" cy="15.6" r="1.1" ' + K + '/><circle cx="7.4" cy="15.6" r=".8" ' + K + '/><circle cx="16.6" cy="15.6" r=".8" ' + K + '/>',
    inkwell:
      '<path d="M6.6 13.2c0-1.4 1.1-2.4 2.5-2.4h5.8c1.4 0 2.5 1 2.5 2.4V18a2.6 2.6 0 0 1-2.6 2.6H9.2A2.6 2.6 0 0 1 6.6 18z" ' + A + '/>' +
      '<path d="M9.6 10.8V9.2h4.8v1.6"/>' +
      '<path d="M12.6 9.2c.2-3.6 2.6-6 7.6-6.4-.1 4.4-2.8 6.6-6.4 6.8z"/><path d="M12.6 9.2l4.6-4.4"/>',
    sword:
      '<path d="M12 2.6l2 2.6v9.4h-4V5.2z"/><path d="M6.4 14.6h11.2"/><path d="M12 14.6v4.6"/><circle cx="12" cy="20.5" r="1.3" ' + A + '/>',
    food:
      '<path d="M15.2 4.2c3.5-.6 5.7 2.2 4.7 5.5-.8 2.5-3.5 3.7-5.5 3.3l-3.7-3.7c-.4-2.1.9-4.5 4.5-5.1z" ' + A + '/>' +
      '<path d="M10.7 12.3l-5.2 5.2"/><circle cx="4.4" cy="18.2" r="1.5"/><circle cx="6.2" cy="20.1" r="1.5"/>',
    seal:
      '<circle cx="12" cy="12" r="8.6" ' + A + '/><circle cx="12" cy="12" r="5.2"/>',
    fleuron:
      '<path d="M12 2.8c1.8 2.6 1.8 6.2 0 9.4-1.8-3.2-1.8-6.8 0-9.4z" ' + A + '/>' +
      '<path d="M10.8 11.4C8 7.8 4.4 8.8 4.4 11.7c0 2 1.8 3 3.8 2.6 1.4-.3 2.4-1 2.6-2.5z"/>' +
      '<path d="M13.2 11.4c2.8-3.6 6.4-2.6 6.4.3 0 2-1.8 3-3.8 2.6-1.4-.3-2.4-1-2.6-2.5z"/>' +
      '<path d="M7.2 15.4h9.6M12 15.4V21M9.4 21h5.2"/>',
    star:
      '<path d="M12 2.6l2.3 5.5 5.9.5-4.5 3.9 1.4 5.8L12 15.2 6.9 18.3l1.4-5.8L3.8 8.6l5.9-.5z" ' + A + '/>',

    /* ---------- the twelve "labours of the months" used on the calendar ---------- */
    m1:  /* January - the feast: a goblet */
      '<path d="M6.4 3.6h11.2c0 5.4-2.4 8.6-5.6 8.6S6.4 9 6.4 3.6z"/><path d="M6.8 6.6h10.4c-.3 3.2-2 5.2-5.2 5.2s-4.9-2-5.2-5.2z" ' + A + '/>' +
      '<path d="M12 12.2v6.4M8 20.6h8M9.4 18.6h5.2"/>',
    m2:  /* February - Candlemas: a candle */
      '<rect x="8.4" y="10.2" width="7.2" height="10.8" rx="1.2"/><path d="M12 10.2V8.7"/>' +
      '<path d="M12 2.7c1.8 1.9 2.3 3.2 1.4 4.6-.4.6-.9.9-1.4.9s-1-.3-1.4-.9C9.7 5.9 10.2 4.6 12 2.7z" ' + A + '/>' +
      '<path d="M8.4 14.2c1.6.9 3.2.9 4.4 0"/>',
    m3:  /* March - digging the garden: a spade */
      '<path d="M12 2.6v8.2M8.9 2.6h6.2"/>' +
      '<path d="M8.4 10.8h7.2v5c0 2.8-1.6 4.9-3.6 5.8-2-.9-3.6-3-3.6-5.8z" ' + A + '/><path d="M12 11v8.4" stroke-width="1.1"/>',
    m4:  /* April - blossom: a flower */
      teeth(5, function (a) { return '<ellipse cx="12" cy="5.9" rx="2.3" ry="3.5" transform="rotate(' + a + ' 12 10)" ' + A + '/>'; }) +
      '<circle cx="12" cy="10" r="1.7" ' + K + '/><path d="M12 15.6V21"/><path d="M12 18.4c1.8-2.4 3.8-2.6 5.6-2.2-.6 2-2.8 3.2-5.6 2.2z"/>',
    m5:  /* May - the hunt: a horn */
      '<path d="M3.2 17.8C5 10.2 10.8 6.4 19 6.6l2-.7-.5 7.6-1.8-.5C13.8 12.2 9.4 14 6.4 19.2z" ' + A + '/>' +
      '<ellipse cx="19.9" cy="9.8" rx="1.3" ry="3.9" transform="rotate(8 19.9 9.8)"/><circle cx="4.6" cy="18.8" r="1.25" ' + K + '/>' +
      '<path d="M9.4 9.6c.2 1.8.8 2.8 1.6 3.6"/>',
    m6:  /* June - mowing: a scythe */
      '<path d="M18 2.6L7.2 21.4"/><path d="M18 2.6c-5.4-1.4-10.8.4-14.2 4.8 5-1.6 9.2-1 12.6 1z" ' + A + '/>' +
      '<path d="M13 11.6l2.4.8M10.6 15.8l2.4.8"/>',
    m7:  /* July - harvest: a sickle */
      '<path d="M4.4 20.6l4.8-4.8" stroke-width="3"/>' +
      '<path d="M9.2 15.8C4.6 12 4.8 6 10.2 3.4c4.4-1.8 9.4-.4 10.6 3.4-3.6-2.4-7.6-1.8-9.6 1.6-1.2 2.2-.6 4.4 1.4 6.2z" ' + A + '/>',
    m8:  /* August - the grain: an ear of wheat */
      '<path d="M12 21.4V8.4"/>' +
      '<path d="M12 8.4C10.6 7 10.6 4.8 12 2.8c1.4 2 1.4 4.2 0 5.6z" ' + A + '/>' +
      '<path d="M12 12c-2.6 0-4-1.5-4.2-3.7 2.6 0 4 1.5 4.2 3.7zM12 16c-2.6 0-4-1.5-4.2-3.7 2.6 0 4 1.5 4.2 3.7z" ' + A + '/>' +
      '<path d="M12 12c2.6 0 4-1.5 4.2-3.7-2.6 0-4 1.5-4.2 3.7zM12 16c2.6 0 4-1.5 4.2-3.7-2.6 0-4 1.5-4.2 3.7z" ' + A + '/>',
    m9:  /* September - the vintage: grapes */
      '<circle cx="8.6" cy="10.8" r="2.2" ' + A + '/><circle cx="12" cy="10.8" r="2.2" ' + A + '/><circle cx="15.4" cy="10.8" r="2.2" ' + A + '/>' +
      '<circle cx="10.3" cy="14.4" r="2.2" ' + A + '/><circle cx="13.7" cy="14.4" r="2.2" ' + A + '/><circle cx="12" cy="18" r="2.2" ' + A + '/>' +
      '<path d="M12 8.6V4.6c1.6.2 3 .8 4 2"/><path d="M12 5.4c-.2-1.8-1.6-2.8-3.4-2.5.2 1.9 1.6 2.9 3.4 2.5z"/>',
    m10: /* October - sowing: a seed sack */
      '<path d="M8.4 7.4L6.2 11v7.6a2 2 0 0 0 2 2h7.6a2 2 0 0 0 2-2V11l-2.2-3.6" ' + A + '/>' +
      '<path d="M8.4 7.4c1.2-1 2.4-1.4 3.6-1.4s2.4.4 3.6 1.4"/><path d="M8.8 7.8h6.4"/>' +
      '<circle cx="11" cy="14" r=".9" ' + K + '/><circle cx="13.8" cy="15.6" r=".9" ' + K + '/><circle cx="10.6" cy="17.2" r=".9" ' + K + '/>',
    m11: /* November - acorns for the pigs: an acorn */
      '<path d="M5.8 10.2c0-3.2 2.8-5.2 6.2-5.2s6.2 2 6.2 5.2z" ' + A + '/>' +
      '<path d="M6.8 10.2c0 5.6 2.8 9.6 5.2 10.4 2.4-.8 5.2-4.8 5.2-10.4"/><path d="M12 5V3"/>' +
      '<path d="M9.2 7.4l1 1M13.4 7.4l1 1M11.2 8.6l1 1"/>',
    m12: /* December - Yule: a star */
      '<path d="M12 2.8v18.4M2.8 12h18.4M5.5 5.5l13 13M18.5 5.5l-13 13"/><circle cx="12" cy="12" r="2.2" ' + A + '/>' +
      '<path d="M12 2.8l-1.3 2.2h2.6zM12 21.2l-1.3-2.2h2.6z" ' + K + '/>'
  };

  /* emoji (without the variation selector) -> icon name */
  var EMOJI = {
    '📅': 'scroll', '🗓': 'scroll', '📜': 'scroll',
    '🔔': 'bell', '🔕': 'bellOff',                               // 📅 🗓
    '📈': 'chart', '📊': 'chart',                                 // 📈 📊
    '⚙': 'gear',                                                                 // ⚙
    '📂': 'folder', '📁': 'folder', '🗂': 'folder',     // 📂 📁 🗂
    '⏱': 'hourglass',                                                            // ⏱
    '📚': 'books',                                                          // 📚
    '🔁': 'cycle',                                                          // 🔁
    '🔒': 'lock', '🔓': 'unlock',                                 // 🔒 🔓
    '📎': 'clasp',                                                          // 📎
    '🧰': 'chest',                                                          // 🧰
    '🧮': 'abacus',                                                         // 🧮
    '📤': 'trayUp', '📥': 'trayDown',                             // 📤 📥
    '⚠': 'warning',                                                              // ⚠
    '📋': 'list',                                                           // 📋
    '🏋': 'dumbbell', '💪': 'dumbbell',                           // 🏋 💪
    '🔢': 'tally',                                                          // 🔢
    '🔥': 'flame',                                                          // 🔥
    '🎯': 'target',                                                         // 🎯
    '🔊': 'speaker',                                                        // 🔊
    '⏸': 'pause', '⏭': 'next', '⏮': 'prev',                            // ⏸ ⏭ ⏮
    '✅': 'checkSeal', '🛡': 'shield',                                                            // ✅
    '👤': 'helm',                                                           // 👤
    '🎨': 'palette',                                                        // 🎨
    '📄': 'page',                                                           // 📄
    '💧': 'drop',                                                           // 💧
    '📏': 'ruler',                                                          // 📏
    '📦': 'crate',                                                          // 📦
    '➕': 'plus',                                                                 // ➕
    '✏': 'quill', '✎': 'quill',                                             // ✏ ✎
    '🏆': 'trophy',                                                         // 🏆
    '🖼': 'picture',                                                        // 🖼
    '📝': 'inkwell',                                                        // 📝
    '🎉': 'crown',                                                          // 🎉
    '🔑': 'key',                                                            // 🔑
    '🔍': 'lens',                                                           // 🔍
    '🌙': 'moon', '☀': 'sun',                                                           // 🌙
    '✕': 'x', '✖': 'x',                                                     // ✕ ✖
    '✓': 'check', '✔': 'check',                                             // ✓ ✔
    '↺': 'undo',                                                                 // ↺
    '⇄': 'swap', '⇋': 'swap',                                               // ⇄ ⇋
    '▸': 'chevR', '▾': 'chevD', '▴': 'chevU',                          // ▸ ▾ ▴
    '←': 'arrowL',                                                                // ←
    '◀': 'playL', '▶': 'play'                                               // ◀ ▶
  };

  var SVGNS = 'http://www.w3.org/2000/svg';
  var BASE = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';

  /* ---------- icon sets ---------- */
  var activeSet = 'medieval';
  function setDef(name) {
    var all = window.BSIconSets;
    return all && Object.prototype.hasOwnProperty.call(all, name) ? all[name] : null;
  }
  function drawing(name) {            // what the symbol "name" holds in the set that is on
    var s = setDef(activeSet);
    return (s && s.icons && Object.prototype.hasOwnProperty.call(s.icons, name) && s.icons[name]) || ICONS[name];
  }
  function groupAttrs() { var s = setDef(activeSet); return (s && s.base) || BASE; }
  function symbolHtml(name) { return '<g ' + groupAttrs() + '>' + drawing(name) + '</g>'; }

  function buildSprite() {
    var out = '<svg xmlns="' + SVGNS + '" id="bsIconSprite" width="0" height="0" aria-hidden="true" ' +
      'style="position:absolute;width:0;height:0;overflow:hidden">';
    Object.keys(ICONS).forEach(function (name) {
      out += '<symbol id="i-' + name + '" viewBox="0 0 24 24">' + symbolHtml(name) + '</symbol>';
    });
    return out + '</svg>';
  }

  // the look changed: take its set and redraw the symbols that are already in the page
  function useSet(name) {
    var next = setDef(name) ? name : 'medieval';
    if (next === activeSet) return;
    activeSet = next;
    var sprite = document.getElementById('bsIconSprite');
    if (!sprite) return;
    Object.keys(ICONS).forEach(function (n) {
      var sym = sprite.querySelector('#i-' + n);
      if (sym) sym.innerHTML = symbolHtml(n);
    });
  }

  function installSprite() {
    if (document.getElementById('bsIconSprite') || !document.body) return;
    document.body.insertAdjacentHTML('afterbegin', buildSprite());
  }

  /* <span class="ico"><svg><use/></svg></span>, for templates */
  function html(name, cls) {
    if (!ICONS[name]) return '';
    return '<span class="ico' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><svg viewBox="0 0 24 24"><use href="#i-' + name + '"/></svg></span>';
  }

  /* ---------- emoji -> icon swap ---------- */
  var keys = Object.keys(EMOJI).map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
  var RE = new RegExp('(' + keys.join('|') + ')\\uFE0F?', 'g');
  var QUICK = /[←-⯿\uD83C-\uD83E]/;       // a cheap pre-test before running the big regex
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, OPTION: 1, SELECT: 1, SVG: 1, TITLE: 1, NOSCRIPT: 1, CODE: 1 };

  function skippable(node) {
    for (var el = node.parentNode; el && el.nodeType === 1; el = el.parentNode) {
      if (SKIP[el.nodeName.toUpperCase()] || el.nodeName === 'svg') return true;
      if (el.classList && (el.classList.contains('ico') || el.hasAttribute('data-no-icon'))) return true;
      if (el.isContentEditable) return true;
    }
    return false;
  }

  function swapTextNode(node) {
    var text = node.nodeValue;
    if (!text || !QUICK.test(text)) return;
    RE.lastIndex = 0;
    if (!RE.test(text)) return;
    if (skippable(node)) return;
    RE.lastIndex = 0;
    var frag = document.createDocumentFragment(), last = 0, m;
    while ((m = RE.exec(text))) {
      var name = EMOJI[m[1]];
      if (!name || !ICONS[name]) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var span = document.createElement('span');
      span.className = 'ico';
      span.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
      var hidden = document.createElement('span');
      hidden.className = 'ico-t';
      hidden.textContent = m[0];
      span.appendChild(hidden);
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (last === 0) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    if (node.parentNode) node.parentNode.replaceChild(frag, node);
  }

  function swapIn(root) {
    if (!root) return;
    if (root.nodeType === 3) { swapTextNode(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName.toUpperCase()] || root.nodeName === 'svg') return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) swapTextNode(nodes[i]);
  }

  var pending = [], scheduled = false, observer = null;

  function flush() {
    scheduled = false;
    var list = pending; pending = [];
    if (observer) observer.disconnect();
    try {
      for (var i = 0; i < list.length; i++) {
        var node = list[i];
        if (node.isConnected) swapIn(node);
      }
    } finally {
      watch();
    }
  }

  function queue(node) {
    pending.push(node);
    if (!scheduled) {
      scheduled = true;
      (window.requestAnimationFrame || setTimeout)(flush, 0);
    }
  }

  function watch() {
    if (!observer || !document.body) return;
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  }

  function start() {
    if (window.BSSkin) activeSet = setDef(window.BSSkin.get()) ? window.BSSkin.get() : 'medieval';
    installSprite();
    swapIn(document.body);
    observer = new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var r = records[i];
        if (r.type === 'characterData') { queue(r.target); continue; }
        for (var j = 0; j < r.addedNodes.length; j++) queue(r.addedNodes[j]);
      }
    });
    watch();
  }

  window.BSIcons = { names: Object.keys(ICONS), html: html, swapIn: swapIn, useSet: useSet, set: function () { return activeSet; } };
  window.addEventListener('bsskinchange', function (e) { useSet(e && e.detail ? e.detail.skin : 'medieval'); });

  /* This file is loaded at the end of <body>, so everything above it is already parsed. */
  if (document.body && document.readyState !== 'loading') start();
  else if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
