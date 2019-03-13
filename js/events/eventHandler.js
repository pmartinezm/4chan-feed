app.namespace("app.eventHandler");

(function(g) {
  document.getElementById("showModalBtn").addEventListener("click", function() {
    app.modalController.show();
  });
})();
