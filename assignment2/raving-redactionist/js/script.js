"use strict";

/*****************

dirty little secret
by the all american rejects

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;

//Add a variable to track how many secrets were found
let secretsFound = 0;
//Add a variable to track how many secrets there are total, add $ because it will use jQuery
let $secretsTotal;


// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);

/*Calculate the total number of secrets on the page by selecting the secret class
and checking the .length property result and store it in your $secretsTotal variable!*/
  $secretsTotal = $('.secret').length;
//Set the appropriate span on the page to this value using jQuery's text() function
  $('#scoreDisplayText').text($secretsTotal);
/*Add an event mouseover to all secrets using jQuery to select the secret class
and use the on() to attach an event for mouseover. To do this define an event handler function (revealSecret)*/
  $('.secret').on('mouseover',revealSecret);
}

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

//This is the event handler function for revealSecret()
  function revealSecret(){
//Add the CSS .found class to the element that was mouseover. In a mouse event hanlder this refers to the targeted element*
    $(this).addClass('found');
//Increase the counter variable by 1
    secretsFound += 1;
//Select the span containing the count of secrets found and set its text to be the value of counter variable (secretsFound) using jQuery text() function
    $('#countingTheSecrets').text(secretsFound);
//Remove the mouseover once a secret is found
    $('.found').off('mouseover');
  }


// A version using anonymous functions if you're interested:

// $(document).ready(function () {
//   $spans = $('span');
//
//   $spans.on('click',function () {
//     $(this).removeClass('revealed');
//     $(this).addClass('redacted');
//   });
//
//   setInterval(function () {
//     $spans.each(function () {
//       let r = Math.random();
//       if (r < REVEAL_POSSIBILITY) {
//         $(this).removeClass('redacted');
//         $(this).addClass('revealed');
//       }
//     });
//   },UPDATE_FREQUENCY);
// });
