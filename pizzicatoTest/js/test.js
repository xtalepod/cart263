"use strict";

// let synth;
//my test sounds
let sound1, sound2, sound3, sound4, sound5;


let myWord
let numOfWords = 5;
let aMyString = [
  'polymorphism',
  'parameters',
  'variable',
  'let',
  'this'
];
// let aMyString = [
//   'polymorphism',
//   'parameters',
// ];

let myWordsArray = [];
let mySoundsArray = [];

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
  sound1 = new MySound('polymorphism', "dark", 3000);
  sound2 = new MySound('parameters', "dark", 2000);
  sound3 = new MySound('variable', "dark", 2000);
  sound4 = new MySound('let', "dark", 2000);
  sound5 = new MySound('this', "dark", 2000);

  mySoundsArray.push(sound1);
  mySoundsArray.push(sound2);
  mySoundsArray.push(sound3);
  mySoundsArray.push(sound4);
  mySoundsArray.push(sound5);

  // sound1.play(); //putting this here this breaks pizzicato

  initWords();

  // variable = new MySound('variable',"dark", 2000);
  // forSound = new MySound('for',"dark", 2000);
  // letSound = new MySound('let',"dark", 2000);
  // thisSound = new MySound('this',"dark", 4000);



} //endsetup

function initWords(){
  for (let i = 0; i < numOfWords; i++) {
    let x = Math.random() * 200;
    let y = Math.random() * 150;
    // let wordText = aMyString[Math.floor(randomInRange(0, aMyString.length))];
    let wordText = aMyString[i];
    // myWord = new Word(wordText, x, y, '#00FF00', parameters)
    // myWord.clickReaction();

    myWordsArray.push(new Word(wordText, x, y, '#00FF00', mySoundsArray[i]));
    // myWordsArray.push(new Word(wordText, x, y, '#00FF00', sound1));


  }

  for (var j = 0; j < myWordsArray.length; j++) {
    myWordsArray[j].clickReaction();
  }


}
// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
