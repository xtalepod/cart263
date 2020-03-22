class MySound extends Pizzicato.Sound {
  constructor(name, mood, duration) {
    super({
      source: 'file',
      options: {
        path: 'assets/sounds/'+ name +'.wav',
        loop: true
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

// setEffectBasedOnMood(){
//
//
// }
