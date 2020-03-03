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
let $trap;
let trapsArray = ["", "", "", "", ""];

$(document).ready(setup);


function setup() {
//   let $divs = $('div');
// $divs.hide();
// $divs.fadeIn(2000);

for (let i = 0; i < trapsArray.length; i ++)
{
let $trap = $('#trapezoid');

$trap.hide()
    .fadeIn(3000)
    .mouseenter(function() {
      $("p").first().text( "mouse enter" );
      $("p").last().text( ++count );
      // $("p", this).hide();
      say("ahhhh");
    });
  }
  console.log(trapsArray.length);

//   $trap.hide();
// $trap.fadeIn(3000);
}

function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
