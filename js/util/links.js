app.namespace("app.util.links");

app.util.links = {
  catalog: function(board) {
    return "https://a.4cdn.org/" + board + "/catalog.json";
  },
  thumbnail: function(board, tim) {
    return "https://i.4cdn.org/" + board + "/" + tim + "s.jpg";
  }
};
