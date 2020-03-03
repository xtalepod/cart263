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


$(document).ready(setup);

function setup() {

  //https://jqueryui.com/dialog/#modal-message
    $( function() {
      $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "i accept": function() {
            $(this ).dialog( "close" );
          },
          //i dont accept
          // Cancel: function() {
          //   $( this ).dialog( "close" );
          // }
        }
      });
    } );

  $( "#dialog-confirm" ).on('click',function () {
  // say() is a function defined below
    say("In this moment of social crisis, where even the most basic assertion that black lives matter is contested, we are drowning in “the facts” of inequality and injustice. Whether it is a new study on criminal justice disparities or another video of police brutality, demanding empirical evidence of systematic wrongdoing can have a kind of perverse quality—as if subjugated people must petition again and again for admission into the category of “human,” for which empathy is rationed andapplications are routinely denied. Ruha Benjamin");
  showSpeaking();
  setTimeout(hideSpeaking, 1000);
});

  $(document).on('click',function () {
  // say() is a function defined below
  say("i am just a computer");
  showSpeaking();
  setTimeout(hideSpeaking, 1000);
});
  // responsiveVoice.speak("Hello world", "UK English Female", {
  //   pitch: 2,
  //   rate: 2,
  //   volume: 1
  // });

  let m = 0;
  $( "div.enterleave2" )
    .mouseenter(function() {
      $( "p", this ).first().text( "mouse enter" );
      $( "p", this ).last().text( ++m );
      $("p", this).hide();
      say("ah");
    })
    .mouseleave(function() {
      $( "p", this ).first().text( "mouse leave" );
      $("p", this).show();
      say("fuck you")
    });

let n = 0;
$( "div.enterleave1" )
  .mouseenter(function() {
    $( "p", this ).first().text( "mouse enter" );
    $( "p", this ).last().text( ++n );
  })
  .mouseleave(function() {
    $( "p", this ).first().text( "mouse leave" );
  });

}

function showSpeaking() {
  $('body').css('background-color', 'green');
}
function hideSpeaking() {
  $('body').css('background-color', 'pink');
}


function say (text) {
  responsiveVoice.speak(text,voice,voiceParameters);
}
