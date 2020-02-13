"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
$(document).ready(setup);


function setup() {

  responsiveVoice.speak("Hello world", "UK English Female", {
    pitch: 2,
    rate: 2,
    volume: 1
  });
}

function showSpeaking() {
  $('body').css('background-color', 'green');
}
function hideSpeaking() {
  $('body').css('background-color', 'white');
}
