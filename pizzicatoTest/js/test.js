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
let outputString = ""; //an empty string for the text output
let playSequenceB = true;

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
  // $("#reset").click(clearArray() );
  $("#reset").click(function() {
      // if ($("#reset").click() === true) {
        playSequenceB = false;
        clearArray();
        console.log("clicked");
      // } else {
      //   playSequenceB = true;
      // }
    });
    // $("#reset").off("click", function(){
    //   playSequenceB = true;
    // });
  } //endsetup

  function initWords() {
    for (let i = 0; i < aMyString.length; i++) { //instantiate my word objects
      let x = Math.random() * 200;
      let y = Math.random() * 200;
      myWordsArray.push(new Word(aMyString[i], x, y, '#00FF00', mySoundsArray[i]));
      // myWordsArray.push(new Word(wordText, x, y, '#00FF00', sound1));
      // console.log("i:", i,"word array i:", myWordsArray[i],"string:", aMyString[i],"sound:", mySoundsArray[i]);
    } //end i

    for (let j = 0; j < myWordsArray.length; j++) {
      $(myWordsArray[j].div).click(function() { //j is the index of the word clicked
        aOutputIndex.push(j); //everytime you click, add the corresponding index number
        // console.log("clicked", j);
        console.log(aOutputIndex, "j");
        // if (aOutputIndex.length > 4) { //after 5 elements are reached play the sounds in sequence
        for (let k = 0; k < aOutputIndex.length; k++) { //a for loop to go through each element in the array
          let index = aOutputIndex[k]; //an index so a numerical value can be assigned to other arrays****
          outputString += myWordsArray[index].wordText + " "; //each time we move through the loop add the selected word
        } // end k
        playSequence();
        $("#output").text(outputString); //display the selected words
        // }
      }); //end j

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
  } //end init words

  //creating a play sequence function
  function playSequence() {

    if (playSequenceB === true) {
      for (let l = 0; l < aOutputIndex.length; l++) {
        let index = aOutputIndex[l];
        console.log(aOutputIndex.length, l);
        // aOutputIndex.push(l); //everytime you click, add the corresponding index number
        if (l < aOutputIndex.length - 1) { //for all words but the last
          myWordsArray[index].sound.on('end', function() { //when the sound ends
            console.log(index, "ended");
            myWordsArray[aOutputIndex[l + 1]].sound.play(); //play the next sound
          });
        }
        myWordsArray[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
      }
    }
  }

  function clearArray() {
    console.log("clearArray");
    for (let m = 0; m < myWordsArray.length; m++) {
      myWordsArray[m].sound.on();
      outputString = "";
      aOutputIndex.splice(0, aOutputIndex.length);
    }
    $("#output").text(outputString);
    playSequenceB = true;
  }

  // $("#reset").click(function(){
  // for (let m = 0; m < myWordsArray.length; m++){
  // return aOutputIndex.length = 0;
  // console.log(aOutputIndex, "button pressed");
  // //from class
  function randomInRange(min, max) {
    return min + (Math.random() * (max - min));
  }
