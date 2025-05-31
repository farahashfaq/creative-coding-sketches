let stars = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(10, 10, 30); 

  for (let star of stars) {
    fill(255);
    ellipse(star.x, star.y, star.size);
  }
  
  fill(50); 
  rect(0, height - 100, width, 100);

  fill(255, 255, 0);
  for (let x = 0; x < width; x += 40) {
    rect(x, height - 52, 20, 5);
  }

  // Car body
  fill(30, 36, 30); 
  rect(100, height - 130, 200, 50, 20); 

  // Car top 
  fill(0, 11, 35); 
  rect(140, height - 160, 120, 40, 20); 

  // Windows 
  fill(10, 139, 117);
  rect(150, height - 150, 40, 25, 8);
  rect(210, height - 150, 40, 25, 8);

  // Wheels 
  fill(0);
  ellipse(130, height - 80, 30, 30);  // Left wheel
  ellipse(270, height - 80, 30, 30);  // Right wheel

  // Headlights 
  fill(255, 255, 102);
  ellipse(100, height - 105, 10, 10);  // Front left light
  ellipse(300, height - 105, 10, 10);  // Front right light
}
