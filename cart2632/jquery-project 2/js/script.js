"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


let dataFile;

$(document).ready(setup);


function setup() {
  //this is the path to the file
  $.getJSON("assets/data/data.json")
  .done(dataLoaded)//this is a callback to function we create later
  .fail(dataError);//this is a call back to a function we create later

}


function dataLoaded(data) {
  let randomCondiment = getRandomElement(data.condiments);
  console.log(randomCondiment);

// randomCondiment ="s";// forcing the scenario to test if the if statement works

let verb = "is";
//-1 here is used to get the last letter in a string
 if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
   verb = "are";
 }

console.error(verb);

   let randomCat = getRandomElement(data.cats);
     console.log(randomCat);

        let randomRoom = getRandomElement(data.rooms);
          console.log(randomRoom;

            let randomDescription = `${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom}`

$(body).append(`<p>${randomDescription}</p>`)
            //we need to fix indefinate artile issue to an
}

//error handling contains these three parameters
function dataError(request,textStatus, error) {
  console.error(error);//write like this because i want to pass the contents of the error variable to it
}

//
function getRandomElement(array) {
  //(array) here doesnt super matter name wise but
  let element = array[Math.floor(Math.random() * array.length)]; //choose random element from the array an array needs Math.floor to chop off the decimals because arrays dont read decimals
  return element//return this element from the function... give it back to whoever asks for it when the function is used
}
