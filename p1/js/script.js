"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
//heart, dumpster, gif,
let limerenceTitleRotation;

//from pippin's endless dialog
// How long the program waits before displaying it's opening gambit
const INITIAL_DIALOG_DELAY = 2000;
// Constants to determine how long after dismissing a dialog we should
// add a new one to the page
const MIN_DIALOG_DELAY_TIME = 2000;
const MAX_DIALOG_DELAY_TIME = 20000;

//dialog box array
let dialogBoxes = [
  "eros",
  "i think theres something missing inside me",
  "the state of being infatuated or obsessed with another person",
  "typically experienced involuntarily and characterized by a strong desire for reciprocation",
  "i am self assured",
  "have you read the wiki page 'how to let go?'"
];
//
// // Load sound effects for dialogs appearing and being dismissed
// let newDialogSFX = new Audio("assets/sounds/dialog_new.wav");
// let dismissDialogSFX = new Audio("assets/sounds/dialog_dismiss.wav");

// We want to track how much the mouse is moved and when it reaches a maximum
// create a new dialog, so here are a constant and a variable to track that
const MAX_MOUSE_MOVES = 20;
let mouseMoves = 0;

$(document).ready(setup);

function setup () {
  console.log("setting up");

// Whenever the mouse moves, call the mouseMoved function
$(document).on('mousemove', mouseMoved);
// After one second, add a dialog to the page... i dont want this event
// setTimeout(addDialog, INITIAL_DIALOG_DELAY);

//https://api.jquery.com/fadeToggle/
  $( "button" ).first().click(function() {
  $( "p" ).first().fadeToggle( "slow", "linear" );
});
//this button shows the word no over and over again when you click it + plus i'm sorry fades in and out
$( "button" ).last().click(function() {
  $( "p" ).last().fadeToggle( "fast", function() {
    $( "#no" ).append( "<div>no</div>" );
  });
});
}

function mouseMoved(){
  mouseMoves++;
  if (mouseMoves > MAX_MOUSE_MOVES) {
    addDialog();
    mouseMoves = 0;
  }
}
// addDialog()
//
// The key function. It adds a stupid dialog to a random position
// on the screen.
function addDialog() {
  // // Play the new dialog sound effect
  // newDialogSFX.currentTime = 0;
  // newDialogSFX.play();


  // Dynamically create a div and store it in a variable. This is the div
  // we will turn into a dialog box. Set its title at the same time.
  let $dialog = $(`<div></div>`).attr(`title`, `spiral`);
  // Choose a random question text from the array
  let question = dialogBoxes[Math.floor(randomInRange(0, dialogBoxes.length))];
  // Add a p tag to the dialog div that contains the question text
  $dialog.append(`<p>${question}</p>`);
  // Finally, add the div to the page
  $('body').append($dialog);

  // Now we have our div on the page, transform it into a dialog with jQuery UI's
  // .dialog() method, supplying a number of options to configure it
  $dialog.dialog({
    // The 'buttons' option lets us specify buttons to appear in the dialog as
    // the properties of an object. The property name is used as the button text
    // and the property contains a function that will be called when that button
    // is clicked. Note how you can have quote marks around a property name (important
    // if you want to include spaces for instance.)
    // In this case both buttons just close the dialog
    buttons: {
      "Yes?": function() {
        $(this).dialog(`close`);
      },
      // "No?": function() {
      //   $(this).dialog(`close`);
      // }
    },
    // The 'close' option lets us specify a function to call when the dialog is closed
    close: closeDialog,
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

// closeDialog()
//
// Closes the dialog with a sound effect and sets a timer to open a new one
function closeDialog() {
  // Play the dismissal sound, ding!
  // dismissDialogSFX.currentTime = 0;
  // dismissDialogSFX.play();
  // Choose a random delay time (in ms)
  let delay = randomInRange(MIN_DIALOG_DELAY_TIME, MAX_DIALOG_DELAY_TIME);
  // Set a timeout and add a new dialog after the delay. Dismiss a dialog, and you just get another one back
  // setTimeout(addDialog, delay);
}

// randomInRange()
//
// Returns a random number between min and max
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}
//
//
//
// function rotateTitle() {
//   limerenceTitleRotation +=1;
//   //select the header to rotate
//   $('#title').text(limerenceTitleRotation);
// }
