"use strict";

let bark;
let synth;

$(document).ready(setup);

function setup() {

  // Create the synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220,
      attack: 0.2,
      release: 0.9
    }
  });

// bark = new Pizzicato.Sound({
//   source: 'file',
//   options: {
//     path: 'assets/sounds/bark.wav'
//   }
//   });

bark = new MySound('bark',"dark", 2000);


// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#p1").hover(function() {
      bark.play();
      sleep(bark.duration).then(() => {
        bark.stop();
        synth.play();
      });
  }, function() {
    bark.stop();
    synth.stop();
    console.log(bark.mood);
  });


}//endsetup

//   quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
//     lowGain: 0.6,
//     midLowGain: 0.8,
//     midHighGain: 0.5,
//     highGain: 0.6,
//     mix: 1.0
//   });
//   // sound2.addEffect(quadrafuzz)
//   // sound2.play();
//
