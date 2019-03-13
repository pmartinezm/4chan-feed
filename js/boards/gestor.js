app.namespace("app.gestor");

(function(g) {
  app.gestor.createBoard = function(board) {
    var button = {
      id: board,
      name: "/" + board + "/",
      letter: board
    };
    app.ls.setItem(button.id, JSON.stringify(button));
    app.uiController.refreshBoardLinks();
  }
})();
