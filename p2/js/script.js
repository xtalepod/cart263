// "use strict";
//
// /********************************************************************
//
// Title of Project
// Author Name
//
// This is a template. Fill in the title, author, and this description
// to match your project! Write JavaScript to do amazing things below!
//
// https://static1.squarespace.com/static/5bbd85f3809d8e6a1a3c5c9e/t/5bdc1e61032be468ca7594b6/1541152364319/2016-Racial-Fictions-Biological-Facts.pdf
// https://www.theguardian.com/technology/2019/jun/29/ruha-benjamin-we-cant-wait-silicon-valley-become-more-diverse-prejudice-algorithms-data-new-jim-code
// https://www.thejustdatalab.com/resources
//
// *********************************************************************/
//
// // An array for magic 8 ball responses
let magicAnswers = [
  "hazy",
  "outlook not so good",
  "ask again later",
  "yes it is decidely so"
];
// // An array for questions the user can ask the magic 8 ball
let magicQuestions = [
  "climate change real",
  "can we break the glass ceiling",
  "can we abolish the patriarchy",
  "will zombies take over"
];
//
// // A variable to store the current thing the user
// // should be saying. Starts as nothing.
let currentPhrase = '';
// a vraiable to store the current response a user will receive after saying a command
let currentAnswer = '';
// // A variable to store the command text element
let $command;
//A variable to store the answer text element
let $answer;
//a variable to hold the eye
let $eye;

//how often to update the answer selected
const UPDATE_FREQUENCY = 5000;

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
      "eight ball *magicQuestions": handleUserSpeech
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
    $command.text(`Dear tragic eight ball "${currentPhrase}?"`);
  }
  $answer = $('#answer');
  $answer.hide().text(`The Oracle says ${currentAnswer}`);
  // setInterval(updateAnswer, UPDATE_FREQUENCY);

  $("#askagain").click(function() {});
  //get my eye element from the page
  $eye = $('#eye');
  $eye.hide();

};


// handleUserSpeech(phrase)
//
// Called by annyang when it hears a sentence of the form
// "I am X". 'phrase' will contain the X part.
// Checks whether the user said what they were told to say
// and reacts accordingly.
function handleUserSpeech(phrase) {
  console.log(handleUserSpeech);
  // We check whether the user said what they were told to say
  // by comparing what annyang heard (phrase) with the
  // currentPhrase variable
  currentAnswer = getNewAnswer();
  if (phrase === currentPhrase) {
    //if they said the right thing
    $command.text('oh god thats dark')
    currentPhrase = getNewPhrase();
    $eye.fadeIn("slow");
    $eye.effect("shake");
    // And tell them to say it
    // $command.append(`Ask again? "is ${phrase}."`);
    $answer.fadeIn(3000);
    $answer.append(`the answer is ${currentAnswer}.`);
  }
  // else {
  //   // If they said the wrong thing, correct them and demand
  //   // they say it.
  //   $command.text(`That's not right. Say "I am ${currentPhrase}".`);
  // }
  // setInterval(updateAnswer, UPDATE_FREQUENCY);
}


getNewPhrase()

// Returns a random phrase from the magicQuestions array
function getNewPhrase() {
  // Select a random index into the magicQuestions array
  // This little formula of taking the floor of a random
  // number between 0 and 1 times the length of an array
  // gets used all the time.
  let phraseIndex = Math.floor(Math.random() * magicQuestions.length);
  // Get the phrase at that index
  let newPhrase = magicQuestions[phraseIndex];
  // Set the current phrase
  return newPhrase;
}

function getNewAnswer() {

  // if ()
  // Select a random index into the magicQuestions array
  // This little formula of taking the floor of a random
  // number between 0 and 1 times the length of an array
  // gets used all the time.
  let answerIndex = Math.floor(Math.random() * magicAnswers.length);
  // Get the phrase at that index
  let newAnswer = magicAnswers[answerIndex];
  // Set the current phrase
  return newAnswer;
}

// function updateAnswer() {
//
// }
