app.namespace("app.boards.loader");

(function(g) {
  app.boards.loader.loadBoard = function(board) {
    console.log("Loading catalog...");

    var content = document.getElementsByClassName("list-catalog")[0];
    content.innerHTML = "";
    $.get("https://cors-anywhere.herokuapp.com/http://a.4cdn.org/" + board + "/catalog.json", function(data, status) {
      console.log(data.length);
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var j = 0; j < obj.threads.length; j++) {
          var thread = obj.threads[j];

          content.innerHTML += app.boards.loader.generateCatalogEntry(thread, board);
        }
      }
      var images = document.getElementsByClassName("list-entry-img");
      var img = 0;
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var j = 0; j < obj.threads.length; j++) {
          var thread = obj.threads[j];
          images[img].addEventListener("click", function() {
            document.getElementsByClassName("list-catalog")[0].style.display= "none";
            document.getElementsByClassName("list-thread")[0].style.display= "block";
            app.threads.loader.loadThread(board, thread.no);
          });
          img++;
        }
      }
    });
  }

  app.boards.loader.generateCatalogEntry = function(thread, board) {
    var item = app.template.catalog.thread;
    var tim = thread.tim; //idk.
    var ext = thread.ext; //File extension.
    var com = thread.com || ""; //Post subtitle.
    var sub = thread.sub || ""; //Post title.
    var imgUrl = app.util.links.thumbnail(board, tim);
    var linkHref = "https://boards.4channel.org/" + board + "/thread/" + thread.no;
    return item.replace("$IMGURL%", imgUrl).replace("$COM%", com).replace("$SUB%", sub).replace("$LINKHREF%", linkHref);
  }
})();
