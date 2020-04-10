"use strict";

// my test synth and its;
let synth;
const ATTACK = 0.1;
const RELEASE = 0.1;
//d minor melodic scale rounded down
let myFrequencies = [293, 329, 349, 391, 440, 446, 554, 587];

//my test sounds
let sound1, sound2, sound3, sound4, sound5;
let mySoundsArray = [];

let bees = "bees";
let sound6;


let aMyString = [
  'parameters',
  'polymorphism',
  'variable',
  'let',
  'this'
];

let myWordsArray = [];
let aOutputIndex = [];
let outputString = ""; //an empty string for the text output
let playSequenceB = true;
//setting up variables to apply ID to words and track score
// let darkScore = 0;
// let lightScore = 0;
// let darkID = 0;
// let lightID = 1;
// let score = 0;
// let $score;
let $playButton;
let $resetButton;

let $openScene;
let $wordDiv;

$(document).ready(setup);


//
function setup() {

  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'triangle',
      frequency: 220,
      volume: 0.1,
      attack: ATTACK,
      release: RELEASE
    }
  });

  // sound1.play(); //putting this here this breaks pizzicato
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

  sound6 = new MySound(bees, "dark", 1000);
  console.log(sound6);

  $playButton = $("#play");
  $playButton.hide();
  $resetButton = $("#reset");
  $resetButton.hide();

  $openScene = $("#openScene");
  $wordDiv = $("#wordDiv");
  $wordDiv.hide();

  openingScene();

} //endsetup


function openingScene() {

  $openScene.one("click", function() {//only do this one time
    sound6.play();
    setTimeout("secondScene()", 1000);//wait this long and then take us to the secondScene
    });
      console.log($openScene, "open");
  // });
}

function secondScene() {

  $wordDiv.fadeIn(10000); //function(){
  $wordDiv.css("background-color", '#000000');

  $playButton.show();
  $resetButton.show();
    $playButton.click(function() {
      playSequence();
      playSynth();
    });

    $resetButton.click(function() {
      playSequenceB = false;
      clearArray();
      synth.stop();
      // exec_setTimeout()
    });
    initWords();
}

//'adapted' from music-box week 7
function playSynth() {
  let frequency = Math.floor(randomInRange(220, myFrequencies.length));
  synth.frequency = frequency;
  synth.play();
  console.log(synth);
}


function initWords() {

  let x = [200, 300, 400, 500, 600]; //Math.random() * 200;
  let y = [30, 10, 300, 500, 3]; //Math.random() * 200;

  for (let i = 0; i < aMyString.length; i++) { //instantiate my word objects
    myWordsArray.push(new Word(aMyString[i], x[i], y[i], '#00FF00', mySoundsArray[i]));
    // console.log("i:", i,"word array i:", myWordsArray[i],"string:", aMyString[i],"sound:", mySoundsArray[i]);
  } //end i

  for (let j = 0; j < myWordsArray.length; j++) {
      myWordsArray[j].div.click(function() { //j is the index of the word clicked
      aOutputIndex.push(j); //everytime you click, add the corresponding index number
      console.log(aOutputIndex, "j");
      // if (aOutputIndex.length > 4) { //after 5 elements are reached play the sounds in sequence
        for (let k = 0; k < aOutputIndex.length; k++) { //a for loop to go through each element in the array
          let index = aOutputIndex[k]; //an index so a numerical value can be assigned to other arrays****
        } // end k
      myWordsArray[j].sound.play();
      outputString += myWordsArray[j].wordText + " "; //each time we move through the loop add the selected word
      $("#output").text(outputString); //display the selected words
    }); //end j
  } //end for
} //end init words

//creating a play sequence function that is executed when the play button is pressed
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


//this function clears the output array and put the playSequenceB back to true, its executed when the reset button is pressed
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

// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}



// function welcome(){
//
// }
// function exec_setTimeout(){
//
// setInterval(playSynth, 2000)   ;
//
// }

//related to palying the sounds but so far am not using it anymore
// $(myWordsArray[j].div).hover(function() {
//     // myWordsArray[j].sound.play();
//     // console.log("hover", j);
//     // sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
//     //     //   polymorphism.stop();
//     //     // });
//   },
//   function() {
//     // console.log("stop hover", j);
//     // polymorphism.showMood();//console log in the MySound class function pings to here
//   });
