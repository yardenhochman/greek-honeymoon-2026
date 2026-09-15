const CACHE = "greek-honeymoon-public-2026-09-16-v7";
const FILES = ["./translations.js", "./language.js", "./day-01.html", "./day-02.html", "./day-03.html", "./day-04.html", "./day-05.html", "./day-06.html", "./day-07.html", "./day-08.html", "./day-09.html", "./day-10.html", "./day-11.html", "./assets/chania.jpg", "./assets/perissa.jpg", "./assets/greek-table.jpg", "./practical.html", "./experiences.html", "./phone.js", "./", "./index.html", "./app.js", "./styles.css", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./assets/map-day-01.png", "./assets/map-day-02.png", "./assets/map-day-03.png", "./assets/map-day-04.png", "./assets/map-day-05.png", "./assets/map-day-06.png", "./assets/map-day-07.png", "./assets/map-day-08.png", "./assets/map-day-10.png", "./assets/map-day-11.png", "./assets/gemista.jpg", "./assets/fava.jpg", "./assets/tomatokeftedes.jpg", "./assets/kournas.jpg", "./assets/rethymno.jpg", "./assets/loutro.jpg", "./assets/preveli.jpg", "./assets/dakos.jpg", "./assets/horta.jpg", "./assets/briam.jpg"];
const urls = new Set(FILES.map(path => new URL(path, self.registration.scope).href));
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE)
    .then(cache => cache.addAll(FILES.map(path => new Request(path, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
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
