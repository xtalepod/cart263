"use strict";

// WHISPERS is an interactive soundscape generator inspired by ASMR and electroacoustic music.
// The simple interface allows the user to write poems by selecting words which can then be played back for listening,
// and if desired built upon. The words are divided into three categories: dark, light, and neutral. Two of categories or
// “moods” have effects built into them which alter the overall feeling of the soundscape depending on the predominant
// type in a sentence. In addition, these moods also have their own chord progressions that play back with the words.
//Pizzicato is used regularly throughout this project: https://github.com/alemangui/pizzicato#sounds-events-end
//by Christale Terris
//CART 263 2020 ~ Project 3


//building chords
//https://www.youtube.com/watch?v=YSKAt3pmYBs
//https://github.com/pippinbarr/cart263-2020/tree/master/activities/pizzicato/music-box
//an array to hold the light frequencies
let aLightFreq1 = [349.32, 523.25, 783.99, 880.00, 1318.51, 880.00];
let aLightFreq2 = [415.30, 659.25, 987.77, 1046.50, 1567.98, 1046.50];
let aLightFreq3 = [523.25, 783.99, 1174.66, 1318.51, 1975.65, 1318.51];
//an array to hold the dark frequencies
let aDarkFreq1 = [164.81, 220.00, 196.00, 185.00, 164.81, 146.83];
let aDarkFreq2 = [196.00, 277.18, 246.94, 220.00, 196.00, 185.00];
let aDarkFreq3 = [246.94, 329.63, 293.66, 277.18, 246.94, 220.00];

let chordInterval; //a variable for setInterval() to change the chords

//arrays to hold the frequencies of the synths
let aSynth1Freq = [];
let aSynth2Freq = [];
let aSynth3Freq = [];
let synthFreqIndex = 0; //start the index at 0, allow the frequencies to be modular
let synth1, synth2, synth3; //instatiate the synths

//CONSTANTS related to the sound objects and synths
const CHORD_DURATION_DARK = 3000; //ms
const CHORD_DURATION_LIGHT = 1000; //ms
const ATTACK = 0.2;
const RELEASE = 0.1;
const NUM_OF_CHORDS = 6;

//instatiate the pizzicato effects
let darkEffect;
let lightEffect;

let aSounds = []; //an array for the Sound.js objects

let aWords = []; //an array for the Word.js objects
let outputString = ""; //an empty string for the text output
let aOutputIndex = []; // aWords empty index for tracking output

//creating string arrays for the different word divs and corresponding audio file names
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
let aDarkString = [
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
let aLightString = [
  'whole',
  'part',
  'desire',
  'glued',
  'mask',
  'shape',
  'space',
  'gives'
];

//delcaring variables for all of my jQuery objects
let $openScene;
let $wordDiv;
let $playButton;
let $resetButton;
//declaring variables for my pics
let $pic1;
let $pic2;

let moodScore = 0; //start the score at 0
let rgbValue = 127; //starting in the middle of the color scale
const RGB_DARK_STEP = Math.floor(127 / aDarkString.length); //determine the deincrement for colour value change
const RGB_LIGHT_STEP = Math.floor(128 / aLightString.length); //determine the increment for colour value change

//the thing we do
$(document).ready(setup);

//setup() function
//this function instatiates the synth objects, effects, and jQuery objects. it sets up the play and reset buttons, as well as all the init functions.
function setup() {

  //create my synth objects
  synth1 = new Synth('sine', aSynth1Freq[synthFreqIndex], 0.1, ATTACK, RELEASE);
  synth2 = new Synth('sine', aSynth2Freq[synthFreqIndex], 0.1, ATTACK, RELEASE);
  synth3 = new Synth('sine', aSynth3Freq[synthFreqIndex], 0.1, ATTACK, RELEASE);
  //create my effects
  darkEffect = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.3,
    time: 0.2,
    mix: 0.6,
    volume: 0.3
  });
  lightEffect = new Pizzicato.Effects.Reverb({
    time: 2.0,
    decay: 2.95,
    reverse: false,
    mix: 0.98,
    volume: 0.60
  });

  //create my jQuery objects and hiding them at first
  $openScene = $("#openScene");
  $wordDiv = $("#wordDiv");
  $playButton = $("#play");
  $resetButton = $("#reset");
  $pic1 = $("#pic1");
  $pic2 = $("#pic2");

  //initialize the different types of words, the word divs, the click events, the play next word function, and the hover over
  initWords(aNeutralString, "neutral");
  initWords(aDarkString, "dark");
  initWords(aLightString, "light");
  initWordDivs();
  initWordsClick();
  initPlayNextWord();
  initHoverOver();

    //the play button and its click functions
    $playButton.click(function() {
      applyEffect(moodScore);
      playWordSequence();
      if (aOutputIndex.length > 0) {
        changeChord();
        playSynth();
        activateChordInterval();
      }
    });

    //the reset button and its click functions
    $resetButton.click(function() {
      clearSynth();
      clearOutput();
    });
} //end setUp();

// # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # INITS # # # # # # # #
// # # # # # # # # # # # # # # # # # # # #
//initWords() function
//this function uses a for loop to initialize the word and sound objects
//it inadvertantly became a css hack for positioning the word objects on the screen
function initWords(aString, mood) {
  let paddingTop = 25;
  let paddingBottom = 25;
  let paddingLeft = 25;
  let boxHeight = 300;
  let lineHeight = 20;
  let columnWidth = 100;
  let x = paddingLeft;
  let y = paddingTop;

  for (let i = 0; i < aString.length; i++) {
    aSounds.push(new Sound(aString[i], false, 1));
    let lastSoundPushed = aSounds[aSounds.length - 1];
    aWords.push(new Word(aString[i], x, y, "#80ffd4", lastSoundPushed, mood));
    y += lineHeight;
    if (y > boxHeight - paddingBottom) {
      y = paddingTop;
      x = paddingLeft + columnWidth;
    }
  } //end i
} // end initWords();

//initWordDivs() function
//a for loop to create the word divs once so that they can be easily accessed.
//this function was necessary because there was an issue accessing the individual divs from within the Word class
function initWordDivs() {
  for (let t = 0; t < aWords.length; t++) {
    aWords[t].createWordDiv(t);
  }
}

//initWordsClick() function
//designed with Qynn
//this function does a lot of important things related to word objects! it uses different events: createWordDiv(j),
//on click, play the right sound, hide the word div, push index of the word to the aOutputIndex[], add to the
//previously empty outputString variable, add text to the screen, and updateMoodScore
function initWordsClick() {
  for (let j = 0; j < aWords.length; j++) {
    aWords[j].div.click(function() { //j is the index of the word clicked
      aWords[j].sound.play();
      $("#W" + j.toString()).hide(); //https://www.w3schools.com/jsref/jsref_tostring_number.asp
      aWords[j].nextWordId = -2; //an 'arbitrarily' chosen value (because it was positive it would interfer with the words and -1 is already being used) that indicates this is the last of the sentence
      if (aOutputIndex.length > 0) { //if there is something inside this array i want the last index
        let last = aOutputIndex[aOutputIndex.length - 1]; //grabbing the last index in the aOutputIndex (before we push the new clicked j)
        aWords[last].nextWordId = j; // storing the word index that must follow j when it ends
      } else {}
      aOutputIndex.push(j); //everytime you click, add the corresponding index number
      outputString += aWords[j].wordText + " "; //each time we move through the loop add the selected word
      $("#output").text(outputString); //display the selected words
      updateMoodScore(aWords[j].mood);
      changeBackground();
    }); //end click j
  } //end for
} //end initWordsClick();

//initPlayNextWord() function
//designed with Qynn
//this function goes through all the words that have been clicked and plays them one after the other using Pizzicato on end function.
//if [anextWordId] is greater than 0, the next word will be played.
function initPlayNextWord() {
  for (let i = 0; i < aWords.length; i++) {
    aWords[i].sound.on('end', function() { //when the sound ends
      let next = aWords[i].nextWordId; // next word index or -1/-2 codes
      if (next >= 0) { // positive indexes point to next word to be played. without this line of code the program would break...
        aWords[next].sound.play(); //play the next sound
      } else if (next === -2) { //if you get the last word of the playSequence
        clearSynth(); //clear the synths
      } //else if (next === -1) { // any word not in the output
      //}
    });
  } // end for
}

//initHoverOver() function
//this function gives the user hints at the moods and the ability to preview the word sounds
//initHoverOver() function
//this function gives the user hints at the moods and the ability to preview the word sounds
function initHoverOver() {
  for (let r = 0; r < aWords.length; r++) {
    aWords[r].div.hover(function() {
      aWords[r].sound.play();
      // console.log("hover", r);
      if (aWords[r].mood === "dark") {
        //https://stackoverflow.com/questions/16781486/jquery-how-to-adjust-css-filter-blur
        $pic1.css({
          'filter': 'contrast(50%)'
        });
      } else if (aWords[r].mood === "light") {
        $pic2.css({
          'filter': 'contrast(150%)'
        });
      }
    }, function() {
      aWords[r].sound.stop();
      $pic1.css({
        'filter': 'none' //this is currently only working for th dark...
      });
      $pic2.css({
        'filter': 'none' //this is currently only working for th dark...
      });
    });
  } // end for
} //end function
// # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # WORDS # # # # # # # #
// # # # # # # # # # # # # # # # # # # # #

