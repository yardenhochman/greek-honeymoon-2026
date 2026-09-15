const CACHE = "greek-honeymoon-public-2026-09-15-v1";
const FILES = ["./", "./index.html", "./app.js", "./styles.css", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./assets/map-day-01.png", "./assets/map-day-02.png", "./assets/map-day-03.png", "./assets/map-day-04.png", "./assets/map-day-05.png", "./assets/map-day-06.png", "./assets/map-day-07.png", "./assets/map-day-08.png", "./assets/map-day-10.png", "./assets/map-day-11.png"];
const urls = new Set(FILES.map(path => new URL(path, self.registration.scope).href));
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});
self.addEventListener("activate", event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("greek-honeymoon-public-") && key !== CACHE).map(key => caches.delete(key)))),
    self.clients.claim()
  ]));
});
self.addEventListener("message", event => {
  if (event.data === "ACTIVATE_UPDATE") self.skipWaiting();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  url.search = "";
  if (!urls.has(url.href)) return;
  event.respondWith(caches.open(CACHE).then(async cache =>
    (await cache.match(url.href)) || fetch(event.request)
  ));
});
