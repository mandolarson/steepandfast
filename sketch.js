function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255); 
  
//right wing
stroke('black');
beginShape();
  vertex(375, 100);
  vertex(570, 160);
  vertex(300, 200);
endShape(CLOSE)
  
//left wing
beginShape();
  vertex(225, 100);
  vertex(30, 160);
  vertex(300, 200);
endShape(CLOSE)  

//staff 
beginShape();
 vertex(270, 80);
 vertex(330, 80);
 vertex(300, 570);
endShape(CLOSE)

//boulder
strokeWeight(2);
fill('white');
ellipse(300, 75, 70, 70);
fill('black');

strokeWeight(9);

//ellipse(400, 77, 60, 60);
//ellipse(440, 77, 13, 13);

}