// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }

var brushSize = 50;
let r, g, b, c, m;


function setup() {
  createCanvas(1400, 700);
  //background(102);
  background('#black');
  describe('canvas with pink background');

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  cursor(ARROW, 50, 50);
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  textSize(30);
  textWrap(WORD);
  text('PRESS ME', 280, 60, 200);
  
  ellipse(300, 500, 500, 500);
  ellipse(500, 500, 300, 300);
  ellipse(800, 300, 400, 400);
  ellipse(950, 400, 350, 350);
  ellipse(1200, 600, 350, 350);
  //(x, y, w, h)



}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    c = random(255);
    m = random(255);
  }
}

