"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//this is the standard magical thing that lets you start using the jQuery library online
//ready is a special event

let $animal;
let $fly;

const buzzSound = new Audio("assets/sounds/buzz.mp3");
const chewingSound = new Audio("assets/sounds/crunch.wav");

$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
  $animal = $('#animal');
  $fly = $('#fly');

  $fly.draggable({
    start: function() {
      buzzSound.play();
    },
    stop: function() {
      buzzSound.pause();
    }
  });

  //on drop is a hanlder that takes parameters
  $animal.droppable({
    drop: onDrop
  });
}

function onDrop(event, ui) {
  console.log("dropped");
  // $fly.remove();
  //if you wanted to have more tha one fly you would use ui
  //adding .remove makes the fly vanish after its been dragged
  ui.draggable.remove();
  $(this).attr('src', 'assets/chewing.gif');
  //you need to set a boolean for the loop! at least in this case
  chewingSound.loop = true;
  chewingSound.play();

}
