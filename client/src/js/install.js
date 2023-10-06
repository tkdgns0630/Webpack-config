const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // save the prompt event for later
  window.deferredPrompt = event;
  // if button is clicked the hidden class will be removed and toggle stops.
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // save deferredprompt event to a variable
  const promptEvent = window.deferredPrompt;
  // if it there is no saved event return
  if (!promptEvent) {
    return;
  }
  // runs the prompt event
  promptEvent.prompt();
  // delete the deferred event from window
  window.deferredPrompt = null;
  // remove the button by giving it hidden.
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
// deferred event deleted when installed.
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
