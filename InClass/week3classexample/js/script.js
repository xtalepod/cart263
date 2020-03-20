"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//set variables for secretsFound and secretsTotal
let $secretsFound = 0;
let $secretsTotal;

// a variable to store all the jQuery spans
let $allSpans;
//a variable to store all the redacted spans
let $redactedSpans;
//a variable to store all the secret spans
let $secretSpans;


//this is the standard magical thing that lets you start using the jQuery library online
//ready is a special event
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
  setInterval(update,200);
  $('span').on('click',spanClicked);
  //to calculate how many secrets are found: select the secret class and check the .length property and store the results in $secretsTotal
  $secretsTotal = $('.secret').length;
  console.log($secretTotal);

  $redactedTotal = $('.redacted').length;
  $redactedRevealed = $('.revealed').length;
  $redactedSpans = $('.redacted');
  /*use jQuery text() function to set the appropriate span to the $secretsTotal value
  note: the hashtag syntax $('#IDselector') calls a jQuery ID selector*/
  $('#displayTotalFound').text("my little secrets" + $secretsFound "of" + $secretsTotal)
  $('secrets').on('mouseover', secretRevealed)
}

function update() {
  console.log("updateeeee");
  /*
  note: only single quotation syntax $('span') calls an HTML tag element*/
    $('span').each(updateSpan);
}

function updateSpan() {
  console.log("updateSpan?!");

//this how to generically generate a random number
  let randomNumber = Math.random();
  if (randomNumber < 0.1)  {
//remeber the this targets the current span cause we selected is using the JQ in setup
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
    //or
    //$(this).removeClass('redacted').addClass('revealed');
  }
}

function spanClicked () {
  console.log("clicked");
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}
