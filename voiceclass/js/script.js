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

//
  //   let abusePhrases = ["pathetic",
  // "a loser",
  // "a waste of space",
  // "nobody",
  // "ugly",
  // "worthless",
  // "hopeless",
  // "hideous"];
//let currentPhrases = '';
let $command;

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

function sayBackwards(text) {
  let backwardsText = text.split('').reserve().join('');
  let options = {
    rate: 1,
    pitch: 1
  };
  responsiveVoice.speak("hello world", "UK English Man", options);
}


//from pippins game
function handleAnnyang(){
  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    let command = {
      "I give up": handleUserSpeech,
      "I think it is *animal": handleUserSpeech
    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);
    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();

    // Choose a phrase for the user to say first
    currentPhrase = getNewPhrase();

    $command = $('#command');
    // Display the phrase on the page
    $command.text(`Say, "I am ${currentPhrase}."`);
  }
}

function handleUserSpeech(animal) {

  // We check whether the user said what they were told to say
  // by comparing what annyang heard (phrase) with the
  // currentPhrase variable
  if (animal === $correctButton) {
    // If they said the right thing, we emphasise it...
    // (Note the use of backslash (\) to "escape" the apostrophe in That's
    // so that it doesn't interfere with our string.)
    $command.text(`That's right. You are ${animal}.`);
    // Get a new thing for them to say
    currentAnimal = getNewElement();
    // And tell them to say it
    $command.append(` Now say "I am ${currentAnimal}."`);
  }
  else {
    // If they said the wrong thing, correct them and demand
    // they say it.
    $command.text(`That's not right. Say "I am ${currentAnimal}".`);
  }
}
