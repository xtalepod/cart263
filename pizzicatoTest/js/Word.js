"use strict";

class Word {
  constructor(wordText, x, y, color, sound) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    // console.log(this.sound); // undefined
    this.div = $('<div>');
    this.div.text(this.wordText);
    this.div.css("color", this.color);
    $('#container').append(this.div);
    this.div.css("position", "absolute");
    this.div.css("left", this.x);
    this.div.css("top", this.y);
  }
} //end of script


//should add a font and font size
