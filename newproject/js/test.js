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
let numOfImages = 9;
let imagesPath = 'assets/images/';
let pervKindID = 0;
let aPervImagesSRC = ['greece.jpg', 'palestine.jpg', 'blacklivesmatter.jpg','2012demo.jpg', 'blockaid.jpg', 'hongkong.jpg'];
let aPervSay = [
  "greek riot dog",
  "women at the forefront of palestinian liberation",
  "black lives matter",
  "charest woohoo",
  "reconcilation is dead"
];

let equalKindID = 1;
let aEqualImagesSRC = ['wetsu.jpg', 'stonewall.jpg', 'riotFerg.jpg', '2012.jpg','haiti.jpg', 'kiev.jpg', 'haiti.jpg'];
let aEqualSay = [
  "Freda Huson being forceably removed from her traditional territories by the RCMP on behalf on oil and gas companies",
  "An NYPD officer grabs a youth by the hair as another officer clubs a young man during a confrontation Aug. 31, 197fter a Gay Power march in New York.",
  "it took less than 90seconds between encountering Micheal Brown for Officer Willson to shoot him six times. Brown was unarmed and had just graduated from high school.",
  "SPVM fire close range during the 2012 student uprising for free education and the fight against auterity",
  "haiti"
];

//a variable to hold the jQuery imageID, an array to hold the image IDs, an array to hold the image src files



$(document).ready(setup);

function setup() {

  $counter = $("#counter");
  $pervButton = $('#pervButton');
  $equalButton = $('#equalButton');

  //this is a for loop to go through the images in the equality array using the identifications that we created
  //three pictures that three different things just need to have arrays that are in front of each other
  for (let i = 0; i < numOfImages; i++) {

    $imageID = $("#pic" + (i + 1).toString()); // when i =0 ; i+1 = 1 ; then $imageID = $("#pic1")
    //so we dont need to use an array like  aImagesID = ["#pic1", "#pic2"...]
    //just need to change the numOfImages variable so it matches the number of pictures added in the HTML
    $imageID.on({
      'click': function() {
        let kind = checkImageKind($(this));
        console.log(kind);

        if (kind[0] === equalKindID) {
          speakingParameters(aEqualSay[kind[1]]); // if yes then say the equal text number j
        }
        else if (kind[0] === pervKindID) {
           speakingParameters(aPervSay[kind[1]]);
        }
        // console.log($(this).attr('src')) // this is the source of the picture having been clicked
        // for (let j = 0; j < aEqualImagesSRC.length; j++) { // go through all the equal pictures
        //   if ($(this).attr('src') === (imagesPath + aEqualImagesSRC[j])) { // is it matching the equal picture number j ?
        //     speakingParameters(aEqualSay[j]); // if yes then say the equal text number j
        //   }
        //   // else do nothing
        // } //end for equal images
        // for (let j = 0; j < aPervImagesSRC.length; j++) { // go through all the perv pictures
        //   if ($(this).attr('src') === (imagesPath + aPervImagesSRC[j])) { // is it matching the perv picture number j ?
        //     speakingParameters(aPervSay[j]); // // if yes then say the perv text number j
        //     console.log("you perv!")
        //   }
        //   //else do nothing
        // } //end for perv images

      }
    });

  } //end for imagesID
} //end setup

//checkImageKind function()
//returns an array of two values:
// - the first is the kind of the picture (either 0 (perv) or 1 (equal))
//- and the second is the index of the picture in the corresping image Source array (either aPervImagesSRC or aEqualImagesSRC)
//e.g. output = [0,3] means the picture found was the fourth in the aPervImageSRC array

// W!: checkImageKind() should have a different name since it is not only checking for the picture king (as it was initially intended to)
// but also checks the picture index (as it is needed for the audio output)

function checkImageKind($imageID) {
  let output = [0, 0];
  for (let j = 0; j < aEqualImagesSRC.length; j++) { // go through all the equal pictures
    if ($imageID.attr('src') === (imagesPath + aEqualImagesSRC[j])) { // is it matching the equal picture number j ?
      output= [equalKindID, j];
    }
    // else do nothing
  } //end for equal images
  for (let j = 0; j < aPervImagesSRC.length; j++) { // go through all the perv pictures
    if ($imageID.attr('src') === (imagesPath + aPervImagesSRC[j])) { // is it matching the perv picture number j ?
      output = [pervKindID, j];
    }
    //else do nothing
  } //end for perv images
return output;
}




function perversionButtonPressed() {

  let i = Math.floor(randomInRange(0, numOfImages));
  $imageID = $("#pic" + (i + 1).toString());
  // console.log($imageID);
  // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aPervImagesSRC.length)); // should be lesser than aImagesSRC length
  $imageID.attr('src', imagesPath + aPervImagesSRC[j]);
  speakingParameters("but different");


  let aKind = [];
  for (let k = 0; k < numOfImages; k++) { //here we go through all the images and check their kind and its index value thanks to the checkImageKind function
    //whichreturns an array of two values the first being the kind(either 0 or 1) and the second value of the array of the index
  $imageID = $("#pic" + (k + 1).toString());
  let kind = checkImageKind($imageID); //kind is an array of two values. the first value is the type (0 or 1 for perv or equal)
  //and the second is the index of the image in the SRC array (aPervImagesSRC or aEqualImagesSRC)
  //e.g. if kind = [0,4] it means the image found is the 5th image in the aPervImagesSRC array (because pervKindID = 0 = kind[0])
  //e.g. if kind = [1, 0] it is the 1st image in the aEqualImagesSRC array (wetsu.jpg) since equalKindID = 1 = kind[0]
  aKind.push(kind[0]);//appends the image kind (either 0 or 1) to the aKind array
  }
  // console.log(aKind);
if( aKind.reduce((a, b) => a + b) === numOfImages*pervKindID){ // check if sum = 0
  console.log("all pervs")
}
}

//W! : It seems clumbsy to go through all the pictures and collect their kinds whereas we could have filled a similar array everytime we attribute a new source 

function equalityButtonPressed() {

  let i = Math.floor(randomInRange(0, numOfImages));
  $imageID = $("#pic" + (i + 1).toString());
  // console.log($imageID);

  // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aEqualImagesSRC.length)); // should be lesser than aImagesSRC length
  $imageID.attr('src', imagesPath + aEqualImagesSRC[j]);
  speakingParameters("this is what democracy looks like");

  let aKind = [];
    for (let k = 0; k < numOfImages; k++) {
      $imageID = $("#pic" + (k + 1).toString());
      let kind = checkImageKind($imageID); //now kind is an arrays
    aKind.push(kind[0]);//append the array which
    }
    // console.log(aKind);
    //https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  if( aKind.reduce((a, b) => a + b) === numOfImages*equalKindID){ // checks if sum = 9
    console.log("all equals")
  }
}
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}

function speakingParameters(text) {
  let randomPitch = Math.random();
  let randomVolume = Math.random();
  let randomRate = Math.random();

  let voiceParameters = {
    pitch: randomPitch,
    rate: randomRate,
    volume: 5
  };

  responsiveVoice.speak(text, voice, voiceParameters);
}
