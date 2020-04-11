"use strict";

class Word {
  constructor(id, wordText, x, y, color, sound, mood) {
    this.id = id;
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    this.mood = mood;
    console.log(this.mood)
    // console.log(this.sound); // undefined
    this.div = $('<div>');
    this.div.attr('id', "W"+this.id.toString());
    this.div.text(this.wordText);
    this.div.css("color", this.color);
    this.div.css("position", "absolute");
    this.div.css("left", this.x);
    this.div.css("top", this.y);
    $('#'+this.mood+'Div').append(this.div);
  }
} //end of script


//should add a font and font size
