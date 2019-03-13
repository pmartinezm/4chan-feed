app.namespace("app.threads.loader");

(function(g){
  app.threads.loader.loadThread(thread) {
    console.log("Loading thread...");

    var content = document.getElementsByClassName("list")[0];
    content.innerHTML = "";
    $.get("https://cors-anywhere.herokuapp.com/" + app.util.links.catalog(board), function(data, status) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var j = 0; j < obj.threads.length; j++) {
          var thread = obj.threads[j];

          content.innerHTML += app.boards.loader.generateCatalogEntry(thread, board);
        }
      }
    });
  }

  app.threads.loader.generateThreadEntry {

  };
  app.threads.loader.generateThreadEntryOP {

  }
})();
