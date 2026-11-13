/* BeerSports - the icons of the cyberpunk look (new in 1.6.0).
 *
 * medieval.js is the icon engine: every emoji in the app is swapped for a small drawing from a sprite. This file hands it a
 * second set. It draws again the icons that only make sense in the Middle Ages (the scroll, the treasure chest, the quill, the
 * hourglass, the knight's helm, the abacus, the twelve "labours of the months"...) as angular, techy ones; every icon it does
 * not draw is taken from the medieval set, but is stroked here with square caps and mitred corners, so the whole set reads as
 * one family. "--ia" is the accent of an icon (the filled parts): in this look it is the neon accent colour.
 *
 * Loaded before medieval.js, which reads window.BSIconSets when it starts and when the look changes. No network.
 */
(function () {
  'use strict';

  var A = 'style="fill:var(--ia,currentColor)"';                 // accent fill, keeps the outline
  var AO = 'style="fill:var(--ia,currentColor);stroke:none"';    // accent fill, no outline

  var icons = {
    /* ---------- the four main tabs and the Menu list ---------- */
    scroll:     // Agenda: a calendar
      '<path d="M3.6 5.4h16.8v15.2H3.6z"/><path d="M3.6 9.6h16.8"/><path d="M8 3v4.2M16 3v4.2"/>' +
      '<path d="M6.6 12.4h3v2.8h-3z" ' + AO + '/><path d="M12.4 13.8h5M6.6 18h10.8"/>',
    hourglass:  // Workout / Countdown: a stopwatch
      '<circle cx="12" cy="13.6" r="7.4"/><path d="M9.4 3h5.2M12 3v3.2"/><path d="M18.4 6l1.8 1.8"/>' +
      '<path d="M12 13.6l3.2-3.2"/><circle cx="12" cy="13.6" r="1.3" ' + AO + '/>',
    chest:      // Menu: a grid of four
      '<path d="M3.6 3.6h7.2v7.2H3.6z"/><path d="M13.2 3.6h7.2v7.2h-7.2z" ' + A + '/>' +
      '<path d="M3.6 13.2h7.2v7.2H3.6z"/><path d="M13.2 13.2h7.2v7.2h-7.2z"/>',
    helm:       // Profile: a visored helmet
      '<path d="M5 20.8V11L12 3.2 19 11v9.8z"/><path d="M7.2 10.6h9.6v3.2H7.2z" ' + AO + '/><path d="M9.4 17h5.2M9.4 19.2h5.2"/>',
    abacus:     // Calculator
      '<path d="M4.6 2.8h14.8v18.4H4.6z"/><path d="M7.2 5.4h9.6v3.6H7.2z" ' + A + '/>' +
      '<path d="M8 12.4h.01M12 12.4h.01M16 12.4h.01M8 15.6h.01M12 15.6h.01M16 15.6h.01M8 18.6h.01M12 18.6h.01M16 18.6h.01" stroke-width="2.4"/>',

    /* ---------- everyday ---------- */
    quill:      // edit: a pencil
      '<path d="M4.2 19.8l1-4.4L16.2 4.4l4.4 4.4L9.6 19.8z"/><path d="M14 6.6l4.4 4.4"/><path d="M5.2 15.4l3.4 3.4"/>',
    book:       // a notebook
      '<path d="M5.4 3.4h13.2v17.2H5.4z"/><path d="M9.2 3.4v17.2"/><path d="M12.4 8h3.8M12.4 11.6h3.8"/>',
    candle:     // a bolt
      '<path d="M13.6 2.6L5.2 13.6h6l-1 7.8 8.6-11.2h-6z" ' + A + '/>',
    books:      // stacked layers
      '<path d="M12 3.4l8.8 4.7L12 12.8 3.2 8.1z" ' + A + '/><path d="M3.2 12.2L12 16.9l8.8-4.7"/><path d="M3.2 16.2L12 20.9l8.8-4.7"/>',
    inkwell:    // notes: a memo
      '<path d="M5 3.4h10.2L19 7.2v13.4H5z"/><path d="M15.2 3.4v3.8H19"/><path d="M8.4 11.4h7.2M8.4 14.6h7.2"/>' +
      '<path d="M8.4 17.2h2.6v2.4H8.4z" ' + AO + '/>',
    seal:       // a hexagon badge
      '<path d="M12 2.8l7.8 4.5v9.4L12 21.2l-7.8-4.5V7.3z" ' + A + '/><path d="M12 7.2l3.9 2.2v4.4L12 16l-3.9-2.2V9.4z"/>',
    fleuron:    // two chevrons
      '<path d="M5.4 6l6 6-6 6"/><path d="M12.6 6l6 6-6 6" style="stroke:var(--ia,currentColor)"/>',
    crown:      // the crown of the bear on the icon
      '<path d="M3.2 18.8L2.8 6.2l5.6 5 3.6-7.6 3.6 7.6 5.6-5-.4 12.6z" ' + A + '/><path d="M3.6 21.4h16.8"/>',
    star:       // a spark
      '<path d="M12 2.4l2.4 7.2 7.2 2.4-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z" ' + A + '/>',

    /* ---------- the twelve month marks of the calendar: plain geometry, one per month ---------- */
    m1:  '<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z" ' + A + '/>',
    m2:  '<path d="M12 2.8L20 12l-8 9.2L4 12z" ' + A + '/>',
    m3:  '<path d="M12 3.4l9 16.2H3z" ' + A + '/>',
    m4:  '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="3.2" ' + AO + '/>',
    m5:  '<path d="M4 4h16v16H4z"/><path d="M8.4 12h7.2M12 8.4v7.2" style="stroke:var(--ia,currentColor)"/>',
    m6:  '<path d="M13.6 2.6L5.2 13.6h6l-1 7.8 8.6-11.2h-6z" ' + A + '/>',
    m7:  '<circle cx="12" cy="12" r="3.8" ' + A + '/><path d="M12 2.6v3.4M12 18v3.4M2.6 12H6M18 12h3.4M5.4 5.4l2.4 2.4M16.2 16.2l2.4 2.4M5.4 18.6l2.4-2.4M16.2 7.8l2.4-2.4"/>',
    m8:  '<path d="M4.4 20.4V13M9.6 20.4V6M14.8 20.4V10M20 20.4V3.6"/>',
    m9:  '<circle cx="12" cy="12" r="7.2"/><path d="M12 2.4v5M12 16.6v5M2.4 12h5M16.6 12h5"/>',
    m10: '<path d="M4.4 8l7.6 5 7.6-5" style="stroke:var(--ia,currentColor)"/><path d="M4.4 13l7.6 5 7.6-5"/>',
    m11: '<path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z"/><path d="M12 8l3.5 2v4L12 16l-3.5-2v-4z" ' + AO + '/>',
    m12: '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/>'
  };

  window.BSIconSets = window.BSIconSets || {};
  window.BSIconSets.cyberpunk = {
    base: 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter"',
    icons: icons
  };
})();
