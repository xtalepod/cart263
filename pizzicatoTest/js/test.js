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
// function setup() {
//
//   let waveDic = {
//     source: 'wave',
//     options: {
//       type: 'sawtooth',
//       frequency: 450,
//       attack: 200,
//       release: 0
//     }
//   };
//
//   myNewSound = new MySound(waveDic, "dark");
//   myNewSound.showMood();
//   console.log(myNewSound.mood)
//   myNewSound.release = 1000;
//   myNewSound.play();
//   myNewSound.stop();
//   console.log(myNewSound.release);
//
//   // sound2 = new Pizzicato.Sound({
//   //   source: 'file',
//   //   options: {
//   //     path: '../assets/sounds/dollyparton.wav'
//   //   }
//   // });
//
//   sound3 = new Pz.Sound('../assets/sounds/bark.wav')
//
// // sound3.play();
//
//   // console.log(sound3.source);
//   console.log("loADED");
//
//       // Sound loaded!
//
//
//   // sound3.play();
//   // sound2 = new MySound('./assets/sounds/dollyparton.wav', "light")
//
//   console.log("played");
//
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
//   //
//   // sound = new Pizzicato.Sound({
//   //   source: 'wave',
//   //   options: {
//   //     type: 'sawtooth',
//   //     frequency: 450,
//   //     attack: 200,
//   //     release: 0
//   //   }
//   // });
//   //
//   // $("#p1").hover(function() {
//   //   sound.play();
//   //     console.log("hover");
//   // }, function() {
//   //   sound.stop();
//   //   console.log("hi");
//   // });
// }
