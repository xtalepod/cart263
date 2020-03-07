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
// let aImagesID = ["#pic1", "#pic2", "#pic3", "#pic4", "#pic5", ""]
let numOfImages = 6
let imagesPath = 'assets/images/';
let aPervImagesSRC = ['riotFerg.jpg', 'chiefs.jpg', 'dom.jpg', 'payequity.png'];
let aEqualImagesSRC = ['wetsu.jpg', 'stonewall.jpg', 'payequity.png', 'tom3.png'];
let aEqualSay = ["wetsuweten","stonewall", "pay equity", "tom hanks rocks"];

//a variable to hold the jQuery imageID, an array to hold the image IDs, an array to hold the image src files



$(document).ready(setup);

function setup() {

$counter = $("#counter");
$pervButton = $('#pervButton');
$equalButton = $('#equalButton');

//this is a for loop to go through the images in the equality array using the identifications that we created
//three pictures that three different things just need to have arrays that are in front of each other
for (let i = 0; i < numOfImages; i++){

  $imageID = $("#pic"+ (i+1).toString()); // when i =0 ; i+1 = 1 ; then $imageID = $("#pic1")
  //so we dont need to use an array like  aImagesID = ["#pic1", "#pic2"...]
  //just need to change the numOfImages variable so it matches the number of pictures added in the HTML
  $imageID.on({
  'click': function() {
    // console.log($(this).attr('src')) // this is the source of the picture having been clicked
    for (let j = 0; j < aEqualImagesSRC.length; j++){ // go through all the equal pictures
      if($(this).attr('src') === (imagesPath+aEqualImagesSRC[j])){ // is it matching the equal picture number j ?
        speakingParameters(aEqualSay[j]); // if yes then say the equal text number j
      }
      // else do nothing
    }//end for equal images
    for (let j = 0; j < aPervImagesSRC.length; j++){ // go through all the perv pictures
      if($(this).attr('src') === (imagesPath+aPervImagesSRC[j])){ // is it matching the perv picture number j ?
        // speakingParameters(aPervSay[j]); // // if yes then say the perv text number j
        console.log("you perv!")
      }
      //else do nothing
    }//end for perv images

    }
  });

}//end for imagesID
}//end setup

function perversionButtonPressed() {

  let i = Math.floor(randomInRange(0, numOfImages));
  $imageID = $("#pic"+ (i+1).toString());
   // console.log($imageID);

   // pick an image SOURCE at random here
    let j = Math.floor(randomInRange(0, aPervImagesSRC.length)); // should be lesser than aImagesSRC length
      $imageID.attr('src',imagesPath+aPervImagesSRC[j]);
    speakingParameters("but different");

}

function equalityButtonPressed() {

let i = Math.floor(randomInRange(0, numOfImages));
$imageID = $("#pic"+ (i+1).toString());
 // console.log($imageID);

 // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aEqualImagesSRC.length)); // should be lesser than aImagesSRC length
    $imageID.attr('src',imagesPath+aEqualImagesSRC[j]);
  speakingParameters("same same");

}
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


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
