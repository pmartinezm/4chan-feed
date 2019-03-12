app.namespace("app.loader");

(function(g) {
  document.getElementById("boton").addEventListener("click", function() {
    app.loader.loadBoard("o");
  });

  app.loader.loadBoard = function(board) {
    console.log("Loading data...");

    var content = document.getElementsByClassName("list")[0];
    content.innerHTML = "";
    $.get("https://cors-anywhere.herokuapp.com/http://a.4cdn.org/" + board + "/catalog.json", function(data, status) {
      console.log("Estoy dentro de la función del get");
      console.log(data);
      console.log(status);

      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var j = 0; j < obj.threads.length; j++) {
          var thread = obj.threads[j];

          content.innerHTML += app.loader.generateItem(thread, board);
        }
      }
    });
  }

  app.loader.generateItem = function(thread, board) {
    var item = app.template.list;
    var tim = thread.tim;
    var ext = thread.ext;
    var com = thread.com;
    var sub = thread.sub;
    var url = "https://i.4cdn.org/" + board + "/" + tim + ext;
    var href = "https://boards.4channel.org/" + board + "/thread/" + thread.no;
    return item.replace("$URL%", url).replace("$COM%", com).replace("$SUB%", sub).replace("$HREF%", href);
  }
})();
