"use strict";

class Sound extends Pizzicato.Sound {
  constructor(name, loop, volume) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/' + name + '.wav',
        loop: loop,
        volume: volume,
      }
    });
    this.name = name;
  }
}
