"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

//create variables to store the elements
let $animal;
let $fly;

//this is the standard magical thing that lets you start using the jQuery library online
//ready is a special event
$(document).ready(setup);

function setup() {
  // This code will run when the document is ready!
//use jQuery to select the two elements on the page and store them in your variables
  $animal = ("#animal");
  $fly = ("#fly");

  $fly.draggable();

}
