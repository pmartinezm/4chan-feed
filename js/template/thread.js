app.namespace("app.template.thread");

app.template.thread = {
  grid: `<div class="item">
    <div class="item-image-cont">
      <a href="$HREF%""><img class="item-image" src="$URL%" alt=""></a>
    </div>
    <div class="item-data-cont">
      <div class="item-data-sub">
        $SUB%
      </div>
      <div class="item-data-com">
        $COM%
      </div>
    </div>
  </div>`,
  list: `<div class="list-entry">
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
