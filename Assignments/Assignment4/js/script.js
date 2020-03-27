"use strict";

/********************************************************************

christale
assignment4

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


$(document).ready(setup);


function setup() {
  //this is the path to the file
  //reload the page everytime the user clicks the document
  $(document).on("click", function(){
    location.reload(true);
});

  $.getJSON("assets/data/data.json")
    .done(dataLoaded) //this is a callback to function we create later
    .fail(dataError); //this is a call back to a function we create later
}

// a function that gets called once all the data is loaded in the set up
function dataLoaded(data) {
  //declare all variables for all my JSON data sets
  let randomCondiment = getRandomElement(data.condiments);
  let randomCat = getRandomElement(data.cats);
  let randomRoom = getRandomElement(data.rooms);
  let randomIsm = getRandomElement(data.isms);
  let randomFilms = getRandomElement(data.films);
  // randomCondiment ="s";// forcing the scenario to test if the if statement works !i'm leaving this here because I find it helpful

  let verb = "is";
  //a variable for the indefinate article problem
  let indefinateArticle = "a";

  //-1 here is used to get the last letter in a string
  // if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
  //   verb = "are";
  // }

  if (randomCat.charAt(0) === "E" && randomCat.charAt(1) === "u") {  //check if the first character of the randomCat string is E and the second is U
    indefinateArticle = "a"; //if yes then use "a"!
  }
    else if (randomCat.charAt(0) === "A" || randomCat.charAt(0) === "I" || randomCat.charAt(0) === "E" || randomCat.charAt(0) === "H" || randomCat.charAt(0) === "O") {//check if the first character is a ,i ,e,h,o
      indefinateArticle = "an"; //if yes then use "an"
  }

  let randomDescription = `${randomIsm} is to ${randomCondiment} like ${indefinateArticle} ${randomCat} in a ${randomRoom} is to Tom Hanks in ${randomFilms}`

  $('body').append(randomDescription)
  // console.log(randomDescription);
}


//error handling contains these three parameters
function dataError(request, textStatus, error) {
  console.error(error); //write like this because i want to pass the contents of the error variable to it
}

//
function getRandomElement(array) {
  //(array) here doesnt super matter name wise but
  let element = array[Math.floor(Math.random() * array.length)]; //choose random element from the array an array needs Math.floor to chop off the decimals because arrays dont read decimals
  return element //return this element from the function... give it back to whoever asks for it when the function is used
}
