"use strict";

class Sound extends Pizzicato.Sound {
  constructor(name, loop, volume) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/' + name + '.wav',
        loop: loop,
        volume: volume,
        // attack: attack,
        // release: release,
      }
    });
    this.name = name;
  }

//i dont think i need these anymore but savnig them so i dont have to retype in case
  //trying desperately to create synth that play like chords
  //my synth objects, i should push they frequencies into a for loop
  // synth = new MySound(synth, false, 'wave', 'triangle', 220, ATTACK, RELEASE);
  // synth1 = new MySound('synth1', true, 'wave', 'triangle', frequency, ATTACK, RELEASE);
  // synth2 = new MySound('synth2', false, 'wave', 'triangle', frequency, ATTACK, RELEASE);
  // synth3 = new MySound('synth3', false, 'wave', 'triangle', frequency, ATTACK, RELEASE);
  // console.log(synth1, "synth1");

  ////this doesnt work because it creates a synth for every freq index
  // for (let i = 0; i < synth1Freq.length; i++){
  //   let frequency = synth1Freq[Math.floor(Math.random() * synth1Freq)];
  //   synth1.push(new MySound('synth1', false, 'wave', 'triangle', frequency, ATTACK, RELEASE));
  // }
  //this doesn't work because its doing the same thing...
    // for (let s = 0; s < synth1Freq.length; s++) {
    //   aSynth1.push(new MySound(synth1, false, 'wave', 'triangle', 440, ATTACK, RELEASE));
    //   }
//this is more useful than the previous because it gives us an output index that is the same as the frequencies for synth1
 // for (let i = 0; i < aSynth1Freq.length; i++){
        //aChord1OutputIndex.push(i);
    //   console.log(aChord1OutputIndex[i]);
    //   console.log(synth1, 'name:', synth1.name);
    // }

    //
    // for ()
    // if (aSynths[0]){
    //   let frequency = aSynth1Freq[Math.floor(Math.random() * aSynth1Freq.length)];
    //
    //   console.log(aSynths[0].frequency, "playSynth");
    // }
    //
    // if (aSynths[1]){
    //   let frequency = aSynth2Freq[Math.floor(Math.random() * aSynth2Freq.length)];
    //   aSynths[1].frequency = frequency;
    //   aSynths[1].play();
    //   console.log(aSynths[1].frequency, "playSynth");
    // }
    //
    // if (aSynths[2]){
    //   let frequency = aSynth3Freq[Math.floor(Math.random() * aSynth3Freq.length)];
    //   aSynths[2].frequency = frequency;
    //   aSynths[2].play();
    //   console.log(aSynths[2].frequency, "playSynth");
    // }


///i thought this was working but it actually isnt. the frequencies arent passing properly

// function pushSynths(){
// for (let i = 0; i < aSynthString.length; i ++){
//   // let frequencies = aFrequencies[Math.floor(Math.random() * aFrequencies.length)]
//   // let frequencies = aFrequencies[i].length
//   // frequency = frequencies;
//   frequency = aFrequencies[Math.floor(Math.random() * aFrequencies.length)];
//   aSynths.frequency = frequency;
//   aSynths.push(new MySound(aSynthString[i], false, 'wave', 'triangle', ATTACK, RELEASE, frequency));
//   aChord1OutputIndex.push(i);
//   // console.log(aChord1OutputIndex);
//   // console.log(aSynthString[i]);
//   console.log(aSynths[i].name);
//   console.log(aSynths[i].frequency, "freq");
// }//end of for loop
// }//end of push pushSynths
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
