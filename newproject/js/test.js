"use strict";

let voice = 'UK English Male';

let countP = 0;
let countE = 0;
let $counter;

//a variable to hold each of the buttons
let $pervButton;
let $equalButton;

//a variable to hold the jQuery imageID, an array to hold the image IDs, an array to hold the image src files
let $imageID
let aImagesID = ["#riot", "#chiefs", "#dom"]
let aImagesSRC = ['assets/images/riotFerg.jpg', 'assets/images/chiefs.jpg', 'assets/images/dom.jpg'];

//a variable to hold the jQuery imageID, an array to hold the image IDs, an array to hold the image src files
let $equalImageID
let aEqualImagesID = ["#wetsu","#stonewall", "#equity"]
let aEqualImagesSRC = ['assets/images/wetsu.jpg', 'assets/images/stonewall.jpg', 'assets/images/payequity.png'];
let aEqualSay = ["hello","goodbye", "hihi"];
$(document).ready(setup);

function setup() {

$counter = $("#counter");
$pervButton = $('#pervButton');
$equalButton = $('#equalButton');

//this is a for loop to go through the images in the equality array using the identifications that we created
//three pictures that three different things just need to have arrays that are in front of each other
for (let i = 0; i < aEqualImagesID.length; i++){
  $equalImageID = $(aEqualImagesID[i]);
  $equalImageID.on({
  'click': function() {
    speakingParameters(aEqualSay[i]);

  }
  });

}
// imageClicked();



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
    speakingParameters("but different");

}

function equalityButtonPressed() {

// pick an image ID at random here random here
 // let i = 0; // should be lesser than aImagesID length
let i = Math.floor(randomInRange(0, aEqualImagesID.length));
$equalImageID = $(aEqualImagesID[i]);
 console.log($equalImageID);

 // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aEqualImagesID.length)); // should be lesser than aImagesSRC length
  $equalImageID.attr('src',aEqualImagesSRC[j]);
  speakingParameters("same same");

}
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


// function imageClicked() {
//
//   if ($equalImageID.click() === true) {
//     // choosePhrase();
//     speakingParameters("testing");
//   }
//
// }

// function choosePhrase() {
//
// }

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
