"use strict";

//my opening scene sound, currently is still a test sound
let bees = "bees";
let sound6;



//building chords
//https://www.youtube.com/watch?v=YSKAt3pmYBs
const CHORD_DURATION = 500; //ms
const ATTACK = 0.2;
const RELEASE = 0.1;
let chordInterval; // setInterval()

let aSynth1Freq = [196, 311, 311];
let aSynth2Freq = [249, 392, 392];
let aSynth3Freq = [293, 466, 466];
let synthFreqIndex = 0;
let synth1, synth2, synth3;

//two variables for my Pizzicato effects
let darkEffect;
let lightEffect;
let neutralEffect;

let aWords = []; //Word.js objects
let aSounds = []; // Sound.js objects

let outputString = ""; //an empty string for the text output
let aOutputIndex = []; // aWords indexes
let aNextWordIndex = []; //aWords indexes
let lastWordCode = -2;

//delcaring variables for all of my jQuery objects
let $openScene;
let $wordDiv;
let $playButton;
let $resetButton;
//declaring variables for my pics
let $pic1;
let $pic2;

//creating string array for the different word divs and corresponding audio file names
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

// an variable to the moodScore
let moodScore = 0;


$(document).ready(setup);

//setup() function
//this function has a lot going on...
function setup() {

  //instatiate my synth objects
  synth1 = new Sound('synth1', true, 'wave', 'triangle', ATTACK, RELEASE, aSynth1Freq[synthFreqIndex] );
  synth2 = new Sound('synth2', false, 'wave', 'triangle', ATTACK, RELEASE, aSynth2Freq[synthFreqIndex]);
  synth3 = new Sound('synth3', false, 'wave', 'triangle', ATTACK, RELEASE, aSynth3Freq[synthFreqIndex]);

  // for (let i = 0; i < aSynthString.length; i ++){
  //   aSynths.push(new Sound(aSynthString[i], false, 'wave', 'triangle', ATTACK, RELEASE));
  //   // aChord1OutputIndex.push(i);
  // }

//the sound that pays at the opening scene
  sound6 = new Sound(bees, false, 'file');

  darkEffect = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.3,
    time: 0.2,
    mix: 0.6,
    volume: 0.3
  });

  lightEffect = new Pizzicato.Effects.Reverb({
    time:2.0,
    decay: 2.95,
    reverse: false,
    mix:0.98,
    volume: 0.60
  });

  neutralEffect = new Pizzicato.Effects.StereoPanner ({
    pan: 0.0 // -1 to 1
  })

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
    playWordSequence();
    if(aOutputIndex.length>0){
        playSynth();
        console.log("Play Synths");
        activateChordInterval();
    }
  });

  //the reset button and its click functions
  $resetButton.click(function() {
    clearSynth();
    clearOutput();
  });

  pushWords(aNeutralString, "neutral");
  pushWords(aDarkString, "dark");
  pushWords(aLightString, "light");
  initWordDivs();
  initWordsClick();
  initPlayNextWord();
  hoverOver();
} //end playScene();


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
    aSounds.push(new Sound(aString[i], false, 'file'));
    let lastSoundPushed = aSounds[aSounds.length - 1];
    aWords.push(new Word(aString[i], x, y, '#00FF00', lastSoundPushed, mood));
    aNextWordIndex.push(-1);//creates an index with the name number of elements as aWords al with an initial value of -1
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
  for (let t = 0; t < aWords.length; t++) {
    aWords[t].createWordDiv(t);
    //console.log(aWords[t]);
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
      // 1. play the sound associated with the word
      aWords[j].sound.play();
      // 2. hide the word from the bag
      $("#W" + j.toString()).hide(); //
      // 3. Update Next Word Index Array (W! before pushing j)
      aNextWordIndex[j] = -2; //an 'arbitrarily' chosen value (because it was positive it would interfer with the words and -1 is already being used) that indicates this is the last of the sentence
      if(aOutputIndex.length > 0){//if there is something inside this array i want the last index
        let previousLastWordIndex = aOutputIndex[aOutputIndex.length-1]; //grabbing the last index in the aOutputIndex
        aNextWordIndex[previousLastWordIndex] = j;
        console.log("the next word", aNextWordIndex);
        console.log("the previous last word",previousLastWordIndex)
      }
       // 4. add the index of the word clicked to the Output Index Array
      aOutputIndex.push(j); //everytime you click, add the corresponding index number
      // j is nos the last Word Index
      //5. adding the word to the Output String
      outputString += aWords[j].wordText + " "; //each time we move through the loop add the selected word
      $("#output").text(outputString); //display the selected words
      //6 . update the mood Score based on the word mood
      updateMoodScore(aWords[j].mood);
      console.log("moodScore", moodScore);

    }); //end click j
  } //end for
} //end initWordsClick();


