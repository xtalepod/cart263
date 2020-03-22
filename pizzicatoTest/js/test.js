"use strict";
// ****************************************************
// testing things out trying to be brave with code and have fun. feeling like i suck and have lost all motivation though and am letting myself down...

let sound;
let myNewSound;
let sound2;

$(document).ready(setup);

function setup() {

  let waveDic = {
    source: 'wave',
    options: {
      type: 'sawtooth',
      frequency: 450,
      attack: 200,
      release: 0
    }
  };

  myNewSound = new MySound(waveDic, "dark");
  myNewSound.showMood();
  console.log(myNewSound.mood)
  myNewSound.release = 1000;
  myNewSound.play();
  myNewSound.stop();
  console.log(myNewSound.release);

  sound2 = new MySound({
    source: 'wave'
  }, "light")
  console.log(sound2.frequency);
  //
  // sound = new Pizzicato.Sound({
  //   source: 'wave',
  //   options: {
  //     type: 'sawtooth',
  //     frequency: 450,
  //     attack: 200,
  //     release: 0
  //   }
  // });
  //
  // $("#p1").hover(function() {
  //   sound.play();
  //     console.log("hover");
  // }, function() {
  //   sound.stop();
  //   console.log("hi");
  // });
}
