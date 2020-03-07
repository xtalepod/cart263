"use strict";

let $raffy;



let $imageID
let aImagesID = ["#riot", "#chiefs", "#dom"]
let aImagesSRC = ['assets/images/riotFerg.jpg', 'assets/images/chiefs.jpg', 'assets/images/dom.jpg'];

let $equalImageID
let equalImagesID = ["#wetsu","#stonewall", "#equity"]
let equalImagesSRC = ['assets/images/wetsu.jpg', 'assets/images/stonewall.jpg', 'assets/images/payequity.png'];





$(document).ready(setup);

function setup() {



// $counter = $("#counter");



//https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
 $("#riot").attr('src','assets/images/riotFerg.jpg');

//   $('#democracy').on({
//     'click': function() {
//          var src = ($(this).attr('src') === 'assets/images/4chan.png')
//             ? 'assets/images/democracynow.png'
//             : 'assets/images/4chan.png';
//          $(this).attr('src', src);
//     }
// });

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

}
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
// function imageFlip(){
//   imageArray = [$("#raffy"),$("#fourchan"),$("#democracy")];
//
//   for (let i = 0; i < 15 ; i++) {
//     let x = Math.floor(Math.random() * 1000);
//     let y = Math.floor(Math.random() * 500 + 100);
//     imagesArray.push();
//     }
//   console.log(imagesArray);
//   console.log(imageFlip);
// }

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
//
// function addDialog() {
//   // Dynamically create a div and store it in a variable. This is the div
//   // we will turn into a dialog box. Set its title at the same time.
//   let $dialog = $(`<div></div>`).attr(`title`, `spiral`);
//   $dialog.hide();
//   // Choose a random question text from the array
//   question = dialogBoxes[Math.floor(randomInRange(0, dialogBoxes.length))];
//   // Add a p tag to the dialog div that contains the question text
//   $dialog.append(`<p>${question}</p>`);
//   // Finally, add the div to the page
//   $('body').append($dialog);
//
//   // Now we have our div on the page, transform it into a dialog with jQuery UI's
//   // .dialog() method, supplying a number of options to configure it
//   $dialog.dialog({
//     //from endless dialog
//     // buttons: {
//     //   "ask me again": function() {
//     //       addDialog();
//     //   },
//     // },
//     // The 'containment' option lets us specify where the dialog can go on the screen. 'body' means it will be
//     // contained within the body tag, and can't be dragged out of it.
//     containment: 'body'
//   });
//
//   // Finally, use .offset() on the .parent() of the dialog in order to give it a random position on the screen.
//   // Uses .height() and .width() to get the dimensions of elements, including the window.
//   $dialog.parent().offset({
//     top: Math.random() * ($(window).height() - $dialog.parent().height()),
//     left: Math.random() * ($(window).width() - $dialog.parent().width())
//   });
// }
// // Returns a random number between min and max
// function randomInRange(min, max) {
//   return min + (Math.random() * (max - min));
// }
// function speakingParameters(text) {
//     let randomPitch = Math.random();
//     let randomVolume = Math.random();
//     let randomRate = Math.random();
//
//   let voiceParameters  = {
//      pitch: randomPitch,
//      rate: randomRate,
//      volume: 5
//    };
//
//   responsiveVoice.speak(text, voice, voiceParameters);
// }
