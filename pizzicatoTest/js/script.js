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
let mySoundsArray = [];

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
let myWordsArray = [];

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

  // openingScene();
  playScene();

} //endsetup

//this is the first function the user has to engage with. it helps to give a mood/transition and help set the next scene
function openingScene() {
  $openScene.one("click", function() { //only do this one time
    sound6.play();
    setTimeout("playScene()", 1000); //wait this long and then take us to the secondScene
  });
  console.log($openScene, "open");
}

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

  // initWords(aMyString, "dark");
  pushWords(aDarkString, "dark");
  pushWords(aLightString, "light");
  // pushWords(aNeutralString, "neutral");

  initWordsClick();

  console.log(myWordsArray);
  console.log(mySoundsArray);
}

//'adapted' from music-box week 7
function playSynth() {
  let frequency = Math.floor(randomInRange(220, myFrequencies.length));
  synth.frequency = frequency;
  // synth.addEffect
  synth.play();
  console.log(synth);
}

//this function initializes my words and puts them in the proper location, is initializes my sounds
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
    mySoundsArray.push(new MySound(aString[i], 4));
    let lastSoundPushed =  mySoundsArray[mySoundsArray.length-1];
    myWordsArray.push(new Word(aString[i], x, y, '#00FF00', lastSoundPushed, mood));
      y += lineHeight;
        if (y > boxHeight - paddingBottom) {
          y = paddingTop;
          x = paddingLeft + columnWidth;
        }
    // console.log("i:", i,"word array i:", myWordsArray[i],"string:", aMyString[i],"sound:", mySoundsArray[i]);
  } //end i
}// end pushWords

function initWordsClick(){
  for (let j = 0; j < myWordsArray.length; j++) {
    myWordsArray[j].createWordDiv(j);
    myWordsArray[j].div.click(function() { //j is the index of the word clicked
      // 1. play the sound associated with the word
      myWordsArray[j].sound.play();
      // 2. hide the word from the bag
      $("#W" + j.toString()).hide();//
      // 3. add the index of the word clicked to the Output Index Array
      aOutputIndex.push(j); //everytime you click, add the corresponding index number
      //4. adding the word to the Output String
      outputString += myWordsArray[j].wordText + " "; //each time we move through the loop add the selected word
      $("#output").text(outputString); //display the selected words
      //5 . update the mood Score based on the word mood
      updateMoodScore(myWordsArray[j].mood);
      console.log("moodScore", moodScore);
  }); //end click j
  } //end for
} //end initWordsClick

function applyEffect(score){
   // apply effect to all words from Output
  for (let k = 0; k < aOutputIndex.length; k++) {
    let index = aOutputIndex[k];
      myWordsArray[index].changeEffect(score);
    }
}

function updateMoodScore(mood){
  //takes a mood as an input
  if (mood === "dark") {
    moodScore -= 1;
  }
  else if (mood === "light") {
      moodScore += 1;
  }

}

//creating a play sequence function that is executed when the play button is pressed
function playSequence() {

  if (playSequenceEnabled) {
    for (let l = 0; l < aOutputIndex.length; l++) {
      let index = aOutputIndex[l];
      // console.log(aOutputIndex.length, l);
      if (l < aOutputIndex.length - 1) { //for all words but the last

        myWordsArray[index].sound.on('end', function() { //when the sound ends
          console.log(index, "ended");
          myWordsArray[aOutputIndex[l + 1]].sound.play(); //play the next sound
        });
      }
      // myWordsArray[aOutputIndex[0]].sound.addEffect(darkEffect; //play the first word, rest will follow
      myWordsArray[aOutputIndex[0]].sound.play(); //play the first word, rest will follow
    }
  }
}

//this function clears the output array and puts the playSequenceEnabled back to true, its executed when the reset button is pressed
function clearOutput(mood) {
  console.log("clearOutput");

  for (let m = 0; m < myWordsArray.length; m++) {
    myWordsArray[m].sound.pause();
    outputString = "";
    aOutputIndex.splice(0, aOutputIndex.length);
    $("#W" + m.toString()).show();//show the words again
    myWordsArray[m].changeEffect(mood);
  }//end of m
  $("#output").text(outputString);

}

// //from class
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


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
