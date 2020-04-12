"use strict";

class MySound extends Pizzicato.Sound {
  constructor(name, volume) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/' + name + '.wav',
        loop: false
      }
    });
    this.name = name;
    this.volume = volume;

  }

playNeutralPattern() {
  let beat = 0;
  let pattern = ["x", "o", "x", "x", "o", "*", "*", ""];

  let symbol = pattern[beat];

  if (symbol.includes('o')) {
    kick.play();
  }
  if (symbol.includes('x')) {
    snare.play();
  }
  if (symbol.includes('*')) {
    hihat.play();
  }
  beat = (beat + 1) % pattern.length;
  }
}
