"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//load sound effects
// let dollySFX = new Audio("assets/sounds/dollyparton.wav");
// let icqSFX = new Audio("assets/sounds/icq.mp3");

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

$(document).ready(setup);


function setup() {

  // $trap = $('#trapezoid');
  $trap = $('#container');

  //https://jqueryui.com/dialog/#modal-message
  $( function() {
      $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "i accept": function() {
            // $(this ).dialog( "tyes" );
          },
          //i dont accept
          // Cancel: function() {
          //   $( this ).dialog( "close" );
          // }
        }
      });
    } );

     //this is the same dialog box with responsive voice
     $( "#dialog-confirm" ).on('click',function () {
   // say() is a function defined below
     say("In this moment of social crisis, where even the most basic assertion that black lives matter is contested, we are drowning in “the facts” of inequality and injustice. Whether it is a new study on criminal justice disparities or another video of police brutality, demanding empirical evidence of systematic wrongdoing can have a kind of perverse quality—as if subjugated people must petition again and again for admission into the category of “human,” for which empathy is rationed andapplications are routinely denied. Ruha Benjamin");
 });


console.log($("dialog-confirm").on);

  for (let i = 0; i < 5; i++) {
   // $trap.hide()
   //   .fadeIn(300)
   //   .mouseenter(function() {
   //     $("p").first().text("enter");
   //     $("p").last().text(++count);
   //      say("ahhhh");
         let x = Math.floor(Math.random() * 100);
         let y = Math.floor(Math.random() * 500 + 100);
         trapazoids.push(new Trap (x, y, 20, '#f62681'));
    //  });
  // }
    // trapActions();

    }
}

function say(text) {
  responsiveVoice.speak(text, voice, voiceParameters);
}

function trapActions() {

for (let i = 0; i < trapazoids.length; i++) {
    $trap.hide()
    .fadeIn(300)
    .mouseenter(function() {
      $("p").first().text("mouse enter");
      $("p").last().text(++count);
      say("ahhhh");
    });
  }
}
