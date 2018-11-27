//Henry Mead Creative Coding 27th November 2018

//branch angle
var angle;
//stroke weight decrease
var age = 2
//angle var
var a = 0
//increment
var i = 0 ;
//random
var r;

var auto = 0

function setup() {
  frameRate(60);
  createCanvas(600, 500);
//(range, starting position, increment)
  slider = createSlider(0, 1.5, 0, 0.01);
  r = random(0.4, 0.5)
  a = random(-5, 5)
  strokeWeight(age);
  textSize(32)
  text('Press', 10, 30);
  fill(0)
}

function draw() {
  background(200);
  angle = slider.value();
  a = slider.value();
  stroke(0);
  translate(300, 500);
  branch(i);
//stroke decreases as the tree grows
  age = age - 0.01
  if (age < 1) age = 1

//if i is less than 150 it increases by 1 (height increases)
  if (i == 150) i = 150
  else i = i + 0.5

//reset both height and randomise branch number
//slider starts back at 0
  if (keyIsPressed){
    r = random(0.4, 0.5);
    i = 1
    a = random(-5, 5)
    slider.value(0)


  }

}
//branch function
function branch(len) {
  line(0, 0, 0 , -len);
  translate(0, -len);
  if (len > 4) {

//left branch
    push();
    strokeWeight(age)
    rotate(angle);
    branch(len * r);
    pop();
//right branch
    push();
    strokeWeight(age)
    rotate(-angle);
    branch(len * r);
    pop();
//middle left
    push();
    strokeWeight(age)
    rotate(a / 2);
    branch(len * r);
    pop();
//middle right branch
    push();
    strokeWeight(age)
    rotate(-a / 2);
    branch(len * r);
    pop();


  }

}
