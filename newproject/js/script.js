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

let countP = 0;
let countE = 0;
//the jQuery object for the trapezoid element
let $trap;
let $button;
let $pervButton;
let $equalButton;
//the array for the trapezoids
let trapazoids = [];
//html elements adapted from my digital tears
let body;
let firstForm;
let start;
let play;
//internvals adapted from my digital tears
let startInterval;


$(document).ready(setup);


function setup() {
  // $(document).one('mousedown', playMusic);

  $trap = $('#container');
  $button = $('button');
  $pervButton = $('pervButton');
  $equalButton = $('equalButton');
  //adapted from my digital tears
  start = $(".start");
  play = $(".play");
  firstForm = $(".firstForm");
  body = $("body");

  play.hide();
  $trap.hide();
  //this is calling the html start div
   start.on('click',function () {
    // speakingParameters() is a function defined below
      speakingParameters("In this moment of social crisis, where even the most basic assertion that black lives matter is contested, we are drowning in “the facts” of inequality and injustice. Whether it is a new study on criminal justice disparities or another video of police brutality, demanding empirical evidence of systematic wrongdoing can have a kind of perverse quality—as if subjugated people must petition again and again for admission into the category of “human,” for which empathy is rationed andapplications are routinely denied. Ruha Benjamin");
  });
  //
  for (let i = 0; i < 5 ; i++) {
    let x = Math.floor(Math.random() * 1000);
    let y = Math.floor(Math.random() * 500 + 100);
    trapazoids.push(new Trap(x, y, 20, '#f62681', 20, 5));
    }
    requestAnimationFrame(animationLoop);

      // interval to make a flashy random color background from my digital tears
  startInterval = setInterval(backgroundFlash, 100);

  }


// random color background from my digital tears
// function backgroundFlash() {
//   let r = Math.random()*255;
//   let g = Math.random()*0;
//   let b = Math.random()*199;
//   body.css("background-color", `rgb(${r},${g},${b})`)
// }

function startButtonPressed() {
  // clear the flashy background interval
  clearInterval(startInterval);
  //show the play div
  play.show();
  $trap.show();
  //hide the start div
  start.hide();
  // hide the div from the start
  start.css("display", "none");
  // sets the background to the vaporwave picture
  body.css("background-image", 'url("./assets/images/chkpattern.jpg")');

// // // https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
// //this calls the image container class from the HTML file and makes it so that each img src in that class changes (respectively) when the mouse hovers over
// also note to self this stuff should become its own function?
  $(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
  });

  //these call the HTML id's of my two image-container class img src objects and use the say function to make them say their own things
  $("#raffy").mouseenter(function() {
   // say() is a function defined below
     speakingParameters("blahblah");
  });
  $("#4chan").mouseenter(function() {
  // say() is a function defined below
    speakingParameters("okay");
  });
  // // also note to self this stuff should become its own function? WOULD END HERE
}

//a function to deal with what happens when the user clicks this button
function perversionButtonPressed() {
  body.css("background-image", 'url("./assets/images/chkpattern.jpg")');
// https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
  $("p").text(++countP);
}

//a function to deal with what happens when the user clicks this button
function equalityButtonPressed() {
  body.css("background-image", 'url("./assets/images/democracynow.png")');
// https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
  $("p").text(++countP);
}
//this function makes it so that the trapazoids do everything they're meant to do
function animationLoop() {
  for (let i = 0; i < trapazoids.length; i ++) {
    trapazoids[i].update();
    trapazoids[i].checkBoundaries();
    trapazoids[i].changeColor();
    // $('.scoreClass').text(score);
    // if (trapazoids[i].x < 500) {
    //   score += 1;
      // console.log(score);
    }
      requestAnimationFrame(animationLoop);
  }

// function say(text) {
//   responsiveVoice.speak(text, voice, voiceParameters);
// }


function speakingParameters(text) {
    let randomPitch = Math.random();
    let randomVolume = Math.random();
    let randomRate = Math.random();

  let voiceParameters  = {
     pitch: randomPitch,
     rate: randomRate,
     volume: 5
   };

  responsiveVoice.speak(text, voice, voiceParameters);
}



// function say
function trapActions() {

  for (let i = 0; i < trapazoids.length; i++) {
    $trap.hide()
      .fadeIn(300)
      .mouseenter(function() {
        $("p").first().text("mouse enter");
        // $("p").last().text(++count);
        speakingParameters("ahhhh");
      });
  }
}


//stone wall quote for image

// An NYPD officer grabs a youth by the hair as another officer clubs a young man during a confrontation Aug. 31, 1970, in Greenwich Village after a Gay Power march in New York. The long history of police violence against LGBTQ communities - stretching back to Stonewall and beyond - has many opposing the inclusion of police in Pride events.
//https://en.wikipedia.org/wiki/Shooting_of_Michael_Brown
//Brown was unarmed and died on the street.[35][38] Less than 90 seconds passed from the time Wilson encountered Brown to the time of Brown's death.[39][40]
