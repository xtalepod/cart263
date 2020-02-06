"use strict";

/********************************************************************

feelings i can't control
christale terris

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//from pippin's endless dialog
// How long the program waits before displaying it's opening gambit
const INITIAL_DIALOG_DELAY = 2000;
// Constants to determine how long after dismissing a dialog we should
// add a new one to the page
const MIN_DIALOG_DELAY_TIME = 2000;
const MAX_DIALOG_DELAY_TIME = 20000;

//An array to hold all the dialog which will appear as pop up boxes
let dialogBoxes = [
  "eros",
  "i think theres something missing inside me",
  "the state of being infatuated or obsessed with another person",
  "typically experienced involuntarily and characterized by a strong desire for reciprocation",
  "i am self assured",
  "have you read the wiki page 'how to let go?'",
  "during the latter part of this period, children begin to use attachment figures(familiar people) as a secure base to explore from and return to. parental responses lead to the development of patterns of attachment; these, in turn, lead to internal working models which will guide the individual 's feelings, thoughts and expectations in later relationships.[2] separation anxiety or grief following the loss of an attachment figure is considered to be a normal and adaptive for response an attached infant.these behaviours may have evolved because they increase the probability of survival of the child.",
  "demisexual."
];
//
// // Load sound effects for dialogs appearing and being dismissed
// let newDialogSFX = new Audio("assets/sounds/dialog_new.wav");
// let dismissDialogSFX = new Audio("assets/sounds/dialog_dismiss.wav");

//Load sound effects for the dumpster fire (dollySFX) and when the user interacts with the buttons (icqSFX)
let dollySFX = new Audio("assets/sounds/dollyparton.wav");
let icqSFX = new Audio("assets/sounds/icq.mp3");

//Declare 3 JavaScript variables to hold the elements used in the dumpster fire
let $flames;
let $dumpster;
let $love;

// We want to track how much the mouse is moved and when it reaches a maximum
// create a new dialog, so here are a constant and a variable to track that
const MAX_MOUSE_MOVES = 20;
let mouseMoves = 0;

//The THING we do in javascript so the webpage knows its time to load our data
$(document).ready(setup);

//A function to set up the actions to take place when the buttons are pressed, turning the Javascript variables into
function setup() {
  console.log("setting up");

  // Whenever the mouse moves, call the mouseMoved function
  // $(document).on('mousemove', mouseMoved);

  //https://api.jquery.com/fadeToggle/
  $("#itsokay").click(function() {
    addDialog();
    $("#ilovemyself").append("<div>i love myself</div>");
    // Play the new dialog sound effect
    icqSFX.currentTime = 0;
    icqSFX.play();
  });
  //this button shows the word no over and over again when you click it + plus i'm sorry fades in and out
  $("#doyouloveme").click(function() {
      $("#no").append("<div>no</div>");
      $("#imsorry").append("<div>i'm sorry</div>");
    // });
    // Play the new dialog sound effect
    icqSFX.currentTime = 0;
    icqSFX.play();
  });
  console.log($("no"));

  //Get the elements from the page!
  $flames = $('#flames');
  $dumpster = $('#dumpster');
  $love = $('#love');

//Make the love element draggable... I can remove the start and stop function because I'm not using it but for now I'll keep it to remember something is possible
  $love.draggable({
    start: function() {
      // buzzSound.play();
    },
    stop: function() {
      // buzzSound.pause();
    }
  });

  //Make the dumpster element droppable
  $dumpster.droppable({
    //The drop option specifies a function to call when a drop is completed*
    drop: onDrop
  });
}

// function mouseMoved() {
//   mouseMoves++;
//   if (mouseMoves > MAX_MOUSE_MOVES) {
//     addDialog();
//     mouseMoves = 0;
//   }
// }

// A function that makes the dialog boxes show up randomly + randomly reveal the questions
function addDialog() {
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
    //from endless dialog
    buttons: {
      "ask me again": function() {
        if ($(this).dialog(`close`)) {
          $(this).attr('src', 'assets/images/pinkdumpster.png', '500');
        };
      },
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
}

// randomInRange()
//
// // Returns a random number between min and max
// function randomInRange(min, max) {
//   return min + (Math.random() * (max - min));
// }

//This function gets called when the draggable element is dragged over the droppable element. When the element is dropped: play dolly parton, set the dumpster on fire, and open a dialog box.
//https://github.com/pippinbarr/cart263-2020/blob/master/activities/jqueryui/eat-up/js/script.js
function onDrop(event, ui) {
//When the user drops the love fire onto the dumpster we want to keep the dumpster on the page, play dolly parton, and start the explosion
//play dolly en loop (loop requires a boolean)
  dollySFX.loop = true;
  dollySFX.play();
  //add the explosion! use the .attr() function to let us change specific attributes on HTML elements by specifying the attribute
  //and then and then what we want to set it to - in this case the 'src' attribute to the closed image
  $(this).attr('src', 'assets/images/explosion.gif');
//also add a dialog box
  addDialog();
}
