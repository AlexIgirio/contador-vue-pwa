const CACHE_NAME = "v1_cache_contador_app_vue";
const urlsToCache = [
    "./",
    "./static/img/favicon.png",
    "./static/img/icon32.png",
    "./static/img/icon64.png",
    "./static/img/icon128.png",
    "./static/img/icon256.png",
    "./static/img/icon512.png",
    "./static/img/icon1024.png",
    "./static/js/main.js",
    "./static/js/mount.js",
    "https://unpkg.com/vue@3",
    "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log(err)
            )
        )
    )
});

self.addEventListener("activate", e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if (cacheWhitelist.indexOf(cacheName) === -1){
                                return caches.delete(cacheName)
                            }
                        }
                    )
                )
            }
        ).then(
            () => self.clients.claim()
        )
    )
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(
            res => {
                if (res){
                    return res
                }
                return fetch(e.request)
            }
        )
    )
});
