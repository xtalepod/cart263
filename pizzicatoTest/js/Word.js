"use strict";

class Word {

  constructor(wordText, x, y, color, sound) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    // this.sound.play();
    console.log(this.sound); // undefined
    this.element = $('<div>');
    $(this.element).text(this.wordText);
    $(this.element).css("color", this.color);
    $('#container').append(this.element);
    $(this.element).css("position", "absolute");
    $(this.element).css("left", this.x);
    $(this.element).css("top", this.y);


  }

  clickReaction() {
    //https://stackoverflow.com/questions/3273350/jquerys-click-pass-parameters-to-user-function
    $(this.element).click({sound: this.sound, test: "test"}, function(e) {
      console.log("CLIked");
      console.log(e.data.test);
      console.log(e.data.sound);
      e.data.sound.play();
          // parameters.play();
          // sound.play();
          // console.log(parameters.pla)
      //inspo i has a deatached object https://en.wikipedia.org/wiki/Detached_object
    });

    $(this.element).hover({sound: this.sound, test: "test"}, function(e) {
      console.log("hover");
      console.log(e.data.test);
      console.log(e.data.sound);
      e.data.sound.play();
      // sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
      //   polymorphism.stop();
        // parameters.stop();
      // });
    }, function() {
      // polymorphism.stop();
      // synth.stop();
      // polymorphism.showMood();//console log in the MySound class function pings to here
      // console.log(bark.mood);
    });

  }

  // https://www.sitepoint.com/delay-sleep-pause-wait/
  // sleep(ms) {
  // return new Promise(resolve => setTimeout(resolve, ms));
  // }
  //
} //end of script
