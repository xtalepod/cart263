"use strict";

// let synth;
//my test sounds
let sound;
// let parameters;
// let variable;
// let thisSound;
// let forSound;
// let letSound;

let numOfWords = 5;
let aMyString = [
  'polymorphism',
  'parameters',
  'variable',
  'let',
  'this'
];
let myWordsArray = [];
$(document).ready(setup);

function setup() {

  // Create the synth
  // synth = new Pizzicato.Sound({
  //   source: 'wave',
  //   options: {
  //     type: 'sine',
  //     frequency: 220,
  //     attack: 0.2,
  //     release: 0.9
  //   }
  // });
  //
  sound = new MySound('polymorphism', "dark", 3000);
  // parameters = new MySound('parameters', "dark", 2000);
  // variable = new MySound('variable',"dark", 2000);
  // forSound = new MySound('for',"dark", 2000);
  // letSound = new MySound('let',"dark", 2000);
  // thisSound = new MySound('this',"dark", 4000);

  // thisSound.play(); //putting this here this breaks pizzicato

  for (let i = 0; i < numOfWords; i++) {
    let x = Math.random() * 500;
    let y = Math.random() * 550;
    // sound = new MySound('polymorphism', "dark", 3000);
    let wordText = aMyString[Math.floor(randomInRange(0, aMyString.length))];
    myWordsArray.push(new Word(wordText, x, y, '#00FF00', sound));
  }

  for (let j = 0; j < myWordsArray.length; j++) {
    myWordsArray[j].clickReaction();
  }

} //endsetup

// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
