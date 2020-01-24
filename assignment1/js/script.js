"use strict";

/********************************************************************
Pixel painter 2.almost0
christale, adapted from pippin barr's template

move the mouse, watch the colours change, left right left right make those pixels trippy
*********************************************************************/
//declare a global variable called rotation that starts at 0
let rotation = 0;

//to set up the webpage to load, it's set to "call back" in setup
window.addEventListener('load', setup);

//the setup function
//In this section the div elements are added so that we can
function setup() {
//a regular for loop that counts from 0 to 1000 and goes through each pixel
  for (let i = 0; i < 1000; i ++) {
    /*add a DOM function to create a new div and store the div in a pixel variable
    proper syntax note: you need to put div in the brackets here
    */
    let newPixel = document.createElement('div');
    /*add a class attribute to newPixel element using the setAttribute() function
    this allows us "to assign the correct" CSS styling*/
    newPixel.setAttribute('class','pixel');
    let pixelDiv = document.getElementById('pixel');
    //add the new element to the page's body using the body's appendChild()function
    pixelDiv.appendChild(newPixel);
    //add a mouseover event listener to each pixel element that specifies a function called paint
    newPixel.addEventListener('mouseover', paint);

  }
  //add an event listener to the document for keydown that calls a function rotate
  document.addEventListener('keydown', rotate)
}


//define a function called paint with a parameter called 'e'
function paint(e) {
  //create a new variable and store e.target (an event handler) in it
  let pixel = e.target;

  let red = (Math.floor(Math.random()*255));
  let green = (Math.floor(Math.random()*255));
  let blue = (Math.floor(Math.random()*255));

  let colourValue = `rgb(${red},${green},${blue})`;
//set the pixel background colour to the RGB variable by accessing the pixels CSS style property
  pixel.style.backgroundColor = colourValue;
  //always give a function and a delay
  //we are telling it WHICH pixel in the last parameter
  setTimeout(resetPixel,2000, pixel);
}


function rotate(e) {
  console.log(rotation);

  if (e.keyCode === 39) {
    rotation += 1;
  }
  else if (e.keyCode === 37) {
    rotation -= 1;
  }

//this gives us all of the pixels on the page
   let pixels = document.getElementsByClassName('pixel');

   for (let i = 0; i < pixels.length; i ++) {
     pixels[i].style.transform = `rotate(${rotation}deg)`;
   }
}

//resetPixel function is CALLING the pixel variable created in function
//paint so we need to write it in parenthesis
function resetPixel(pixel) {
pixel.style.backgroundColor = 'white';
}
