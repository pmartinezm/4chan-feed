app.namespace("app.eventHandler");

(function(g) {
  document.getElementById("addBoardBtn").addEventListener("click", function() {
    console.log("Board added: mu");
    app.gestor.createBoard("mu");
  });
})();
