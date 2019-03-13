app.namespace("app.controller.uiController");

(function(g) {
  app.controller.uiController.refreshBoardLinks = function() {
    var boardsCont = document.getElementsByClassName("header-board-link-cont")[0];
    boardsCont.innerHTML = "";
    var json = app.ls.getItem("boards");
    var boards = JSON.parse(json);
    for (var i = 0; i < boards.board.length; i++) {
      //boardsCont.innerHTML += app.template.header.boardLink.replace("$BOARD%", boards.board[i].name);
      app.controller.uiController.createLinkButton(boards.board[i].id, "header-board-link-cont");
    }
  };

  app.controller.uiController.createLinkButton = function(board, container) {
    var cont = document.getElementsByClassName(container)[0];
    var button = document.createElement("button");
    button.setAttribute("class", "board-link");
    button.innerText = "/" + board + "/";

    button.onclick = function() {
      app.boards.loader.loadBoard(board);
    }

    cont.appendChild(button);
  }
})();
