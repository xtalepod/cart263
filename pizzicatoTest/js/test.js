"use strict";

// my test synth and its;
let synth;
const ATTACK = 0.1;
const RELEASE = 0.1;

//d minor melodic scale rounded down
let myFrequencies = [293, 329, 349, 391, 440, 446, 554, 587];

//two variables for my Pizzicato effects
let darkEffect;
let lightEffect;

//my test sounds
let aSoundsArray = [];

//my opening scene sound, currently is still a test sound
let bees = "bees";
let sound6;


// let aMyString = [
  'parameters',
  'polymorphism',
  'variable',
  'let',
  'this'
// ];
let aWordsArray = [];

let aOutputIndex = [];
let outputString = ""; //an empty string for the text output

let playSequenceEnabled = true;

//delcaring variables for all of my jQuery objects
let $openScene;
let $wordDiv;
let $playButton;
let $resetButton;
//declaring variables for my pics
let pic1;
let pic2;
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

//the sound that pays at the opening scene
  sound6 = new MySound(bees, "dark", 1000, 4);
//creating my jQuery objects and hiding them at first
  $openScene = $("#openScene");
  $wordDiv = $("#wordDiv");
  $wordDiv.hide(); //this makes the fade in smooth
  $playButton = $("#play");
  $playButton.hide();
  $resetButton = $("#reset");
  $resetButton.hide();

  $openScene.one("click", function() { //only do this one time
    sound6.play();
    setTimeout("playScene()", 1000); //wait this long and then take us to the secondScene
  });
  console.log($openScene, "open");

  // playScene();

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
  });

//the reset button and its click functions
  $resetButton.click(function() {
    // if the OutputIndex array is cleared while the playSequence function is
    // still enabled, some sounds that don't exist anymore will get triggered
    playSequenceEnabled = false;
    clearOutput();
    moodScore = 0;
    playSequenceEnabled = true; // re-enable the play sequence

  });

  pushWords(aDarkString, "dark");
  pushWords(aLightString, "light");
  // pushWords(aNeutralString, "neutral");
  initWordsClick();
}//end playScene();

//playSynth() function
//this function is 'adapted' from music-box week 7 and is a WIP
//will hopefully help with effects for playSequence
function playSynth() {
  let frequency = Math.floor(randomInRange(220, myFrequencies.length));
  synth.frequency = frequency;
  // synth.addEffect
  synth.play();
  console.log(synth);
}//end playSynth();

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
    aSoundsArray.push(new MySound(aString[i], 4));
    let lastSoundPushed =  aSoundsArray[aSoundsArray.length-1];
    aWordsArray.push(new Word(aString[i], x, y, '#00FF00', lastSoundPushed, mood));
      y += lineHeight;
        if (y > boxHeight - paddingBottom) {
          y = paddingTop;
          x = paddingLeft + columnWidth;
        }
  } //end i
}// end pushWords();


//initWordsClick() function
//this function does a lot of important things related to word objects! it uses different events: createWordDiv(j),
//on click, play the right sound, hide the word div, push index of the word to the aOutputIndex[], add to the
//previously empty outputString variable, add text to the screen, and updateMoodScore
function initWordsClick(){
  for (let j = 0; j < aWordsArray.length; j++) {
    aWordsArray[j].createWordDiv(j);
    aWordsArray[j].div.click(function() { //j is the index of the word clicked
      // 1. play the sound associated with the word
      aWordsArray[j].sound.play();
      // 2. hide the word from the bag
      $("#W" + j.toString()).hide();//
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

//applyEffect() function
//this function creates a new index from aOutputIndex[k] and changes the effect of a word based on the score
//it passes score as a parameter and is determined in the getEffect() method in the Word class
function applyEffect(score){
   // apply effect to all words from Output
  for (let k = 0; k < aOutputIndex.length; k++) {
    let index = aOutputIndex[k];
      aWordsArray[index].changeEffect(score);
    }
}//end applyEffect();


//updateMoodScore() function
//this function updates the score based on whether the mood is light or dark
//it passes mood as a parameter
function updateMoodScore(mood){
  //takes a mood as an input
  if (mood === "dark") {
    moodScore -= 1;
  }
  else if (mood === "light") {
      moodScore += 1;
  }
}//end updateMoodScore();

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
      }
      aWordsArray[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
    }
  }
}//end playSequence(); play

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
    $("#W" + m.toString()).show();//show the words again
    aWordsArray[m].changeEffect(mood);//goes back to null?
  }//end of m
  $("#output").text(outputString);
}

//randomInRange() function
//this function is an early example used in class that gives us a basic equation for setting random values that
//can be reused throughout the code
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


//related to palying the sounds but so far am not using it anymore
// $(aWordsArray[j].div).hover(function() {
//     // aWordsArray[j].sound.play();
//     // console.log("hover", j);
//     // sleep(polymorphism.duration).then(() => { //this comes from the sleep function source
//     //     //   polymorphism.stop();
//     //     // });
//   },
//   function() {
//     // console.log("stop hover", j);
//     // polymorphism.showMood();//console log in the MySound class function pings to here
//   });
