"use strict";

// my test synth and its;
let synth;
const ATTACK = 0.1;
const RELEASE = 0.1;
//d minor melodic scale rounded down
let myFrequencies = [293, 329, 349, 391, 440, 446, 554, 587];

let pingPongDelay;
//my test sounds
// let aSound = [sound1, sound2, sound3, sound4, sound5];
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

//delcaring variables for all of my jQuery objects
let $openScene;
let $wordDiv;
let $playButton;
let $resetButton;

let pic1;
let pic2;

let aNeutralString = [
  'this',
  'that',
  'the',
  'but',
  'be',
  'been',
  'i',
  'it',
  'is',
  'in',
  'and',
  'are',
  'am',
  'a',
  'an',
  'will',
  'with',
  'like',
  'very',
  'none',
  'from',
  'you',
  'my',
  'mine'
];

let aDarkString =[
  'discourse',
  'fundamental',
  'portrait',
  'structural',
  'confront',
  'outburst',
  'language',
  'body',
  'gesture',
  'fragments',
  'essence'
];

let aLightString =[
  'whole',
  'part',
  'desire',
  'glued',
  'mask',
  'shape',
  'space',
  'gives'
];


$(document).ready(setup);

function setup() {

  pingPongDelay = new Pizzicato.Effects.PingPongDelay({
      feedback: 0.5,
      time: 0.2,
      mix: 0.68
  });


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

  sound6 = new MySound(bees, "dark", 1000);
  console.log(sound6);

  $openScene = $("#openScene");
  $wordDiv = $("#wordDiv");
  $wordDiv.hide();//this makes the fade in smooth
  $playButton = $("#play");
  $playButton.hide();
  $resetButton = $("#reset");
  $resetButton.hide();

  // openingScene();
  playScene();

} //endsetup

//this is the first function the user has to engage with. it helps to give a mood/transition and help set the next scene
function openingScene() {

  $openScene.one("click", function() {//only do this one time
    sound6.play();
    setTimeout("playScene()", 1000);//wait this long and then take us to the secondScene
    });
      console.log($openScene, "open");
}

function playScene() {

  $wordDiv.fadeIn(1000);
  $wordDiv.css("background-color", '#000000');

  $playButton.show();
  $resetButton.show();
    $playButton.click(function() {
      playSequence();
      // playSynth();
    });

    $resetButton.click(function() {
      playSequenceB = false;
      clearArray();
      synth.stop();
    });

    initWords(aMyString, "dark");
    // initWords(aDarkString, "dark");
    // initWords(aLightString, "light");
    // initWords(aNeutralString, "neutral");
}

//'adapted' from music-box week 7
function playSynth() {
  let frequency = Math.floor(randomInRange(220, myFrequencies.length));
  synth.frequency = frequency;
  // synth.addEffect
  synth.play();
  console.log(synth);
}


function initWords(aString, mood) {

  // let x = [200, 300, 400, 500, 600]; //Math.random() * 200;
  // let y = [30, 10, 300, 500, 3]; //Math.random() * 200;
let paddingTop = 25;
let paddingBottom = 25;
let paddingLeft = 25;
let boxHeight = 300;
let lineHeight = 20;
let columnWidth = 100;

let x = paddingLeft;
let y = paddingTop;

  for (let i = 0; i < aString.length; i++) { //instantiate my word objects
    mySoundsArray.push(new MySound(aString[i]))
    myWordsArray.push(new Word(i, aString[i], x, y, '#00FF00', mySoundsArray[i], mood));
    y += lineHeight;
    if(y > boxHeight-paddingBottom){
      y = paddingTop;
      x = paddingLeft + columnWidth;
    }
    // console.log("i:", i,"word array i:", myWordsArray[i],"string:", aMyString[i],"sound:", mySoundsArray[i]);
  } //end i

  for (let j = 0; j < myWordsArray.length; j++) {
      myWordsArray[j].div.click(function() { //j is the index of the word clicked
$("#W"+ j.toString() ).hide();
      console.log(this);
      console.log(this.getAttribute(name));

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
          // myWordsArray[aOutputIndex[l + 1]].sound.addEffect(pingPongDelay); //play the next sound
          myWordsArray[aOutputIndex[l + 1]].sound.play(); //play the next sound
        });
      }
      // myWordsArray[aOutputIndex[0]].sound.addEffect(pingPongDelay); //play the first word, rest will follow
      myWordsArray[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
      // console.log(pingPongDelay, "ping");
    }
  }
}


//this function clears the output array and puts the playSequenceB back to true, its executed when the reset button is pressed
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
