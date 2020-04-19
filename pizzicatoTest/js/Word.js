"use strict";

class Word {
  constructor(wordText, x, y, color, sound, mood) {
    this.wordText = wordText;
    this.x = x;
    this.y = y;
    this.color = color;
    this.sound = sound;
    this.mood = mood;
    this.effect = null;
    this.nextWordId = -1;
  }

  //this function exists because the ID created within the pushWord() function where the words are initialized
  // are not the ones we need so by making this a function we can call it in the initWordsClick() function
  createWordDiv(id) {
    this.id = id;
    this.div = $('<div>');
    this.div.attr('id', "W" + this.id.toString()); //this line creates an html element with W string we can use as a jQuery object name string
    this.div.text(this.wordText);
    this.div.css("color", this.color);
    this.div.css("position", "absolute");
    this.div.css("left", this.x);
    this.div.css("top", this.y);
    $('#' + this.mood + 'Div').append(this.div); //append the word to the proper div
  }


  //getEffect() method
  //set the effect based on the score. the score id number is set as a global variable "moodScore" in the script
  //the dark and light scores are set as -1 and 1 in the updateMoodScore() function
  getEffect(score) {
    //takes a mood as an input
    let effect;
    // let panLeftEffect;
    // let panRightEffect;

    if (score < 0) { //dark
      effect = darkEffect; //panDarkEffect;
      // panLeftEffect = panDarkEffect;
    }

    else if (score > 0) { //light
      effect = lightEffect;
      // panRightEffect = panLightEffect;
    }

    else {
      effect = null;
      // panRightEffect = null;
      // panLeftEffect = null;
    } //end if

    return effect;
    // return [effect, panLeftEffect, panRightEffect];
    // return panRightEffect;
  } //end method

//changeEffect() method passes the score and adds/remove effects based on whether its below or above 0
  changeEffect(score) {

    if (this.effect != null) {
      this.sound.removeEffect(this.effect);
    }

    this.effect = this.getEffect(score); //update new effect

    if (this.effect != null) {
      this.sound.addEffect(this.effect);
    }

// /////########PAN###########
//     if (this.panLeftEffect != null){
//       this.sound.removeEffect(this.panLeftEffect)
//     }
//     if (this.panRightEffect != null){
//         this.sound.removeEffect(this.panRightEffect)
//       }
//       this.panLeftEffect = this.getEffect(score); //update new effect
//       this.panRightEffect = this.getEffect(score); //update new effect
//
//       if (this.panLeftEffect != null) {
//         this.sound.addEffect(this.panLeftEffect);
//       }
//
//       if (this.panRightEffect != null) {
//         this.sound.addEffect(this.panRightEffect);
//       }
//
//     this.sound.removeEffect(this.panLeftEffect);
//     this.sound.removeEffect(this.panRightEffect);
  }
} //end of script
