"use strict";

// let synth;
//my test sounds
let sound1, sound2, sound3, sound4, sound5;
let mySoundsArray = [];

let myWord
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


} //endsetup

function initWords(){
  for (let i = 0; i < aMyString.length; i++) {
    let x = Math.random() * 200;
    let y = Math.random() * 50;
    // let wordText = aMyString[Math.floor(randomInRange(0, aMyString.length))];
    let wordText = aMyString[i];
    // myWord = new Word(wordText, x, y, '#00FF00', parameters)
    // myWord.clickReaction();
    myWordsArray.push(new Word(wordText, x, y, '#00FF00', mySoundsArray[i]));
    // myWordsArray.push(new Word(wordText, x, y, '#00FF00', sound1));
  }

  for (let j = 0; j < myWordsArray.length; j++) {
  $(myWordsArray[j].element).click(function(){
      console.log("clicked", j);
      // sound1.play();
    });
  }
}

// function clickReaction() {

  // myWordArray
//   //https://stackoverflow.com/questions/3273350/jquerys-click-pass-parameters-to-user-function
  // $().click({
        // parameters.play();
        // console.log(parameters.pla)
    //inspo i has a deatached object https://en.wikipedia.org/wiki/Detached_object
  // });
//
//   $(this.element).hover({
//     event.data.sound.play();
//     // sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
//     //   polymorphism.stop();
//     // });
//   }, function() {
//     // polymorphism.stop();
//     // synth.stop();
//     // polymorphism.showMood();//console log in the MySound class function pings to here
//     // console.log(bark.mood);
//   });
//
// }
//
// // https://www.sitepoint.com/delay-sleep-pause-wait/
// function sleep(ms) {
// return new Promise(resolve => setTimeout(resolve, ms));
// }
// //
// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
