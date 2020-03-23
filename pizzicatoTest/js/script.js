"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


"use strict";

let bark;
let synth;

$(document).ready(setup);

function setup() {

  // Create the synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220,
      attack: 0.2,
      release: 0.9
    }
  });

// bark = new Pizzicato.Sound({
//   source: 'file',
//   options: {
//     path: 'assets/sounds/bark.wav'
//   }
//   });

bark = new MySound('bark',"dark", 2000);


// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#p1").hover(function() {
      bark.play();
      sleep(bark.duration).then(() => {
        bark.stop();
        synth.play();
      });
  }, function() {
    bark.stop();
    synth.stop();
    console.log(bark.mood);
  });


}//endsetup

//   quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
//     lowGain: 0.6,
//     midLowGain: 0.8,
//     midHighGain: 0.5,
//     highGain: 0.6,
//     mix: 1.0
//   });
//   // sound2.addEffect(quadrafuzz)
//   // sound2.play();
//



























// The minimum frequency to use when playing a tone
// const BASE_FREQUENCY = 110;
// // An array of all the elements on the page
// let elementsArray = [];
// // The current element we're playing the note of
// let currentElement = 0;
// A string containing the names of elements we want to ignore in our
// composition (because they're often really huge and boring)
// let ignoreList = "html script link head meta title body"
// The Pizzicato tone (synth) we'll use to play each note
// let tone;
//
// $(document).ready(function() {
//   // Create the tone as a wave (defaults to sine)
//   tone = new Pizzicato.Sound({
//     source: 'wave',
//   });
//   // For fun, create a Dub Delay filter
//   let dubDelay = new Pizzicato.Effects.DubDelay({
//       feedback: 0.6,
//       time: 0.7,
//       mix: 0.5,
//       cutoff: 700
//   });
//   // ... and attach it to the tone
//   tone.addEffect(dubDelay);
//
//   // Select all the elements on the page except the ignoreList
//   let $elements = $('*').not(ignoreList);
//
//   // Select every element on the page and go through each one
//   $elements.each(function () {
//     // Adding it to the array of all the elements on the page
//     elementsArray.push($(this));
//   });
//
//   // User click calls playElement to play the first element as a note
//   $(document).on('click',playElement);
// });
//
// // playElement ()
// //
// // Converts an HTML element to a muscial note based on primitive
// // calculations of its size
// function playElement () {
//   // Get the element from the array
//   let element = elementsArray[currentElement];
//
//   // Get the basic spatial information of the element with jQuery
//   let x = element.offset().left;
//   let y = element.offset().top;
//   let w = element.width();
//   let h = element.height();
//
//   // Set up the parameters for a synth note
//
//   // Attack and delay are based on the width of the element
//   // The hardcoded numbers here are ugly, but sometimes that's life in
//   // Pippin's examples.
//   let attack = w / 5000 + 0.01;
//   let release = w / 5000 + 0.01;
//
//   // Frequency of the note is based on x position
//   // Seems to need some base value to sound right
//   let note = y + BASE_FREQUENCY;
//
//   // Set the properties on the synth
//   // Need ms() to translate millis into samples
//   tone.attack = attack;
//   tone.release = release;
//   tone.frequency = note;
//
//   // Play the note
//   tone.play();
//
//   // Increase the current element
//   currentElement++;
//
//   // If the current element has reached the end of the elements array
//   // reset to the beginning
//   if (currentElement == elementsArray.length) {
//     currentElement = 0;
//   }
//
//   // Highlight the current element with a CSS class so we see which one it is
//   // We're using jQuery UI so we can animate this transition
//   // Use the attack and release times to time the animation to the music.
//   $(element).addClass('playing',attack*10,'swing',function () {
//     // Remove the class after it has animated on
//     $(this).removeClass('playing',release*10,'swing',function () {
//       tone.stop();
//       playElement();
//     });
//   });
// };

// let sineWave = new Pizzicato.Sound({
//   source: 'wave',
//   options: {
//     type: 'sawtooth',
//     volume: 0.5,
//     frequency: 440
//   }
// });

// $(document).ready(setup);
//
// function setup() {
//   // sineWave.delay();
//   // sineWave.play(delay);
//
// }
//
// function delay() {
//   let delayEffect = new Pizzicato.Effects.Delay();
//   sineWave.addEffect(delay);
// }

// //
//
// //time for one note to play
// const NOTE_TEMPO = 200;
// //time for one beat
// const DRUM_TEMPO = 300;
// const ATTACK;
// const RELEASE;
//
// let wordSynth;
// //my hypothetical sound files
// let wordOne;
// let wordTwo;
// let wordThree;
// //using class example for now
// let frequencies = [
//   220, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30
// ];
//
// let wordOne = new Pizzicato.Sound() {
// };
