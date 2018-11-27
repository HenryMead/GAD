var size;

var x, y;
var colour = [];
colour[0] = random(255);
colour[1] = random(255);
colour[2] = random(255);

function setup(){
  createCanvas(600, 600);
  frameRate(30);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw(){
  x = random(600);
  y = random(600);
  size = random(50, 200);
  colour = random(0, 255, 255)
  customShape();

}

function customShape(){
  fill(colour[0], colour[1], colour[2]);
  stroke(colour);
  strokeWeight(5);
  ellipse(x, y, size, size);

  fill(255, 0, 255);
  stroke(255);
  ellipse(x, y, size/1.2, size/1.2);
}
