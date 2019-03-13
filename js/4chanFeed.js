var app = app || {};
app.globalNamespace = "app";
app.ls = window.localStorage;

app.namespace = function(ns) {
  var parts = ns.split('.');
  var parent = app;
  var i;

  if (parts[0] === app.globalNamespace) {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
};

(function(g) {
  if (app.ls.length === 0) {
    var boards = {
      board: []
    };
    var json = JSON.stringify(boards);
    app.ls.setItem("boards", json);
  }
})();
