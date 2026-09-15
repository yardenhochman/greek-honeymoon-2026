let installPrompt;
const installButton = document.querySelector("[data-install]");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault(); installPrompt = event; installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  await installPrompt.prompt(); installPrompt = null; installButton.hidden = true;
});
window.addEventListener("appinstalled", () => { installButton.hidden = true; });
if ("serviceWorker" in navigator && window.isSecureContext) {
  const status = document.querySelector("[data-offline-status]");
  const updateButton = document.querySelector("[data-update]");
  let hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (hadController) window.location.reload();
    hadController = true;
  });
  navigator.serviceWorker.register("./sw.js").then(registration => {
    const showUpdate = () => {
      if (registration.waiting) updateButton.hidden = false;
    };
    showUpdate();
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      worker?.addEventListener("statechange", showUpdate);
    });
    updateButton.addEventListener("click", () => registration.waiting?.postMessage("ACTIVATE_UPDATE"));
    return navigator.serviceWorker.ready;
  }).then(() => {
    const refreshStatus = () => { status.textContent = navigator.onLine
      ? "Saved for offline use · itinerary, guides and route maps. External links need internet."
      : "Offline · your saved itinerary, guides and route maps are available."; };
    refreshStatus();
    window.addEventListener("online", refreshStatus);
    window.addEventListener("offline", refreshStatus);
  }).catch(() => { status.textContent = "Offline saving is unavailable. Use Print plan to keep a PDF copy."; });
}
