var board = "m";

var ocultar = function() {
  var content = document.getElementsByClassName("content")[0];
  content.innerHTML = "";
  $.get("https://cors-anywhere.herokuapp.com/http://a.4cdn.org/" + board + "/catalog.json", function(data, status) {
    console.log("Estoy dentro de la función del get");
    console.log(data);
    console.log(status);

    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log(obj.page);
      for (var j = 0; j < obj.threads.length; j++) {
        console.log(" ", obj.threads[j].no);
        var thread = obj.threads[j];

        content.innerHTML += generateItem(thread);
      }
    }
  });
}

var generateItem = function(thread) {
  var item = itemTMPL;
  var tim = thread.tim;
  var ext = thread.ext;
  var com = thread.com;
  var sub = thread.sub;
  var url = "https://i.4cdn.org/" + board + "/" + tim + ext;
  var href = "https://boards.4channel.org/" + board + "/thread/" + thread.no;
  return item.replace("$URL%", url).replace("$COM%", com).replace("$SUB%", sub).replace("$HREF%", href);
}
