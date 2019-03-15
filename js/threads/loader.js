app.namespace("app.threads.loader");

(function(g) {
  app.threads.loader.loadThread = function(board, thread) {
    console.log("Loading thread...");

    var content = document.getElementsByClassName("list-thread")[0];
    content.innerHTML = "";
    $.get("https://cors-anywhere.herokuapp.com/" + app.util.links.thread(board, thread), function(data, status) {
      console.log("data");
      console.log(data);
      for (var i = 0; i < data.posts.length; i++) {
        var post = data.posts[i];
        content.innerHTML += post.com + "<br>";
        console.log(post.com);
      }
    });
  }

  app.threads.loader.generateThreadEntry = function() {

  };
  app.threads.loader.generateThreadEntryOP = function() {

  }
})();
