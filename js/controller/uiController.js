app.namespace("app.uiController");

(function(g) {
  app.uiController.refreshBoardLinks = function() {
    var boardsCont = document.getElementsByClassName("header-board-link-cont")[0];
    boardsCont.innerHTML = "";
    var json = app.ls.getItem("o");
    var board = JSON.parse(json);
    boardsCont.innerHTML += app.template.header.boardLink.replace("$BOARD%", board.name);
  };
})();
