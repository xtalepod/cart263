"use strict";
//

$(document).ready(setup);
//
//
function setup() {
  console.log( $(".image-container"));

  $(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

}
