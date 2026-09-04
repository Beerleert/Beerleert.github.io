// BeerSports service worker
// Purpose: (1) let the app open offline once installed, and (2) satisfy the
// browser's "installable PWA" checklist (manifest + service worker with a
// fetch handler). Everything here is same-origin only — no external calls,
// matching the app's CSP (connect-src 'none').
//
// Bump CACHE_VERSION whenever any cached file below changes, so returning
// users get the update instead of a stale copy.
const CACHE_VERSION = 'beersports-en-v1';

const APP_SHELL = [
  './beerleertsports-en.html',
  './app-en.js',
  './stylese.css',
  './manifest-en.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
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
