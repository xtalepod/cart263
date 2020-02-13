"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


let animals = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ];

    let buttons = [];
    const NUM_OPTIONS = 5;
    let $correctButton;

$(document).ready(setup);


function setup() {
  newRound();
  //after you make your utton funtion doing this should make your button appear on the age!
  // addButton();

}


function addButton(label) {
  //create a div element and store it in a new variabled called $button**!!
  let $button = $('<div></div>');
//add the class guess to the $button
  $button.addClass("guess");
//use jQuery to set the text of the $button to the lael provided
  $button.text(label);
//use jQuery UI .button() function to turn the $button into a real button
  $button.button();
//append the $button element to the body element of the page
  // $('body').append($button);
  $button.appendTo('body');
  $button.on('click', handleGuess);
//return the button element created
  return $button;
}

//this is always the way to choose a random lement from an array so its worth memorizing
function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function newRound() {
  //create an empty array called buttons
  buttons = [];
  //run a for loop NUM_OPTIONS that choeses a random animal name from the animals array using getRandomElement
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let animalName = getRandomElement(animals);
    //and also calls addButton to add a button
    let $button = addButton(animalName);
    //and adds the $btton to the buttons array with push()
    buttons.push($button);
  }
  $correctButton = getRandomElement(buttons);
  sayBackwards($correctButton.text());
}

function handleGuess() {
  if ($(this).text() === $correctButton.text()) {
    //use the css class selector and the jquer remove
    $('.guess').remove();
    setTimeout(newRound,1000);
  }
}

function sayBackwards() {
  let backwardsText = text.split('').reserve().join('');
  let options = {
    rate: 1,
    pitch: 1
  };
  responsiveVoice.speak("hello world", "UK English Man", options);
}

function handleUserSpeech(phrase) {

  if (phrase === currentPhrase) {
    $command.text('Say it again');
  }

}
// function talk() {
//     responsiveVoice.speak("hello world", "UK English Man", {
// //object parameters
//       pitch: 2,
//       rate: 2,
//       volume: 1
//     });
//
// }
