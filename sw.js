// BeerSports service worker
// Purpose: (1) let the app open offline once installed, and (2) satisfy the
// browser's "installable PWA" checklist (manifest + service worker with a
// fetch handler). Everything here is same-origin only — no external calls,
// matching the app's CSP (connect-src 'none').
//
// Bump CACHE_VERSION whenever any cached file below changes, so returning
// users get the update instead of a stale copy.
const CACHE_VERSION = 'beersports-en-v17';

const APP_SHELL = [
  './beerleertsports-en.html',
  './app-en.js',
  './features-core.js',
  './nutrition-core.js',
  './features-i18n.js',
  './skin.js',
  './cyberpunk-icons.js',
  './medieval.js',
  './mobile-fix.js',
  './notify.js',
  './stylese.css',
  './calculator.css',
  './medieval.css',
  './features.css',
  './skin-structure.css',
  './cyberpunk.css',
  './medieval-dark.css',
  './cyberpunk-light.css',
  './motion.css',
  './webapp.css',
  './manifest-en.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './fonts/BSFraktur-Bold.woff2',
  './fonts/BSFraktur-Regular.woff2',
  './fonts/BSPagella-bold.woff',
  './fonts/BSPagella-bolditalic.woff',
  './fonts/BSPagella-italic.woff',
  './fonts/BSPagella-regular.woff',
  './fonts/Orbitron-500.woff2',
  './fonts/Orbitron-700.woff2',
  './fonts/Orbitron-900.woff2',
  './fonts/Rajdhani-500.woff2',
  './fonts/Rajdhani-600.woff2',
  './fonts/Rajdhani-700.woff2',
  './fonts/ShareTechMono-400.woff2',
  './img/bear.png',
  './img/bear-cyber.png',
  './img/frame-card.svg',
  './img/frame-inner.svg',
  './img/frame-modal.svg',
  './img/orn-center.svg',
  './img/parchment.jpg',
  './img/wood.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: answer instantly from cache when possible, and
// quietly refresh the cache in the background for next time. Falls back to
// the cached app shell page if a navigation happens while offline.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => null);

        if (cached) {
          network; // refresh cache in the background, ignore result here
          return cached;
        }

        return network.then((res) => {
          if (res) return res;
          if (req.mode === 'navigate') return cache.match('./beerleertsports-en.html');
          return Response.error();
        });
      })
    )
  );
});

// A tap on a notification (a reminder that is due) brings BeerSports to the front, or opens it, and says which page
// the notification was about. Reminders themselves are shown by notify.js in the page; this only handles the tap.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const target = new URL('beerleertsports-en.html', self.registration.scope).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if (client.url.indexOf('beerleertsports-en.html') !== -1) {
          return client.focus().then((focused) => {
            (focused || client).postMessage({ type: 'bs-notification-click', tab: data.tab || '' });
          });
        }
      }
      return self.clients.openWindow(target);
    })
  );
});
