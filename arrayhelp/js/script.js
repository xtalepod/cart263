"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let a = 9;
let b = a;


let DO_FOR_LOOP = false;

let aString = ['first', 'second', 'third', 'frouth', 'fifth', 'sixth'];
let aNum = [4, 16, 23, 82, 0, 1];
let max = aString.length;
// let max = 5;
// let min = 2;
let min = 0;
let incr = 1;

let array = [];
let aFileNames = [];
let devilArray = [];

$(document).ready(setup);

function setup() {

  console.log("a:", a, "b", b);
  a += 2;
  console.log("a:", a, "b", b);
  b = b + a;
  a = b*a+66;

  let c = a/b;
  // b += a ;
  console.log("a:", a, "b:", b, "c:", c, "a-b:", a-b, "a*b:", a*b, "a+b:", a+b);

DO_FOR_LOOP = (DO_FOR_LOOP | (a == 886) );

  if(DO_FOR_LOOP){

  console.log("entering the for loop", array);

  // for (let i = min; i < max; i = i + incr) {
  for (let i = max-1; i >= min; i = i - incr) {

    let output = aNum[i] * 6;
    array.push(output);

    let filename = aString[i] + "_" + aNum[i].toString() + ".wav";
    aFileNames.push(filename);

    console.log("i:", i, "string:", aString[i], "(666 times", aNum[i], ") output:", output, "array:", array, "length:", array.length);

    let devil = "";
    for (let k = 0; k < 3; k++) {
        devil += "6";
        if(i == min){
              console.log("devil", devil)
              if(devil === "666"){
                  console.log("DEVIL DONE");
                }
        }
    }
    devilArray.push(devil);
  }
  console.log("leaving the for loop", array, "final length:", array.length);
  console.log("aFileNames", aFileNames);
  console.log("devilArray", devilArray);

 }
}
