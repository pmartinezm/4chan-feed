app.namespace("app.boards.gestor");

(function(g) {
  app.boards.gestor.createBoard = function(boardName) {
    var boardsJson = app.ls.getItem("boards");
    var boards = JSON.parse(boardsJson);
    var board = {
      id: boardName,
      name: "/" + boardName + "/"
    };
    boards.board.push(board);
    boardsJson =JSON.stringify(boards);
    app.ls.setItem("boards", boardsJson);
    app.controller.uiController.refreshBoardLinks();
  }
})();
