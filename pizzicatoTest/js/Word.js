"use strict";

class Word {
  constructor(wordText, x, y, color) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.element = $('<div>');
    $(this.element).text(this.wordText);
    $(this.element).css("color", this.color);
    $('#container').append(this.element);
    $(this.element).css("position", "absolute");
    $(this.element).css("left", this.x);
    $(this.element).css("top", this.y);
    console.log(this.x);
  }

  //make the word visible on the screen
  onClick() {
    console.log("hi");
    //   this.element.click(function() {
    //   alert("doing a thing");
    //
    // });
  }
}
