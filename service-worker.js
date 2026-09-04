const CACHE_NAME = 'razvivayushchie-skazki-v1';
const ASSETS = [
  '/kids-story-quest_1/',
  '/kids-story-quest_1/index.html',
  '/kids-story-quest_1/css/style.css',
  '/kids-story-quest_1/js/app.js',
  '/kids-story-quest_1/js/data/catWalkStory.js',
  '/kids-story-quest_1/js/data/catalog.js',
  '/kids-story-quest_1/js/engine/sound.js',
  '/kids-story-quest_1/assets/images/common/cat-walk.png',
  '/kids-story-quest_1/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
