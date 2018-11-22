var angle;
var sliderPosition = 0;
var age = 2
var a = 0
//increment
var i = 0 ;
//random
var r;

function setup() {
  frameRate(60);
  createCanvas(600, 500);
  slider = createSlider(0, 1.5, 0, 0.01);
  r = random(0.4, 0.5)
  a = random(-5, 5)
  strokeWeight(age);
}

function draw() {
  background(200);
  angle = slider.value();
  a = slider.value();
  stroke(0);
  translate(300, 500);
  branch(i);
  age = age - 0.01
  if (age < 1) age = 1
//if i is less than 150 it increases by 1 (height increases)
  if (i == 150) i = 150
  else i = i + 0.5
//reset both height and randomise branch number
  if (keyIsPressed){
    r = random(0.4, 0.5);
    i = 1
    a = random(-5, 5)
    slider.value(0)
  }

}
//branch
function branch(len) {
  line(0, 0, 0 , -len);
  translate(0, -len);
  if (len > 4) {
//right side of tree
    push();
    strokeWeight(age)
    rotate(angle);
    branch(len * r);
    pop();
//left side of tree
    push();
    strokeWeight(age)
    rotate(-angle);
    branch(len * r);
    pop();

    push();
    strokeWeight(age)
    rotate(a / 2);
    branch(len * r);
    pop();

    push();
    strokeWeight(age)
    rotate(-a / 2);
    branch(len * r);
    pop();

  }
  //line(0, 0, 0, -len * 0.67);
}
