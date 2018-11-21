var angle = 0;
//increment
var i = 10;
//random
var r;

function setup() {
  frameRate(60);
  createCanvas(600, 500);
  slider = createSlider(0, 3, 0, 0.01);
  r = random(0.5, 0.7)
}

function draw() {
  background(50);
  angle = slider.value();
  stroke(255);
  strokeWeight(0.7);
  translate(300, 500);
  branch(i);

  if (i == 150) i = 150
  else i = i+1

  if (keyIsPressed){
    r = random(0.3, 0.7);
    i = 10
  }
}
//branch
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
//right side of tree
    push();
    rotate(angle);
    branch(len * r);
    pop();
//left side of tree
    push();
    rotate(-angle);
    branch(len * r);
    pop();

  }
  //line(0, 0, 0, -len * 0.67);
}
