"use strict";
//

let voice = 'UK English Male';

let countP = 0;
let $counter;
// let countE;
let body;
let question;

let dialogBoxes = [
  "eros",
  "i think theres something missing inside me",
  "the state of being infatuated or obsessed with another person",
  "typically experienced involuntarily and characterized by a strong desire for reciprocation",
  "i am self assured",
  "have you read the wiki page 'how to let go?'"
];

let $raffy;
let $fourchan;
let $democracy;
let imagesArray = [];




$(document).ready(setup);
//
//
function setup() {

$counter = $("#counter");
$raffy= $("#raffy");
$fourchan =$("#fourchan");
$democracy = $("#democracy");


}

function imageFlip(){
  imageArray = [$("#raffy"),$("#fourchan"),$("#democracy")];

  for (let i = 0; i < 15 ; i++) {
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 500 + 100);
    imagesArray.push();
    }
  console.log(imagesArray);
  console.log(imageFlip);
}

// //a function to deal with what happens when the user clicks this button
function perversionButtonPressed() {
  // body.css("background-image", 'url("./assets/images/chkpattern.jpg")');
  addDialog();
  // addImage();
  $("#counter").text(countP++);
  }

//i dont want to ADD an image, i want an image array already on the page that flips an image when you click the perv button
//and i want a dialog to accompany a picture flipping

//FLIP 1 image from the array and read off the text with voiceParameters
//https://www.w3schools.com/howto/howto_css_flip_image.asp
// function addImage() {

//if (perversionButtonPressed === true) {
// flip(hover) and image from an array}
 // $imagesArray = $("#imagesArray");

//   $(".image-container").mouseover(function () {
//   $(this).attr('src', $(this).data("hover"));
// }).mouseout(function () {
//   $(this).attr('src', $(this).data("src"));
// });
// //these call the HTML id's of my two image-container class img src objects and use the say function to make them say their own things
//   $("#raffy").mouseenter(function() {
//    // say() is a function defined below
//      speakingParameters("In this moment of socia crisis");
//  });
//  $("#4chan").mouseenter(function() {
//   // say() is a function defined below
//     speakingParameters("okay");
// });
// }

function addDialog() {
  // Dynamically create a div and store it in a variable. This is the div
  // we will turn into a dialog box. Set its title at the same time.
  let $dialog = $(`<div></div>`).attr(`title`, `spiral`);
  $dialog.hide();
  // Choose a random question text from the array
  question = dialogBoxes[Math.floor(randomInRange(0, dialogBoxes.length))];
  // Add a p tag to the dialog div that contains the question text
  $dialog.append(`<p>${question}</p>`);
  // Finally, add the div to the page
  $('body').append($dialog);

  // Now we have our div on the page, transform it into a dialog with jQuery UI's
  // .dialog() method, supplying a number of options to configure it
  $dialog.dialog({
    //from endless dialog
    // buttons: {
    //   "ask me again": function() {
    //       addDialog();
    //   },
    // },
    // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
    // contained within the body tag, and can't be dragged out of it.
    containment: 'body'
  });

  // Finally, use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
  // Uses .height() and .width() to get the dimensions of elements, including the window.
  $dialog.parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()),
    left: Math.random() * ($(window).width() - $dialog.parent().width())
  });
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
