"use strict";

// my test synth and its;
let synth;
const ATTACK = 0.5;
const RELEASE = 0.1;
//d minor melodic scale rounded down
// let myFrequencies = [293, 329, 349, 391, 440, 446, 554, 587];

//building chords
//https://www.youtube.com/watch?v=YSKAt3pmYBs
const NOTE_TEMPO = 500;
let frequency;
let oscillator;

let synth1;
let aSynth1Freq = [196, 311.13];
let aChord1 = [];

let synth2;
let aSynth2Freq = [249.94, 392.00];
// let aSynth2 = [];
let synth3;
let aSynth3Freq = [293.66, 466.16];
// let aSynth3 = [];
let synthString = ['synth1', 'synth2', 'synth3'];
let aSynths = [];

//two variables for my Pizzicato effects
let darkEffect;
let lightEffect;


//my opening scene sound, currently is still a test sound
let bees = "bees";
let sound6;

let aWordsArray = [];
let aSoundsArray = [];

let aOutputIndex = [];
let outputString = ""; //an empty string for the text output

let playSequenceEnabled = true;

//delcaring variables for all of my jQuery objects
let $openScene;
let $wordDiv;
let $playButton;
let $resetButton;
//declaring variables for my pics
let $pic1;
let $pic2;
//creating string array for the different word divs
let aNeutralString = ["kick", "snare", "hihat"];
let aDarkString = ["polymorphism", "variable", "parameters"];
let aLightString = ["this", "let", "for"];

// let aNeutralString = [
//   'this',
//   'that',
//   'the',
//   'but',
//   'be',
//   'been',
//   'i',
//   'it',
//   'is',
//   'in',
//   'and',
//   'are',
//   'am',
//   'a',
//   'an',
//   'will',
//   'with',
//   'like',
//   'very',
//   'none',
//   'from',
//   'you',
//   'my',
//   'mine'
// ];
// let aDarkString = [
//   'discourse',
//   'fundamental',
//   'portrait',
//   'structural',
//   'confront',
//   'outburst',
//   'language',
//   'body',
//   'gesture',
//   'fragments',
//   'essence'
// ];
// let aLightString = [
//   'whole',
//   'part',
//   'desire',
//   'glued',
//   'mask',
//   'shape',
//   'space',
//   'gives'
// ];
//an variable to the moodScore
let moodScore = 0;


$(document).ready(setup);

//setup() function
//this function has a lot going on...
function setup() {

  darkEffect = new Pizzicato.Effects.Delay({
    feedback: 0.3,
    time: 0.2,
    mix: 0.6,
    volume: 0.3
  });

  lightEffect = new Pizzicato.Effects.Distortion({
    gain: 0.8,
    volume: 0.9
  });

//my synth objects, i should push they frequencies into a for loop
// synth = new MySound(synth, false, 'wave', 'triangle', 220, ATTACK, RELEASE);
// synth1 = new MySound(synth1, true, 'wave', 'triangle', frequency, ATTACK, RELEASE);
for (let i = 0; i < aChord1.length; i++){
  let frequency = aSynth1Freq[Math.floor(Math.random() * aSynth1Freq.length)];
  synth1 = new MySound('synth1', false, 'wave', 'triangle', frequency, ATTACK, RELEASE);
  console.log(aChord1[i]);
  // synth1.push();
  // synth1.push(new MySound('synth1', false, 'wave', 'triangle', frequency, ATTACK, RELEASE));
}
synth2 = new MySound(synth2, false, 'wave', 'triangle', frequency, ATTACK, RELEASE);
synth3 = new MySound(synth3, false, 'wave', 'triangle', frequency, ATTACK, RELEASE);
// console.log(synth1, "synth1");
//
//
//   console.log(aSynth1);
//
//   //the sound that pays at the opening scene
  sound6 = new MySound(bees, false, 'file');
  //creating my jQuery objects and hiding them at first
  $openScene = $("#openScene");
  $wordDiv = $("#wordDiv");
  $wordDiv.hide(); //this makes the fade in smooth
  $playButton = $("#play");
  $playButton.hide();
  $resetButton = $("#reset");
  $resetButton.hide();
  $pic1 = $("#pic1");
  $pic2 = $("#pic2");
//   //
//
//   // $openScene.one("click", function() { //only do this one time
//   //   // oscillateNote();
//   //   setTimeout("playScene()", 1000); //wait this long and then take us to the secondScene
//   // });
  playScene();
//
} //endsetup

