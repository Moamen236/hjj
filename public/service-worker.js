const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',

    '/images/digital-infrastructure.gif',
    '/images/frame.png',
    '/images/home.png',
    '/images/intro-2.mp4',
    '/images/intro-overlay.mp4',
    '/images/list.png',
    '/images/page-1.mp4',
    '/images/page-2.mp4',
    '/images/title-shape-en.png',
    '/images/title-shape.png',

    '/images/videos/accessing-housing.mp4',
    '/images/videos/developing-accommodation.mp4',
    '/images/videos/developing-subsistence.mp4',
    '/images/videos/digital-services.mp4',

    '/images/main/1.gif',
    '/images/main/2.gif',
    '/images/main/3.gif',
    '/images/main/4.gif',
    '/images/main/5.gif',

    '/images/accommodation/happy-point-3.jpg',
    '/images/accommodation/system-point-1.gif',
    '/images/accommodation/system-point-2.gif',
    '/images/accommodation/system-point-3.gif',
    '/images/accommodation/tasken-point-1.jpg',
    '/images/accommodation/tasken-point-2.jpg',

    '/images/housing/happy-point-3.jpg',
    '/images/housing/system-point-1.gif',
    '/images/housing/system-point-2-3.gif',
    '/images/housing/tablet-point-1.gif',

    '/images/services/happy-point-3.jpg',
    '/images/services/mobile-point-2.gif',
    '/images/services/system-point-1.gif',
    '/images/services/system-point-2.gif',
    '/images/services/system-point-3.gif',
    '/images/services/tablet-point-1.gif',

    '/images/subsistence/pic-point-3.png',
    '/images/subsistence/racaya-point-1.png',
    '/images/subsistence/system-point-1.gif',
    '/images/subsistence/system-point-2.gif',
    '/images/subsistence/system-point-3.gif',
    '/images/subsistence/tablet-point-3.gif',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//         fetch(event.request)
//             .then(response => {
//                 const responseClone = response.clone();
//                 caches.open(CACHE_NAME)
//                     .then(cache => {
//                         cache.put(event.request.url, responseClone);
//                     });
//                 return response;
//             }).catch(error => caches.match(event.request).then(response => response))
//     )
// })