
function setup() {
  createCanvas(500, 500);
  background(200)
}

function draw() {
  if (keyIsPressed === true) {
    fill(50);
  } else {
    fill(200);
  }
  rect(25, 25, 100, 200);
}