function playScene() {

  $wordDiv.fadeIn(1000);
  $wordDiv.css("background-color", '#000000');
  $playButton.show();
  $resetButton.show();

  //the play button and its click functions
  $playButton.click(function() {
    applyEffect(moodScore);
    playSequence();
    // oscillateNote();
  });

  //the reset button and its click functions
  $resetButton.click(function() {
    // if the OutputIndex array is cleared while the playSequence function is
    // still enabled, some sounds that don't exist anymore will get triggered
    playSequenceEnabled = false;
    // $resetButton = false;
    clearSynth();
    clearOutput();
    // clearInterval(oscillateNote);
    moodScore = 0;
    playSequenceEnabled = true; // re-enable the play sequence

  });

  pushWords(aDarkString, "dark");
  pushWords(aLightString, "light");
  pushWords(aNeutralString, "neutral");

  initWordDivs();
  initWordsClick();
  hoverOver();

} //end playScene();

//playSynth() function
//this function is 'adapted' from music-box week 7 and is a WIP
//will hopefully help with effects for playSequence
function playSynth() {
  // let frequency = aSynth1Freq[Math.floor(Math.random() * aSynth1Freq.length)];
  // synth1.frequency = frequency;
  synth1.play();
  console.log(synth1.frequency, "playSynth");
} //end playSynth();

function clearSynth() {
  clearInterval(oscillator);
  console.log(clearInterval);
} //end stopSynth();


//oscillateNote() function
//this function creates a simple oscillator that can be reused elsewhere
function oscillateNote(){
  oscillator = setInterval('playSynth()', NOTE_TEMPO);
}
//pushWords() function
//this function uses a for loop to initialize the word and sound objects
//it inadvertantly became a css hack for positioning the word objects on the screen
function pushWords(aString, mood) {

  let paddingTop = 25;
  let paddingBottom = 25;
  let paddingLeft = 25;
  let boxHeight = 300;
  let lineHeight = 20;
  let columnWidth = 100;
  let x = paddingLeft;
  let y = paddingTop;


  for (let i = 0; i < aString.length; i++) { //instantiate my word objects
    aSoundsArray.push(new MySound(aString[i], false, 'file'));
    let lastSoundPushed = aSoundsArray[aSoundsArray.length - 1];
    aWordsArray.push(new Word(aString[i], x, y, '#00FF00', lastSoundPushed, mood));
    y += lineHeight;
    if (y > boxHeight - paddingBottom) {
      y = paddingTop;
      x = paddingLeft + columnWidth;
    }
  } //end i
} // end pushWords();

//initWordDivs() function
//a for loop to create the word divs once so that they can be easily accessed and more modular
function initWordDivs() {
  for (let t = 0; t < aWordsArray.length; t++) {
    aWordsArray[t].createWordDiv(t);
  }
}

//initWordsClick() function
//this function does a lot of important things related to word objects! it uses different events: createWordDiv(j),
//on click, play the right sound, hide the word div, push index of the word to the aOutputIndex[], add to the
//previously empty outputString variable, add text to the screen, and updateMoodScore
function initWordsClick() {
  for (let j = 0; j < aWordsArray.length; j++) {
    aWordsArray[j].div.click(function() { //j is the index of the word clicked
      // 1. play the sound associated with the word
      aWordsArray[j].sound.play();
      // 2. hide the word from the bag
      $("#W" + j.toString()).hide(); //
      // 3. add the index of the word clicked to the Output Index Array
      aOutputIndex.push(j); //everytime you click, add the corresponding index number
      //4. adding the word to the Output String
      outputString += aWordsArray[j].wordText + " "; //each time we move through the loop add the selected word
      $("#output").text(outputString); //display the selected words
      //5 . update the mood Score based on the word mood
      updateMoodScore(aWordsArray[j].mood);
      console.log("moodScore", moodScore);
    }); //end click j
  } //end for
} //end initWordsClick();

