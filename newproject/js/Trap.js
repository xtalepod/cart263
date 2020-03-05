class Trap {
constructor (x, y, size, color, speed, velocity) {

this.x = x;
this.y = y;
this.size = size;
this.speedX = speed;
this.speedY = speed;
this.velocity = velocity;
this.color = color;
this.element = $('<div>');
$(this.element).css("width",80);
$(this.element).css("height",80);
$(this.element).css("background", this.color);
$('#container').append(this.element);
$(this.element).css("position","absolute");
$(this.element).css("left",this.x)
$(this.element).css("top",this.y)
//


}

// random color background from my digital tears
// function squareFlash() {
//   let r = Math.random()*255;
//   let g = Math.random()*0;
//   let b = Math.random()*199;
//   this.color =  $(this.element).css("background", this.color);
//   body.css("background-color", `rgb(${r},${g},${b})`)
// }

// //
update() {
  this.x = this.x + this.speedX;
  this.y = this.y + this.speedY;
  $(this.element).css("left",this.x)
  $(this.element).css("top",this.y)
}

checkBoundaries() {
  if (this.x < 0 || this.x > 1000) {
    this.speedX = this.speedX * -1
  }
  if (this.y < 0 || this.y > 1000) {
    this.speedY = this.speedY * -1
  }
}

changeColor() {
  if (this.x < 500) {
    this.color = '#000000';
    $(this.element).css("background", this.color);
    // this.score += 2;
  }
  else {
    this.color = '#ffffff';
  $(this.element).css("background", this.color);
}
}
}
