"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


$(document).ready(setup);

function setup () {
  console.log("setting up");

// https://api.jquery.com/slideToggle/#slideToggle-duration-complete
  $( "#clickme" ).click(function() {
    $( "#book" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });

//https://api.jquery.com/fadeToggle/
  $( "button" ).first().click(function() {
  $( "p" ).first().fadeToggle( "slow", "linear" );
});
$( "button" ).last().click(function() {
  $( "p" ).last().fadeToggle( "fast", function() {
    $( "#log" ).append( "<div>finished</div>" );
  });
});
}
