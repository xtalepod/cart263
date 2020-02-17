"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let circles = [];
let score = 0;


window.onload = setup;

function setup() {

let $score = $('<div></div>');
$score.addClass('scoreClass');
$score.text(score);
$('body').append($score);

  for (let i = 0; i < 30; i ++) {
    let x = Math.random() * 100;
    let y = Math.random() * 250;
    let speed = Math.random() * 15;
    circles.push(new Circle(x,y,20,speed,100,'#ff0000'));
  }
requestAnimationFrame(animationLoop);
}


function animationLoop() {
  for (let i = 0; i < circles.length; i ++) {
    circles[i].update();
    circles[i].checkBoundaries();
    circles[i].changeColor();
    $('.scoreClass').text(score);
    if (circles[i].x < 500) {
      score += 1;
      // console.log(score);
    }
  }
  requestAnimationFrame(animationLoop);
}
