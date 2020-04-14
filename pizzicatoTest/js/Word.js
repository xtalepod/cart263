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


  //getEffect() function
  //set the effect based on the score. the score id number is set as a global variable "moodScore" in the script
  //the dark and light scores are set as -1 and 1 in the updateMoodScore() function
  getEffect(score) {
    //takes a mood as an input
    let effect;
    if (score < 0) { //dark
      effect = darkEffect;
    } else if (score > 0) { //light
      effect = lightEffect;
    } else {
      effect = null;
    } //end if
    return effect;
  } //end method


  changeEffect(score) {
    // console.log("old effect", this.effect);
    if (this.effect != null) {
      this.sound.removeEffect(this.effect);
    }
    //update new effect
    this.effect = this.getEffect(score);
    if (this.effect != null) {
      this.sound.addEffect(this.effect);
    }
    // console.log("new mood:", this.effect);
  }

//   hoverOver(mood) {
//
//     for (let r = 0; r < aWordsArray.length; r++) {
//
//       if (aWordsArray[r].mood === "dark") {
//         aWordsArray[r].div.hover(function() {
//           aWordsArray[r].sound.play();
//           //https://stackoverflow.com/questions/16781486/jquery-how-to-adjust-css-filter-blur
//           $pic1.css({
//             'filter': 'hue-rotate(250deg)'
//           });
//         }, function() {
//           aWordsArray[r].sound.stop();
//           console.log("stop hover", r);
//           $pic1.css({
//             'filter': 'hue-rotate(0deg)'
//           });
//         });
//
//       } else if (aWordsArray[r].mood === "light") {
//         aWordsArray[r].div.hover(function() {
//           aWordsArray[r].sound.play();
//           $('body').css("background-color", "#ffffff");
//           $pic2.css({
//             'filter': 'hue-rotate(250deg)'
//           });
//         }, function() {
//           aWordsArray[r].sound.stop();
//           $('body').css("background-color", "#000000");
//           $pic2.css({
//             'filter': 'hue-rotate(0deg)'
//           });
//         });
//       } //end if
//       //end hover
//     } //end for loop
//   } //end of hover over
//
} //end of script
