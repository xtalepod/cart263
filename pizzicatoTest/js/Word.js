"use strict";

class Word {
  constructor(wordText, x, y, color, sound, mood) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    this.mood = mood;
    // console.log(this.sound); // undefined
    this.div = $('<div>');
    this.div.text(this.wordText);
    this.div.css("color", this.color);
    this.div.css("position", "absolute");
    this.div.css("left", this.x);
    this.div.css("top", this.y);
    $('#wordDiv').append(this.div);
  }
} //end of script


//should add a font and font size
