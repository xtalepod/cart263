class MySound extends Pizzicato.Sound {
  constructor(dic, mood) {
    super(dic);
    this.mood = mood;
  }

  showMood() {
    console.log(this.mood);
  }
}

// setEffectBasedOnMood(){
//
//
// }
