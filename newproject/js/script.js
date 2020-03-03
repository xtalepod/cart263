"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let voice = 'UK English Male';

// The parameters for the voice in an object
let voiceParameters = {
  pitch: 0.6,
  rate: 0.6,
  volume: 1
}

let count = 0;
//the jQuery object for the trapezoid element
let $trap;
//the array for the trapezoids
let trapazoids = [];
let x;
let y;


$(document).ready(setup);


function setup() {
  //   let $divs = $('div');
  // $divs.hide();
  // $divs.fadeIn(2000);

  let $trap = $('#trapezoid');

  for (let i = 0; i < 30; i ++) {
    let x = Math.random() * 100;
    let y = Math.random() * 250;
    let speed = Math.random() * 15;
    trapazoids.push();
  }

  for (let i = 0; i < 5; i++) {
    $trap.hide()
      .fadeIn(300)
      .mouseenter(function() {
        $("p").first().text("mouse enter");
        $("p").last().text(++count);
        say("ahhhh");
      });
  }

  //   for (let i = 0; i < 4; i ++) {
  //   let x = Math.random() * 100;
  //   let y = Math.random() * 250;
  //   // let speed = Math.random() * 15;
  //   trapazoids.push();
  // }
  //   trapActions();

}

function say(text) {
  responsiveVoice.speak(text, voice, voiceParameters);
}

function randomPosition() {
  let x = Math.random() * 100;
  let y = Math.random() * 250;
}

// function trapActions() {
//
// for (let i = 0; i < trapazoids.length; i++) {
//     $trap.hide()
//     .fadeIn(300)
//     .mouseenter(function() {
//       $("p").first().text("mouse enter");
//       $("p").last().text(++count);
//       say("ahhhh");
//     });
//   }
// }
