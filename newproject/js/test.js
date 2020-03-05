"use strict";
//

let voice = 'UK English Male';

// The parameters for the voice in an object
let voiceParameters = {
  pitch: 0.6,
  rate: 0.6,
  volume: 1
}
$(document).ready(setup);
//
//
function setup() {
  console.log( $(".image-container"));


// https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
  $(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

  $("#raffy").mouseenter(function() {
   // say() is a function defined below
     say("In this moment of social crisis, where even the most basic assertion that black lives matter is contested, we are drowning in “the facts” of inequality and injustice. Whether it is a new study on criminal justice disparities or another video of police brutality, demanding empirical evidence of systematic wrongdoing can have a kind of perverse quality—as if subjugated people must petition again and again for admission into the category of “human,” for which empathy is rationed andapplications are routinely denied. Ruha Benjamin");
 });

 $("#4chan").mouseenter(function() {
  // say() is a function defined below
    say("okay");
});

}

function say(text) {
  responsiveVoice.speak(text, voice, voiceParameters);
}