//initPlayNextWord() function
//designed with Qynn
//this function goes through all the words that have been clicked and plays them one after the other using Pizzicato on end function.
//if [aNextWordIndex] is greater than 0, the next word will be player. this index was necessary because
function initPlayNextWord(){
  for (let i = 0; i < aWords.length; i++) {
      aWords[i].sound.on('end', function() { //when the sound ends
          if (aNextWordIndex[i] >= 0 ){// positive indexes point to next word to be played. without this line of code the program would break...
              aWords[aNextWordIndex[i]].sound.play(); //play the next sound
              console.log(i, "ended >> playing ", aNextWordIndex[i]);
          }
          else if(aNextWordIndex[i] === -2){ //if you get the last word of the playSequence
              clearSynth();//clear the synths
              console.log("next for ", i, "is -2; stop the synths");
            }
            else if(aNextWordIndex[i] === -1){ // any word not in the output
                  console.log("next for ", i, "is -1, do nothing");
            }
      });
    }// end for
}

//hoverOver() function
function hoverOver() {

  for (let r = 0; r < aWords.length; r++) {
    if (aWords[r].mood === "dark") {
      aWords[r].div.hover(function() {
        aWords[r].sound.play();
        //https://stackoverflow.com/questions/16781486/jquery-how-to-adjust-css-filter-blur
        $pic1.css({
          'filter': 'hue-rotate(250deg)'
        });
      }, function() {
        aWords[r].sound.stop();
        // console.log("stop hover", r);
        $pic1.css({
          'filter': 'hue-rotate(0deg)'
        });
      });
    }
    if (aWords[r].mood === "light") {
        aWords[r].div.hover(function() {
        aWords[r].sound.play();
        $('body').css("background-color", "#ffffff");
        $pic2.css({
          'filter': 'hue-rotate(250deg)'
        });
      }, function() {
        aWords[r].sound.stop();
        $('body').css("background-color", "#000000");
        $pic2.css({
          'filter': 'hue-rotate(0deg)'
        });
      });
    } //end if
    if (aWords[r].mood === "neutral") {
        aWords[r].div.hover(function() {
        aWords[r].sound.play();
        $('body').css("background-color", "#ffffff");
        $pic2.css({
          'filter': 'hue-rotate(250deg)'
        });
      }, function() {
        aWords[r].sound.stop();
        $('body').css("background-color", "#000000");
        $pic2.css({
          'filter': 'hue-rotate(0deg)'
        });
      });
    } //end if
    //end hover
  } //end for loop
} //end of hover over


//playWordSequence() function
//this function assesses a true false boolean that if true runs through a for loop and instatiates an index
//for the aOutputIndex[l]  and is used to track which sound to play in order of word clicked first to last.
// it uses the Pizzicato end event to play the next sound after the previous one ends
function playWordSequence() {
    // initiate the cascade effect
  if(aOutputIndex.length > 0){
      aWords[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
      console.log("playing", aOutputIndex[0]);
  }
} //end playSequence();

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


//clearOutput() function
//this function clears all of the aOutputIndex data using the JavaScript splice event. to help stop previously
//playing sounds from loading after the reset button has been pressed the Pizzicator pause event is used and
//seems to make the transition smoother. the outputString is set back to empty, the wordDivs are made visible again,
//and the mood is passed back through changeEffect()
function clearOutput(mood) {
  console.log("clearOutput");
  for (let m = 0; m < aWords.length; m++) {
    // aWords[m].sound.pause();
    aWords[m].sound.stop();
    aNextWordIndex[m] = -1;//this is resetting all aNextWordIndex to -1
    outputString = "";
    aOutputIndex.splice(0, aOutputIndex.length);
    $("#W" + m.toString()).show(); //show the words again
    aWords[m].changeEffect(mood); //goes back to null?
    // playSequenceEnabled = false;
  } //end of m
  $("#output").text(outputString);
    moodScore = 0;
}

//applyEffect() function
//this function creates a new index from aOutputIndex[k] and changes the effect of a word based on the score
//it passes score as a parameter and is determined in the getEffect() method in the Word class
function applyEffect(score) {
  // apply effect to all words from Output
  for (let k = 0; k < aOutputIndex.length; k++) {
    let index = aOutputIndex[k];
    aWords[index].changeEffect(score);
  }
} //end applyEffect();

//activateChordInterval() function
//a simple reuseabnle function that activates the chord interval changes and gives a value to the chordInterval variable so that it can be used in the clearSynth function
function activateChordInterval(){
  chordInterval = setInterval('changeChord()', CHORD_DURATION);
}

//changeChord() function
//'adapted' from music-box week 7
//this function lets each synth take specific frequencies within a range and builds chords. it was not possible for me to instatiate
//the different frequencies within the constructor and this is the cleanist way i could figure out to do it!
function changeChord() {
  synthFreqIndex++;
  if(synthFreqIndex === aSynth1Freq.length){ //make sure freq. arrays have the same lengths
    synthFreqIndex = 0;
  }
  synth1.frequency = aSynth1Freq[synthFreqIndex];
  synth2.frequency = aSynth2Freq[synthFreqIndex];
  synth3.frequency = aSynth3Freq[synthFreqIndex];
} //end changeChord();

//playSynth() function
//a simple reuseable function for playing the synths
function playSynth(){
  synth1.play();
  synth2.play();
  synth3.play();
}

//clearSynth() function
//a simple function that clears the setInterval values, manually stops the synths, and sets the synthFreqIndex back to 0
function clearSynth() {
  clearInterval(chordInterval);
  synth1.stop();
  synth2.stop();
  synth3.stop();
  synthFreqIndex = 0;
  //console.log(clearInterval);
} //end stopSynth();
