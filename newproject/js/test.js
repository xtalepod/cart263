"use strict";

let voice = 'UK English Male';

let countP = 0;
let countE = 0;
let $counter;

let $pervButton;
let $equalButton;


let $imageID
let aImagesID = ["#riot", "#chiefs", "#dom"]
let aImagesSRC = ['assets/images/riotFerg.jpg', 'assets/images/chiefs.jpg', 'assets/images/dom.jpg'];

let $equalImageID
let equalImagesID = ["#wetsu","#stonewall", "#equity"]
let equalImagesSRC = ['assets/images/wetsu.jpg', 'assets/images/stonewall.jpg', 'assets/images/payequity.png'];





$(document).ready(setup);

function setup() {

$counter = $("#counter");
$pervButton = $('#pervButton');
$equalButton = $('#equalButton');

}

function perversionButtonPressed() {

// pick an image ID at random here random here
 // let i = 0; // should be lesser than aImagesID length
let i = Math.floor(randomInRange(0, aImagesID.length));
 $imageID = $(aImagesID[i]);
 console.log($imageID);

 // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aImagesID.length)); // should be lesser than aImagesSRC length
  $imageID.attr('src',aImagesSRC[j]);

}



function equalityButtonPressed() {

// pick an image ID at random here random here
 // let i = 0; // should be lesser than aImagesID length
let i = Math.floor(randomInRange(0, equalImagesID.length));
$equalImageID = $(equalImagesID[i]);
 console.log($equalImageID);

 // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, equalImagesID.length)); // should be lesser than aImagesSRC length
  $equalImageID.attr('src',equalImagesSRC[j]);

  speakingParameters("same same");

}
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


function speakingParameters(text) {
    let randomPitch = Math.random();
    let randomVolume = Math.random();
    let randomRate = Math.random();

  let voiceParameters  = {
     pitch: randomPitch,
     rate: randomRate,
     volume: 5
   };

  responsiveVoice.speak(text, voice, voiceParameters);
}
