"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

const ANIMATION_TIME = 5000;

$(document).ready(setup);
  function setup() {
    // This code will run when the document is ready!
    //we want to select our red square and then use the UI library code to make it drag!
    // $(".square").draggable({
    //     //this is like line 22 from the constrain movement code on teh UI website! ADD IT INSIDE THE DRAGGABLE FUNCTION WITH CURLY BRACKETS
    //   // axis: "x",
    //   //stop is an example of a draggable event! needs a function, in this case the function works with the CSS
    //   // stop: makeItRed});
    //   //slide 17 example: we want something to be draggable and then cannot be dragged again
    //this wasnt working!
    //   stop: function({
    //     $(this).draggable('disable');
    //   })

      $('.square').draggable({
  stop: function () {
    $(this).draggable('disable');
  }
});

//to make a moveable dialog box!!
  $( "#dialog" ).dialog();
}

//this function corresponds to stop: makeItRead
// function makeItRed () {
//   $('body').css('background-color', 'red');
// }
