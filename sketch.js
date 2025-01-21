function setup() {
  createCanvas(600, 600);
  background(0);
  fill(255);
  noStroke();

  const staffX = width / 2;
  const staffY = height * 0.1;
  const staffSize = width * 0.2;

  translate(staffX, staffY);

  // Staff
  triangle(-(staffSize / 5), 0, staffSize / 3, 0, 0, staffSize * 4);

  // Wing 1
  triangle(staffX, staffY, staffSize, 10, 10, staffSize);

  // Wing 2
  triangle(-staffX, staffY, -staffSize, 10, 10, staffSize);

  // Top of staff
  ellipse(staffX / 1.8, staffY - 78, 80, 80);

  noLoop();
}