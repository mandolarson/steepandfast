function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  noStroke();  
  
beginShape();
  vertex(280, 100);
  vertex(320, 100);
  vertex(300, 580);
endShape(CLOSE)
  
beginShape();
  vertex(375, 100);
  vertex(590, 160);
  vertex(300, 200);
endShape(CLOSE)
  
beginShape();
  vertex(225, 100);
  vertex(10, 160);
  vertex(300, 200);
endShape(CLOSE)  
  
ellipse(400, 77, 60, 60);  
}