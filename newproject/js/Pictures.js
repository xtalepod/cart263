class Pictures {
constructor (x, y, size, color) {

this.x = x;
this.y = y;
this.size = size;
this.color = color;
this.element = $('<div>');
$(this.element).css("width",80);
$(this.element).css("height",80);
$(this.element).css("background", this.color);
$('#pictures').append(this.element);
$(this.element).css("position","absolute");
$(this.element).css("left",this.x)
$(this.element).css("top",this.y)
}
}
