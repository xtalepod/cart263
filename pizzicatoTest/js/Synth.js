"use strict";

class Synth extends Pizzicato.Sound {
  constructor(type, frequency, volume, attack, release) {
    super({
      source: 'wave',
      options: {
        loop: true,
        volume: volume,
        type: type, //of wavelength
        attack: attack,
        release: release,
        frequency: frequency
        // detached: false
      }
    });
    // console.log(Synth.type);
  }
}
