"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let $secretsFound = 0;
let $secretsTotal;

//this is the standard magical thing that lets you start using the jQuery library online
//ready is a special event
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
  setInterval(update,200);
  $('span').on('click',spanClicked);
  //store the result
  $secretsTotal = $('.secret').length;
  $('#displayTotal').text("my little secrets" + $secretsFound "of" + $secretsTotal)
}

function update() {
  console.log("updateeeee");
  //use single quotation to call the element
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
