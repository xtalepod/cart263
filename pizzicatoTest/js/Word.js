"use strict";

class Word {
  constructor(wordText, x, y, color, sound) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    // console.log(this.sound); // undefined
    this.element = $('<div>');
    $(this.element).text(this.wordText);
    $(this.element).css("color", this.color);
    $('#container').append(this.element);
    $(this.element).css("position", "absolute");
    $(this.element).css("left", this.x);
    $(this.element).css("top", this.y);
  }
} //end of script
