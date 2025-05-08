let bgColor;

function setup() {
  createCanvas(500, 500);
  bgColor = color(255);
  textFont('Georgia');
  textSize(24);
}

function draw() {
  background(bgColor);

  
  fill(0, 100, 200);
  ellipse(mouseX, mouseY, 50, 50);

  
  fill(50);
  text("Follow me!", mouseX + 10, mouseY - 10);
}


function mousePressed() {
  bgColor = color(random(255), random(255), random(255));

  // Also draw a circle on click
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}