//hoverOver() function
function hoverOver(mood) {

  for (let r = 0; r < aWordsArray.length; r++) {

    if (aWordsArray[r].mood === "dark") {
      aWordsArray[r].div.hover(function() {
        aWordsArray[r].sound.play();
        //https://stackoverflow.com/questions/16781486/jquery-how-to-adjust-css-filter-blur
        $pic1.css({
          'filter': 'hue-rotate(250deg)'
        });
      }, function() {
        aWordsArray[r].sound.stop();
        console.log("stop hover", r);
        $pic1.css({
          'filter': 'hue-rotate(0deg)'
        });
      });

    } else if (aWordsArray[r].mood === "light") {
      aWordsArray[r].div.hover(function() {
        aWordsArray[r].sound.play();
        $('body').css("background-color", "#ffffff");
        $pic2.css({
          'filter': 'hue-rotate(250deg)'
        });
      }, function() {
        aWordsArray[r].sound.stop();
        $('body').css("background-color", "#000000");
        $pic2.css({
          'filter': 'hue-rotate(0deg)'
        });
      });
    } //end if
    //end hover
  } //end for loop
} //end of hover over



//applyEffect() function
//this function creates a new index from aOutputIndex[k] and changes the effect of a word based on the score
//it passes score as a parameter and is determined in the getEffect() method in the Word class
function applyEffect(score) {
  // apply effect to all words from Output
  for (let k = 0; k < aOutputIndex.length; k++) {
    let index = aOutputIndex[k];
    aWordsArray[index].changeEffect(score);
  }
} //end applyEffect();

//updateMoodScore() function
//this function updates the score based on whether the mood is light or dark
//it passes mood as a parameter
function updateMoodScore(mood) {
  //takes a mood as an input
  if (mood === "dark") {
    moodScore -= 1;
  } else if (mood === "light") {
    moodScore += 1;
  }
} //end updateMoodScore();

//playSequence() function
//this function assesses a true false boolean that if true runs through a for loop and instatiates an index
//for the aOutputIndex[l]  and is used to track which sound to play in order of word clicked first to last.
// it uses the Pizzicato end event to play the next sound after the previous one ends
function playSequence() {

  if (playSequenceEnabled) {
    for (let l = 0; l < aOutputIndex.length; l++) {
      let index = aOutputIndex[l];
      // console.log(aOutputIndex.length, l);
      if (l < aOutputIndex.length - 1) { //for all words but the last
        aWordsArray[index].sound.on('end', function() { //when the sound ends
          console.log(index, "ended");
          aWordsArray[aOutputIndex[l + 1]].sound.play(); //play the next sound
        });
        oscillateNote();
      }//end if
        aWordsArray[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
      // clearSynth();
    }//end for
  }//end if
} //end playSequence();

//clearOutput() function
//this function clears all of the aOutputIndex data using the JavaScript splice event. to help stop previously
//playing sounds from loading after the reset button has been pressed the Pizzicator pause event is used and
//seems to make the transition smoother. the outputString is set back to empty, the wordDivs are made visible again,
//and the mood is passed back through changeEffect()
function clearOutput(mood) {
  console.log("clearOutput");
  for (let m = 0; m < aWordsArray.length; m++) {
    aWordsArray[m].sound.pause();
    outputString = "";
    aOutputIndex.splice(0, aOutputIndex.length);
    $("#W" + m.toString()).show(); //show the words again
    aWordsArray[m].changeEffect(mood); //goes back to null?
    clearInterval(oscillateNote);
  } //end of m
  $("#output").text(outputString);
}

//randomInRange() function
//this function is an early example used in class that gives us a basic equation for setting random values that
//can be reused throughout the code
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
