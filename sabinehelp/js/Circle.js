class Circle {
constructor (x, y, size, speed, velocity, color) {

this.x = x;
this.y = y;
this.size = size;
this.speedX = speed;
this.speedY = speed;
this.velocity = velocity;
this.color = color;
this.element = $('<div>');
$(this.element).css("width",this.size);
$(this.element).css("height",this.size);
$(this.element).css("background", this.color);
$(this.element).css("position","absolute");
$(this.element).css("left",this.x)
$(this.element).css("top",this.y)
$('#container').append(this.element);

}

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
