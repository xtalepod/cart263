"use strict";

class MySound extends Pizzicato.Sound {
  constructor(name, volume) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/'+ name +'.wav',
        loop: false
      }
      });
      this.name = name;
      this.volume = volume;

  }
}

//   getEffect(mood){
//
//     //takes a mood as an input
//     if (mood === "dark") {
//       return darkEffect;
//       // myWordsArray[j].sound.addEffect(darkEffect);//affectMood();
//       console.log(mood, "the mood")
//     }
//       else if (mood === "light") {
//       return lightEffect
//       }
//       else {
//         return 0;
//       }
//       // else if (myWordsArray[j].mood === "neutral") {
//       //   score = 0;
//       // }
//
//   }
//
//   changeMood(mood) {
//   //   //needs to take an input which is the new mood
//   //   //first you need to this.mood.removeAffect
//   //   console.log(this.mood);
//   // }
// }

// // https://www.sitepoint.com/delay-sleep-pause-wait/
// sleep(ms) {
//  return new Promise(resolve => setTimeout(resolve, ms));
// }
