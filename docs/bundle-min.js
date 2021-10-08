var splash = document.getElementById("splash"),
  root = document.getElementById("root");
setTimeout(function () {
  (splash.innerHTML = ""), root.classList.remove("hidden");
}, 3e3);
