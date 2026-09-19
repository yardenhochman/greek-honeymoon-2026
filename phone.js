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
let tripRegistration;
if ("serviceWorker" in navigator && window.isSecureContext) {
  const status = offlineStatus;
  let hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (hadController) window.location.reload();
    hadController = true;
  });
  tripRegistration = navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" });
  tripRegistration.then(registration => {
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

// External publisher photos remain linked when unavailable offline.
document.addEventListener('error', event => {
  const image = event.target;
  if (image instanceof HTMLImageElement && !image.src.startsWith(location.origin + '/')) {
    image.style.display = 'none';
  }
}, true);

// Always available, even when the saved-offline banner is hidden.
const refreshButton = document.createElement("button");
refreshButton.type = "button";
refreshButton.className = "refresh-button";
refreshButton.dataset.refresh = "";
refreshButton.textContent = "Refresh";
refreshButton.setAttribute("aria-label", "Check for the latest version");
document.querySelector(".site-header").append(refreshButton);
const refreshMessage = document.createElement("p");
refreshMessage.className = "refresh-message";
refreshMessage.setAttribute("role", "status");
refreshMessage.hidden = true;
document.body.append(refreshMessage);
refreshButton.addEventListener("click", async () => {
  refreshMessage.hidden = false;
  if (!navigator.onLine) {
    refreshMessage.textContent = "You are offline. Your saved plan is still available; refresh when connected.";
    return;
  }
  refreshButton.disabled = true;
  refreshButton.textContent = "Checking…";
  refreshMessage.textContent = "Checking for the latest version…";
  try {
    const registration = await tripRegistration;
    if (registration) {
      // update() fetches the worker script; wait for its assets before reloading.
      await registration.update();
      const worker = registration.installing || registration.waiting;
      if (worker) {
        refreshMessage.textContent = "Downloading the latest plan…";
        await new Promise((resolve, reject) => {
          const timer = setTimeout(() => finish(new Error("Update timeout")), 45000);
          function finish(error) {
            clearTimeout(timer);
            worker.removeEventListener("statechange", check);
            error ? reject(error) : resolve();
          }
          function check() {
            if (worker.state === "activated") finish();
            else if (worker.state === "redundant") finish(new Error("Update failed"));
            else if (worker.state === "installed") worker.postMessage("ACTIVATE_UPDATE");
          }
          worker.addEventListener("statechange", check);
          check();
        });
      }
    }
    window.location.reload();
  } catch {
    refreshMessage.textContent = "Could not refresh. Your saved plan is safe; please try again.";
    refreshButton.disabled = false;
    refreshButton.textContent = "Refresh";
  }
});
