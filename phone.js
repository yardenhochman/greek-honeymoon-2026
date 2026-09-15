const phoneTools = document.querySelector(".phone-tools");
const offlineStatus = document.querySelector("[data-offline-status]");
const updateButton = document.querySelector("[data-update]");
// An installed app already has a home-screen entry; suppress install guidance immediately.
let savedOffline = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
function refreshPhoneTools() {
  // Once the plan is cached, only a real pending update needs attention.
  phoneTools.hidden = savedOffline && updateButton.hidden;
  offlineStatus.hidden = savedOffline;
  phoneTools.querySelector("details").hidden = savedOffline;
  if (savedOffline) installButton.hidden = true;
}
let installPrompt;
const installButton = document.querySelector("[data-install]");
refreshPhoneTools();
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault(); installPrompt = event; installButton.hidden = savedOffline;
});
installButton.addEventListener("click", async () => {
  if (!installPrompt) return;
  await installPrompt.prompt(); installPrompt = null; installButton.hidden = true;
});
window.addEventListener("appinstalled", () => { installButton.hidden = true; });
if ("serviceWorker" in navigator && window.isSecureContext) {
  const status = offlineStatus;
  let hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (hadController) window.location.reload();
    hadController = true;
  });
  navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).then(registration => {
    // Installed apps often resume an existing page instead of navigating again.
    const checkForUpdate = () => {
      if (navigator.onLine) registration.update().catch(() => {});
    };
    window.addEventListener("pageshow", checkForUpdate);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") checkForUpdate();
    });
    checkForUpdate();
    const showUpdate = () => {
      updateButton.hidden = !registration.waiting;
      refreshPhoneTools();
    };
    showUpdate();
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      worker?.addEventListener("statechange", showUpdate);
    });
    updateButton.addEventListener("click", () => registration.waiting?.postMessage("ACTIVATE_UPDATE"));
    return navigator.serviceWorker.ready;
  }).then(() => {
    savedOffline = true;
    refreshPhoneTools();
    const refreshStatus = () => { status.textContent = navigator.onLine
      ? "Saved for offline use · itinerary, guides and route maps. External links need internet."
      : "Offline · your saved itinerary, guides and route maps are available."; };
    refreshStatus();
    window.addEventListener("online", refreshStatus);
    window.addEventListener("offline", refreshStatus);
  }).catch(() => { status.textContent = "Offline saving is unavailable. Use Print plan to keep a PDF copy."; });
}
