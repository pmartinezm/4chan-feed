app.namespace("app.boards.loader");

(function(g) {
  app.boards.loader.loadBoard = function(board) {
    console.log("Loading data...");

    var content = document.getElementsByClassName("list")[0];
    content.innerHTML = "";
    $.get("https://cors-anywhere.herokuapp.com/http://a.4cdn.org/" + board + "/catalog.json", function(data, status) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var j = 0; j < obj.threads.length; j++) {
          var thread = obj.threads[j];

          content.innerHTML += app.boards.loader.generateItem(thread, board);
        }
      }
    });
  }

  app.boards.loader.generateItem = function(thread, board) {
    var item = app.template.thread.list;
    var tim = thread.tim; //idk.
    var ext = thread.ext; //File extension.
    var com = thread.com; //Post subtitle.
    var sub = thread.sub; //Post title.
    var imgUrl = app.util.links.thumbnail(board, tim);
    var linkHref = "https://boards.4channel.org/" + board + "/thread/" + thread.no;
    return item.replace("$IMGURL%", imgUrl).replace("$COM%", com).replace("$SUB%", sub).replace("$LINKHREF%", linkHref);
  }
})();
