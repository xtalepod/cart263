"use strict";
//

let voice = 'UK English Male';

// The parameters for the voice in an object
// let voiceParameters  = {
//      pitch: 2,
//      rate: 1,
//      volume: 5
//    };

$(document).ready(setup);
//
//
function setup() {
  console.log( $(".image-container"));

  // $(document).ready(function(){
  //   $("p").click(function(){
  //     alert("The paragraph was clicked.");
  //       speakingParameters("i could say a lot of things");
  //       $("p").hide();
  //   });
  //
  // });

// // https://stackoverflow.com/questions/34767900/jquery-replace-image-on-hover/34768036#34768036
// //this calls the image container class from the HTML file and makes it so that each img src in that class changes (respectively) when the mouse hovers over
  $(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});

//these call the HTML id's of my two image-container class img src objects and use the say function to make them say their own things
  $("#raffy").mouseenter(function() {
   // say() is a function defined below
     speakingParameters("In this moment of social crisis, where even the most basic assertion that black lives matter is contested, we are drowning in “the facts” of inequality and injustice. Whether it is a new study on criminal justice disparities or another video of police brutality, demanding empirical evidence of systematic wrongdoing can have a kind of perverse quality—as if subjugated people must petition again and again for admission into the category of “human,” for which empathy is rationed andapplications are routinely denied. Ruha Benjamin");
 });
 $("#4chan").mouseenter(function() {
  // say() is a function defined below
    speakingParameters("okay");
});

}

// function say(text) {
//   responsiveVoice.speak(text, voice, voiceParameters);
// }

function speakingParameters(text) {
    let randomPitch = Math.random();
    let randomVolume = Math.random();
    let randomRate = Math.random();

  let voiceParameters  = {
     pitch: randomPitch,
     rate: randomRate,
     volume: 5
   };

  responsiveVoice.speak(text, voice, voiceParameters);
}
