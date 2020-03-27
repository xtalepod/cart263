"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload

let frequencies = [
  "110.00",
  "123.47",
  "277.18",
  "311.13",
  "523.25",
  "739.99",
  "830.61"
]

let kick;
let hihat;
let snare;
let synth;


let drumLoop = [
'x', 'o', '*','x', 'x', 'o', '*','x'
];

let currentBeat = 0;

function preload() {

}


// setup()
//
// Description of setup

function setup() {

  let kick = new Pizzicato.Sound('/assets/sounds/kick.wav');
  let hihat = new Pizzicato.Sound('/assets/sounds/hihat.wav');
  let snare = new Pizzicato.Sound('/assets/sounds/snare.wav');

  synth = new Pizzicato.Sound({
  source: 'wave',
  options: {
    type: 'sine', // This is the default anyway
    }
  });
}

function mousePressed() {
playRandomNote();
setInterval(playRandomNote, 500);
setInterval(playDrum,250)
}

function playDrum() {
  let drum = drumLoop[currentBeat];
  if (drum === 'x') {
    kick.play();
  }
  if (drum === 'o') {
    snare.play();
  }

  if (drum === '*') {
    hihat.play();
  }

currentBeat ++;

  if (currentBeat >= drumLoop.length) {
    currentBeat = 0;
  }
}

function playRandomNote() {
    // let randomNote = random(frequencies);
    // the javascript way!!!!!!!!!
    let note = frequencies[Math.floor(Math.random() * frequencies.length)]
    synth.frequency = note;
    synth.play();


}
// draw()
//
// Description of draw()

function draw() {

}
