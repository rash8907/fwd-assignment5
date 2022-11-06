// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }

var brushSize = 50;

function setup() {
  createCanvas(710, 400);
  background(102);
  background('#fae');
  describe('canvas with pink background');
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  cursor(ARROW, 50, 50);
}
