"use strict";

class MySound extends Pizzicato.Sound {
  constructor(name, loop, source, type, attack, release, frequency) {
    super({
      source: source,
      options: {
        path: 'assets/sounds/' + name + '.wav',
        loop: loop,
        volume: 8,
        type: type, //of wavelength
        attack: attack,
        release: release,
        frequency: frequency
      }
    });
    this.name = name;
  }

  //trying desperately to create synth that play like chords


    // for (let t = 0; t < synth2Freq.length; t ++) {
    //   aSynth2.push(new MySound(synth2, false, 'wave', 'triangle', synth2Freq[t], ATTACK, RELEASE));
    //   }

  // for (let i = 0; i < synthString.length; i++) {
  //   let frequency = [199.3, 299.13];
  //   aSynths.push(new MySound(synthString[i], false, 'wave', 'triangle', frequency, ATTACK, RELEASE));
  // }
  //
  // for (let i = 0; i < synth1Freq.length; i++){
  //   let frequency = synth1Freq.length;
  //   synth1.push(new MySound('synth1', false, 'wave', 'triangle', frequency, ATTACK, RELEASE));
  // }
  //
  // for (let i = 0; i <aSynths.length; i++){
  // }
  //

  //instatiate my synths with their frequency ranges
  //synth 1
    // for (let s = 0; s < synth1Freq.length; s++) {
    //   aSynth1.push(new MySound(synth1, false, 'wave', 'triangle', 440, ATTACK, RELEASE));
    //   }
  //synth 2
  //   for (let t = 0; t < synth2Freq.length; t ++) {
  //     aSynth2.push(new MySound(synth2, false, 'wave', 'triangle', synth2Freq[t], ATTACK, RELEASE));
  //     }
  // //synth 3
  //     for (let u = 0; u < synth3Freq.length; u++) {
  //       aSynth3.push(new MySound(synth3, false, 'wave', 'triangle', synth3Freq[u], ATTACK, RELEASE));
  //     }

// oscillateNote(){
//   setInterval(playSynth, 2000);
// }
  // playNeutralPattern() {
  //   let beat = 0;
  //   let pattern = ["x", "o", "x", "x", "o", "*", "*", ""];
  //
  //   let symbol = pattern[beat];
  //
  //   if (symbol.includes('o')) {
  //     kick.play();
  //   }
  //   if (symbol.includes('x')) {
  //     snare.play();
  //   }
  //   if (symbol.includes('*')) {
  //     hihat.play();
  //   }
  //   beat = (beat + 1) % pattern.length;
  //   }
}
