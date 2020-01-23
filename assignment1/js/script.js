"use strict";

/********************************************************************
Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
//a global variable called rotation that starts at 0
let rotation = 0;

window.addEventListener('load', setup);

function setup() {
  console.log('setup')
//a for loop that runs 1000 times
  for (let i = 0; i < 1000; i ++) {
    //you need to put div in the brackets here
    let newPixel = document.createElement('div');
    newPixel.setAttribute('class','pixel');
    //add a mouseover event listenner to each pixel element
    //'eventListener' goes into quotations and comes first, the function
// follows (here it is paint)
    newPixel.addEventListener('mouseover', paint);
  //add an addEventListener to the document for click that calls a function remove
  // newPixel.addEventListener('click', remove)
    let pixelDiv = document.getElementById('pixel');
    pixelDiv.appendChild(newPixel);
  }
  //add an event listener to the document for keydown that calls a function rotate
  document.addEventListener('keydown', rotate)
}



function paint(e) {
  let pixel = e.target;

  let red = (Math.floor(Math.random()*255));
  let green = (Math.floor(Math.random()*255));
  let blue = (Math.floor(Math.random()*255));

  let colourValue = `rgb(${red},${green},${blue})`;

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
