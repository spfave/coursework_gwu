// TODO: add listener and handler to cache static assets
const STATIC_CACHE = 'static-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/css/style.css',
  '/assets/images/brandenburg.jpg',
  '/assets/images/map.jpg',
  '/assets/images/reichstag.jpg',
  '/assets/images/logo16.png',
  '/assets/images/logo48.png',
  '/assets/images/logo128.png',
  '/assets/images/logo512.png',
];

// install
self.addEventListener('install', function (evt) {
  evt.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log('Your files were pre-cached successfully!');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => console.log(err))
  );

  self.skipWaiting();
});

self.addEventListener('activate', function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== STATIC_CACHE) {
            console.log('Removing old cache data', key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// TODO: add listener and handler to retrieve static assets from the Cache Storage in the browser
self.addEventListener('fetch', function (evt) {
  // Serve static assets using "offline-first" approach.
  // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      return response || fetch(evt.request);
    })
  );
});
