"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

https://static1.squarespace.com/static/5bbd85f3809d8e6a1a3c5c9e/t/5bdc1e61032be468ca7594b6/1541152364319/2016-Racial-Fictions-Biological-Facts.pdf
https://www.theguardian.com/technology/2019/jun/29/ruha-benjamin-we-cant-wait-silicon-valley-become-more-diverse-prejudice-algorithms-data-new-jim-code
https://www.thejustdatalab.com/resources

*********************************************************************/

// An array of abusive words/phrases to be added to the end of
// "I am ..." to make the user feel terrible.
let eightBallAnswers = [
"hazy",
"outlook not so good",
"ask again later",
"yes it is decidely so"
];

let magicQuestions = [
  "is climate change real",
  "is this working",
  "can we break the glass ceiling"
];

//
// let abusePhrases = [
// "a racist",
// "transphobic"
// ]

// A variable to store the current thing the user
// should be saying. Starts as nothing.
let currentPhrase = '';
// A variable to store the command text element
let $command;

$(document).ready(setup);

function setup() {

  // Make sure annyang is available...
  if (annyang) {

    // Add the commands to annyang. That is it should listen
    // for "I am..." or "I'm..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {
      "please answer *magicQuestions": handleUserSpeech,
      // "I'm *abusePhrase": handleUserSpeech
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
    $command.text(`Dear magic 8 ball "please answer ${currentPhrase}."`);
  }
};


// handleUserSpeech(phrase)
//
// Called by annyang when it hears a sentence of the form
// "I am X". 'phrase' will contain the X part.
// Checks whether the user said what they were told to say
// and reacts accordingly.
function handleUserSpeech(phrase) {

  // We check whether the user said what they were told to say
  // by comparing what annyang heard (phrase) with the
  // currentPhrase variable
  if (phrase === currentPhrase) {
    // If they said the right thing, we emphasise it...
    // (Note the use of backslash (\) to "escape" the apostrophe in That's
    // so that it doesn't interfere with our string.)
    eightBallPicture.effect('shake');
    // $command.text(`That's right. You are ${phrase}.`);
    // Get a new thing for them to say
    currentPhrase = getNewPhrase();
    // And tell them to say it
    $command.append(` Now say "I am ${currentPhrase}."`);
  }
  else {
    // If they said the wrong thing, correct them and demand
    // they say it.
    $command.text(`That's not right. Say "I am ${currentPhrase}".`);
  }
}


// getNewPhrase()
//
// Returns a random phrase from the abusePhrases array
function getNewPhrase() {
  // Select a random index into the abusePhrases array
  // This little formula of taking the floor of a random
  // number between 0 and 1 times the length of an array
  // gets used all the time.
  let phraseIndex = Math.floor(Math.random() * abusePhrases.length);
  // Get the phrase at that index
  let newPhrase = abusePhrases[phraseIndex];
  // Set the current phrase
  return newPhrase;
}
