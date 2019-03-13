app.namespace("app.template.catalog");

app.template.catalog = {
  thread: `<div class="list-entry catalog">
  <div class="list-entry-img-cont">
  <a href="$LINKHREF%"><img class="list-entry-img" src="$IMGURL%"></a>
  </div>
        <div class="list-entry-data">
          <div class="list-entry-data-sub">
            $SUB%
          </div>
          <div class="list-entry-data-com">
            $COM%
          </div>
          </div>
        </div>
      </div>`
};
