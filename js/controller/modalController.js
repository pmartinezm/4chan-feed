app.namespace("app.modalController");

(function(g) {
  app.modalController.show = function() {
    var modal = document.getElementById('myModal');

    var btnAdd = document.getElementById("addBoardBtn");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    }

    btnAdd.onclick = function() {
      var input = document.getElementById("inputBoardName");
      var boardName = input.value;
      if (boardName.length > 0) {
        app.gestor.createBoard(boardName);
        input.value = "";
        app.modalController.dismiss();
      }
    }
  };

  app.modalController.dismiss = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
})();
