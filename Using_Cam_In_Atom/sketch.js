//this is an experimentation for the 27th Nov assignment
//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects
var video
//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(515,360);
  background(50);
  video = createCapture(VIDEO);
  video.size(515, 360)
}

//Rendering function
function draw() {
  image(video, 0, 0)

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
