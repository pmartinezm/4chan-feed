app.namespace("app.events.eventHandler");

(function(g) {
  document.getElementById("showModalBtn").addEventListener("click", function() {
    app.controller.modalController.show();
  });
})();
