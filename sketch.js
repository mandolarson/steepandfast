let xLoc = 50;
let xSpeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  xLoc = xLoc +xSpeed;
  if(xLoc > width - 50 || xLoc < 50){
    xSpeed = xSpeed * -1;
  }
  background(200, 250, 60);
  noStroke();
  fill(225, 15, 100);
  ellipse(xLoc, height/2, 100, 100);
}
