"use strict";

let bark;
let synth;
//my test sounds
let polymorphism;
let parameters;
// let variable;
// let thisSound;
// let forSound;
// let letSound;
// //and their array
// let aSounds = [];

let numOfWords = 6;
let aMyString = [
  "polymorphism",
  "parameters",
  "variable",
  "let",
  "this",
  "for"];

//i am making a for loop that goes through the number of words, gives them an x and y location, a text size, and the words



$(document).ready(setup);

function setup() {

  for (let i = 0; i < aMyString.length; i++) {
    console.log(aMyString[i]);
  }

//   for (let i = 0; i < numOfWords; i ++) {
//     let x = Math.random() * 250;
//     let y = Math.random() * 250;
//     // let textSize = 20;
//     // let wordText = Math.floor(randomInRange(0, aTheWords.length));
//     wordArray.push(new Word("aTheWords", x , y, '#ff0000'));
//     console.log(wordArray.length);
//     // console.log(wordArray.wordText);
//   }
//
//
let $textDisplay = $('<div></div>');
$textDisplay.addClass('textDisplayClass');
$textDisplay.text(aMyString);
$('body').append($textDisplay);


  // Create the synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220,
      attack: 0.2,
      release: 0.9
    }
  });

// bark = new Pizzicato.Sound({
//   source: 'file',
//   options: {
//     path: 'assets/sounds/bark.wav'
//   }
//   });

// bark = new MySound('bark',"dark", 6000);
polymorphism = new MySound('polymorphism',"dark", 3000);
parameters = new MySound('parameters',"dark", 2000);
// variable = new MySound('variable',"dark", 2000);
// forSound = new MySound('for',"dark", 2000);
// letSound = new MySound('let',"dark", 2000);
// thisSound = new MySound('this',"dark", 4000);

// thisSound.play();

// polymorphism.play();

$("#p1").hover(function() {
      polymorphism.play();
      sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
        polymorphism.stop();
        // parameters.play();
        synth.play();
      });
  }, function() {
    polymorphism.stop();
    synth.stop();
    // console.log(bark.mood);
  });
}//endsetup

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