//playWordSequence() function
//this function assesses a true false boolean that if true runs through a for loop and instatiates an index
//for the aOutputIndex[l]  and is used to track which sound to play in order of word clicked first to last.
// it uses the Pizzicato end event to play the next sound after the previous one ends
function playWordSequence() {
  // initiate the cascade effect
  if (aOutputIndex.length > 0) {
    aWords[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
    console.log("playing", aOutputIndex[0]);
  }
} //end playSequence();

//updateMoodScore() function
//this function updates the score based on whether the mood is light or dark and changes the background "colour step" up or down
function updateMoodScore(mood) {
  //takes a mood as an input
  if (mood === "dark") {
    moodScore -= 1;
    rgbValue -= RGB_DARK_STEP; //change the background colour by going down a step
  } else if (mood === "light") {
    moodScore += 1;
    rgbValue += RGB_LIGHT_STEP; //change the background colour by going up a step
  }
}

//changeBackground() function
//designed with Qynn
//this function sets the background colour and allows for modularity by using the rbgValue. could be a lot funkier than grey scale but I chose to keep it simple
function changeBackground() {
  //https://stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript
  let val = (rgbValue).toString(); //the intial point
  // console.log("rgb value:", v);
  let colour = "rgb(" + val + "," + val + "," + val + ")";
  $('body').css('background-color', colour);
}

//clearOutput() function
//this function clears all of the aOutputIndex data using the JavaScript splice event. to help stop previously
//playing sounds from loading after the reset button has been pressed the Pizzicator pause event is used and
//seems to make the transition smoother. the outputString is set back to empty, the wordDivs are made visible again,
//and the mood is passed back through changeEffect()
function clearOutput(mood) {
  console.log("clearOutput");
  for (let m = 0; m < aWords.length; m++) {
    aWords[m].sound.stop();
    aWords[m].nextWordId = -1; //this is resetting all anextWordId to -1
    outputString = "";
    aOutputIndex.splice(0, aOutputIndex.length); //https://www.javascripttutorial.net/javascript-array-splice/
    $("#W" + m.toString()).show(); //show the words again
    aWords[m].changeEffect(mood);
  } //end of m
  $("#output").text(outputString);
  moodScore = 0;
}

//applyEffect() function
//this function creates a new index from aOutputIndex[k] and changes the effect of a word based on the score
//it passes score as a parameter and is set in the getEffect() method in the Word class
function applyEffect(score) {
  // apply effect to all words from Output
  for (let k = 0; k < aOutputIndex.length; k++) {
    let index = aOutputIndex[k];
    aWords[index].changeEffect(score);
  }
} //end applyEffect();

// # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # SYNTHS # # # # # # # #
// # # # # # # # # # # # # # # # # # # # #

//activateChordInterval() function
//a simple reuseabnle function that activates the chord interval changes and gives a value to the chordInterval variable so that it can be used in the clearSynth function
//https://github.com/pippinbarr/cart263-2020/blob/master/activities/pizzicato/music-box/js/script.js
function activateChordInterval() {
  if (moodScore < 0) {
    chordInterval = setInterval('changeChord()', CHORD_DURATION_DARK);
  } else if (moodScore > 0) {
    chordInterval = setInterval('changeChord()', CHORD_DURATION_LIGHT);
  }
}

//changeChord() function
//'adapted' from music-box week 7
//this function lets each synth take specific frequencies within a range and builds chords. it was not possible for me to instatiate
//the different frequencies within the constructor and this is the cleanist way i could figure out to do it!
function changeChord() {
  if (moodScore < 0) { //dark
    synth1.frequency = aDarkFreq1[synthFreqIndex];
    synth2.frequency = aDarkFreq2[synthFreqIndex];
    synth3.frequency = aDarkFreq3[synthFreqIndex];
  } else if (moodScore > 0) { //light
    synth1.frequency = aLightFreq1[synthFreqIndex];
    synth2.frequency = aLightFreq2[synthFreqIndex];
    synth3.frequency = aLightFreq3[synthFreqIndex];
  } else { // neutral
    // TBD
  }
  synthFreqIndex++;  // increment chord index
  if (synthFreqIndex === NUM_OF_CHORDS) { //make sure freq. arrays have the same lengths
    synthFreqIndex = 0;
  }
} //end changeChord();

//playSynth() function
//a simple reuseable function for playing the synths
function playSynth() {
  console.log(synth1.volume);
  synth1.play();
  synth2.play();
  synth3.play();
}

//clearSynth() function
//a simple function that clears the setInterval values, manually stops the synths, and sets the synthFreqIndex back to 0
//https://stackoverflow.com/questions/5978519/how-to-use-setinterval-and-clearinterval
function clearSynth() {
  clearInterval(chordInterval);
  synth1.stop();
  synth2.stop();
  synth3.stop();
  synthFreqIndex = 0;
} //end stopSynth();
