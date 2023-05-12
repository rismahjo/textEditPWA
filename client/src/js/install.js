const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt", event);
  // Stash event to trigger later
  window.deferredPrompt = event;
  // Remove 'hidden' class from install button
  divInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show install prompt
  promptEvent.prompt();

  // Deferred prompt no longer available, hide button
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("appinstalled", event);
  // Clear deferredPrompt
  window.deferredPrompt = null;
});
