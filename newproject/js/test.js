"use strict";


let aAudioSRC = ['hands.wav', 'excellentraffy.wav', 'verygood.wav'];


/////everything below this line is from saturday night//////
let voice = 'UK English Male';

//a variable to hold each of the buttons
let $pervButton;
let $equalButton;

//a variable to hold the jQuery imageID
let $imageID
//a varible that holds the value for how many images to display
let numOfImages = 9;
//a variable used with both imageSRC arrays to shorten the image source codes through concantination later
let imagesPath = 'assets/images/';

//a variable to hold the value for perv image IDs
let pervKindID = 0;
//an array to hold image src files abbreviated for each image within the perv kind. done those way to keep the code cleaner and relies on concantination later
let aPervImagesSRC = ['greece.jpg', 'palestine.jpg', 'blacklivesmatter.jpg', '2012demo.jpg', 'blockaid.jpg', 'hongkong.jpg'];
//an array of strings that are listed so that the values match the imageSRCs
let aPervSay = [
  "greek riot dog",
  "women at the forefront of palestinian liberation",
  "black lives matter",
  "charest woohoo",
  "reconcilation is dead"
];

//a variable to hold the value for equal image IDs
let equalKindID = 1;
//an array to hold image src files, abbreviated for each image within the equal kind. done those way to keep the code cleaner and relies on concantination later
let aEqualImagesSRC = ['wetsu.jpg', 'stonewall.jpg', 'riotFerg.jpg', '2012.jpg', 'kiev.jpg', 'haiti.jpg'];
//an array of strings that are listed so that the values match the imageSRCs.
let aEqualSay = [
  "Freda Huson being forceably removed from her traditional territories by the RCMP on behalf on oil and gas companies",
  "An NYPD officer grabs a youth by the hair as another officer clubs a young man during a confrontation Aug. 31, 197fter a Gay Power march in New York.",
  "it took less than 90seconds between encountering Micheal Brown for Officer Willson to shoot him six times. Brown was unarmed and had just graduated from high school.",
  "SPVM fire close range during the 2012 student uprising for free education and the fight against auterity",
  "haiti"
];

//a variable to hold the jQuery imageID, an array to hold the image IDs, an array to hold the image src files
let aImagesKind = [0, 0, 0, 0, 0, 1, 1, 1, 1];


$(document).ready(setup);

// function setup()
//
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

        console.log($(this).attr('src')) // this is the source of the picture having been clicked
        for (let j = 0; j < aEqualImagesSRC.length; j++) { // go through all the equal pictures
          if ($(this).attr('src') === (imagesPath + aEqualImagesSRC[j])) { // is it matching the equal picture number j ?
            speakingParameters(aEqualSay[j]); // if yes then say the equal text number j
          }
          // else do nothing
        } //end for equal images
        for (let j = 0; j < aPervImagesSRC.length; j++) { // go through all the perv pictures
          if ($(this).attr('src') === (imagesPath + aPervImagesSRC[j])) { // is it matching the perv picture number j ?
            speakingParameters(aPervSay[j]); // // if yes then say the perv text number j
          }
          //else do nothing
        } //end for perv images

      }
    });

  } //end for imagesID
} //end setup

//function perversionButtonPressed()
//this function controls what happens when the perversion button is pressed. it uses the random in range function to get random image
//and then creates a jQuery element for the imageID through concantination and javascripts toString() method
//then we pick an image SRC from the perv images array at random (following the same procedure)
//then the aImagesKind array (which is holding the image IDs for pervs and equals) is made equal to pervKindID (0)
//then an if statement with javascripts reduce() method + ((a, b) => a + b) === numOfImages * pervKindID) equation
//is used to run through the array allowing us to know if ALL the pictures on the screen currently are from the pervKindID
//if so say something, else say something else.
function perversionButtonPressed() {

  let i = Math.floor(randomInRange(0, numOfImages));
  $imageID = $("#pic" + (i + 1).toString());
  // console.log($imageID);
  // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aPervImagesSRC.length)); // should be lesser than aImagesSRC length
  $imageID.attr('src', imagesPath + aPervImagesSRC[j]);
  aImagesKind[i] = pervKindID;
  console.log(aImagesKind);
  //https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  if (aImagesKind.reduce((a, b) => a + b) === numOfImages * pervKindID) { // check if sum = 9
  speakingParameters("you're a pervert")
    console.log("all pervs")
  }
  else {
    speakingParameters("but different");
  }
  //  body.css("background-image", 'url("./assets/images/democracynow.png")');
  // // https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
}

//W! : It seems clumbsy to go through all the pictures and collect their kinds whereas we could have filled a similar array everytime we attribute a new source

// function equalityButtonPressed()
//this function controls what happens when the equality button is pressed. it uses the random in range function to get random image
//and then creates a jQuery element for the imageID through concantination and javascripts toString() method
//then we pick an image SRC from the equal images array at random (following the same procedure)
//then the aImagesKind array (which is holding the image IDs for pervs and equals) is made equal to equalKindID (1)
//then an if statement with javascripts reduce() method + ((a, b) => a + b) === numOfImages * equalKindID) equation
//is used to run through the array allowing us to know if ALL the pictures on the screen currently are from the equalKindID
//if so say something, else say something else.
function equalityButtonPressed() {

//pick an image at random here
  let i = Math.floor(randomInRange(0, numOfImages));
  $imageID = $("#pic" + (i + 1).toString());
  // console.log($imageID);

  // pick an image SOURCE at random here
  let j = Math.floor(randomInRange(0, aEqualImagesSRC.length)); // should be lesser than aImagesSRC length
  $imageID.attr('src', imagesPath + aEqualImagesSRC[j]);
  // speakingParameters("this is what democracy looks like");
  aImagesKind[i] = equalKindID;
  console.log(aImagesKind);
  //https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  if (aImagesKind.reduce((a, b) => a + b) === numOfImages * equalKindID) { // checks if sum = 9
    console.log("all equals")
    speakingParameters("burn the state");
  }
   else {
     speakingParameters("same same");
   }
  // body.css("background-image", 'url("./assets/images/democracynow.png")');
// https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
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
