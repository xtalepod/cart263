"use strict";

class MySound extends Pizzicato.Sound {
  constructor(name, mood, duration) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/'+ name +'.wav',
        loop: false
      }
      });
      this.mood = mood;
      this.name = name;
      this.duration = duration;

  }

  showMood() {
    console.log(this.mood);
  }
}

// // https://www.sitepoint.com/delay-sleep-pause-wait/
// sleep(ms) {
//  return new Promise(resolve => setTimeout(resolve, ms));
// }

// setEffectBasedOnMood(){
//
//
// }



// these are the same thing! leaving for mental note //
  // bark = new Pizzicato.Sound({
  //   source: 'file',
  //   options: {
  //     path: 'assets/sounds/bark.wav'
  //   }
  //   });

  // bark = new MySound('bark',"dark", 6000);
  // these are the same thing //
