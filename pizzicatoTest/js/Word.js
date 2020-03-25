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
  clickReaction() {
    $(this.element).click(function() {
      // alert("doing a thing");
      console.log("hi");
    })

    $(this.element).hover(function() {
      polymorphism.play();
      sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
        polymorphism.stop();
        parameters.play();
        synth.play();
      });
    }, function() {
      polymorphism.stop();
      synth.stop();
      // polymorphism.showMood();//console log in the MySound class function pings to here
      // console.log(bark.mood);
    });

  }

  // // https://www.sitepoint.com/delay-sleep-pause-wait/
  //  sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  //
} //end of script
