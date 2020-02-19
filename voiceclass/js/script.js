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

//a variable for the score
let score = 0;

$(document).ready(setup);


function setup() {
  //to setup the score we need to create a jQuery variable and store it in an html element which in this case is a div
newRound();
  let $score = $('<div></div>');
  //then we can attach the addClass event listener and our score variable
  //addClass is used to add more property to each selected element or change the property of the selected element
  //syntax: the PARAMETER to be accepted is score (so this makes the score variable a class?)
  //return value: "it returns the selected elements with added new class"
  //this score is not referring to the variable we delcared up to
  $score.addClass('scoreClass');
  //attach text event listener to display the score from our variable
  $score.text(score);
  //we need to attach (append) the jQuery $score to the body
  $('body').append($score);

  if (annyang) {
    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    let command = {
      'I give up': function() {
        $score.text(score);
        score = 0;
        $correctButton.effect("shake");
        $('body').css('background-color', 'black');
        newRound();
      },
      'I think is it *tag': function() {
        sayBackwards($correctButton.text());
        score += 1;
        newRound();
      }
    };
      // Now we've defined the commands we give them to annyang
      // by using its .addCommands() function.
      annyang.addCommands(command);
      // Finally we tell annyang to start listening with its
      // .start() function
      annyang.start();
    }
  }
  //after you make your utton funtion doing this should make your button appear on the age!
  addButton();
  console.log(addButton);

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
      //use the css class selector and the jquery remove
      //when the correct button is clicked remove the buttons
      //start a new round after 1 second
      $('.guess').remove();
      setTimeout(newRound, 1000);

    } else {
      //when a round is given up by saying "i give up" make it shake
      //say it backwards
      // $(this).effect('shake');
      sayBackwards($correctButton.text());
    }
  }


  function sayBackwards(text) {
    let backwardsText = text.split('').reverse().join('');
    // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
    let options = {
      pitch: Math.random(),
      rate: Math.random()
    };

    // Use ResponsiveVoice to speak the string we generated, with UK English Male voice
    // and the options we just specified.
    responsiveVoice.speak(backwardsText, 'UK English Male', options);
  }


  //from pippins game
  // function handleUserSpeech(phrase) {
  //
  //   // We check whether the user said what they were told to say
  //   // by comparing what annyang heard (phrase) with the
  //   // currentPhrase variable
  //   if (phrase === currentPhrase) {
  //     // If they said the right thing, we emphasise it...
  //     // (Note the use of backslash (\) to "escape" the apostrophe in That's
  //     // so that it doesn't interfere with our string.)
  //     // $command.text(`Say it again ${phrase}.`);
  //     // sayBackwards($correctButton.text());
  //     // Get a new thing for them to say
  //     currentPhrase = getNewPhrase();
  //     // And tell them to say it
  //     $command.append(` Now say "I am ${currentPhrase}."`);
  //   }
  //   else {
  //     // If they said the wrong thing, correct them and demand
  //     // they say it.
  //     $command.text(`That's not right. Say "I am ${currentPhrase}".`);
  //   }
  // }
