"use strict";
// ****************************************************
// testing things out trying to be brave with code and have fun. feeling like i suck and have lost all motivation though and am letting myself down...

let sound;

$(document).ready(setup);

function setup() {

  sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sawtooth',
      frequency: 450,
      attack: 200,
      release: 0
    }
  });

  $("#p1").hover(function() {
    sound.play();
      console.log("hover");
  }, function() {
    sound.stop();
    console.log("hi");
  });
}
