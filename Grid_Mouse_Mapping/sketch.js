let size = 50 ;
let size2 = 30
function setup(){

  createCanvas(503, 503);
frameRate(1)
}

function draw(){
  background(60);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill(255, 50, 80)
      strokeWeight(1)

      rect(size*x, size*y, size, size);

      fill(240);

      console.log(x,y);

      rect(size*x, size*y, size, size);
      fill(random(255),random(255),random(255));
      rect(size*x+12.5, size*y+12.5, size2, size2);


      console.log("x: " + x + ", Y: " + y)
    }
  }
}
