"use strict";

class Word {
  constructor(wordText, x, y, color) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.element = $('<div>');
    $(this.element).text(this.wordText);
    $('#container').append(this.element);
    console.log(this.x);
  }

  //make the word visible on the screen
  //   appendText() {
  //     this.wordText.append();
  //   }
}
