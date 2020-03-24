"use strict";

class Word {
  constructor(wordText, x, y, color) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.element = $('<div>');
    $(this.element).css("background", this.color);
    $('#wordContainer').append(this.element);
    $(this.element).css("position", "absolute");
    $(this.element).css("left", 800);
    $(this.element).css("top", 200);
console.log(this.element);
  }

  //make the word visible on the screen
  //   appendText() {
  //     this.wordText.append();
  //   }
}
