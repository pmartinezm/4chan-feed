app.namespace("app.modalController");

(function(g) {
  app.modalController.show = function() {
    var modal = document.getElementById('myModal');

    var btnAdd = document.getElementById("addBoardBtn");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    btnAdd.onclick = function() {
      var input = document.getElementById("inputBoardName");
      var boardName = input.value;
      app.gestor.createBoard(boardName);
    }
  }
})();
