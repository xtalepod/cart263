"use strict";

// let synth;
//my test sounds
let sound1, sound2, sound3, sound4, sound5;
let mySoundsArray = [];

let myWord
let numOfWords = 5;

let aMyString = [
  'parameters',
  'polymorphism',
  'variable',
  'let',
  'this'
];

let myWordsArray = [];
let aOutputIndex = [];
let incr = 0;
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
  // sound1 = new MySound('polymorphism', "dark", 3000);
  sound1 = new MySound(aMyString[0], "dark", 3000); //this is only working right now because my string matches my audio file names
  sound2 = new MySound(aMyString[1], "dark", 2000);
  sound3 = new MySound(aMyString[2], "dark", 2000);
  sound4 = new MySound(aMyString[3], "dark", 2000);
  sound5 = new MySound(aMyString[4], "dark", 2000);
  mySoundsArray.push(sound1);
  mySoundsArray.push(sound2);
  mySoundsArray.push(sound3);
  mySoundsArray.push(sound4);
  mySoundsArray.push(sound5);
  // sound1.play(); //putting this here this breaks pizzicato
  initWords();


} //endsetup

function initWords() {


  for (let i = 0; i < aMyString.length; i++) {//instantiate my word objects
    let x = Math.random() * 200;
    let y = Math.random() * 200;
    // myWord = new Word(wordText, x, y, '#00FF00', sound3)
    // console.log(myWord.color);
    myWordsArray.push(new Word(aMyString[i], x, y, '#00FF00', mySoundsArray[i]));
    // myWordsArray.push(new Word(wordText, x, y, '#00FF00', sound1));
    // console.log("i:", i,"word array i:", myWordsArray[i],"string:", aMyString[i],"sound:", mySoundsArray[i]);
  }//end i

  for (let j = 0; j < myWordsArray.length; j++) {
    $(myWordsArray[j].div).click(function() {//j is the index of the word clicked
      aOutputIndex.push(j);//.push is appending a value to the end of an array, in this case it is creating an index for
      console.log("clicked", j);
      console.log(aOutputIndex);

      for (let k = 0; k < aOutputIndex.length; k++) {
        let index = aOutputIndex[k];
       console.log("word num.", index, "is:", myWordsArray[index].wordText);
        mySoundsArray[index].play();
        // sleep(mySoundsArray[index].duration).then(() => { //this comes from the sleep function source
          // mySoundsArray[index].stop();
        // });
      }// end k
    });//end j

    $(myWordsArray[j].div).hover(function() {
        // myWordsArray[j].sound.play();
        // console.log("hover", j);
        // sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
        //     //   polymorphism.stop();
        //     // });
      },
      function() {
        // console.log("stop hover", j);
        // polymorphism.showMood();//console log in the MySound class function pings to here
      });
  } //end for
} //end setup

// // https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
// //
// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
