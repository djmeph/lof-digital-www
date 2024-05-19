// Use the current commit ID to invalidate the cache (git rev-parse HEAD)
const cacheName = 'SERVICE_WORKER_CACHE_ID'; // replaced by commit ID in Github Actions

const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

(() => {
  self.addEventListener('install', () => {
    console.log('service worker installed');
  });

  self.addEventListener('activate', () => {
    console.log('service worker activated');
  });

  self.addEventListener('fetch', (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
})();
