let x, y;
let textColor;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  textAlign(CENTER, CENTER);
  textSize(48);
  textFont('Courier New'); 
  textColor = color(0);

  for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  setRetroGradient();

  for (let p of particles) {
    p.update();
    p.display();
  }
  
  for (let i = 5; i > 0; i--) {
    fill(255, 0, 255, 25);
    text("Ayrton Senna", x + random(-1, 1), y + random(-1, 1));
  }

  
  if (
    mouseX > x - textWidth("Ayrton Senna") / 2 &&
    mouseX < x + textWidth("Ayrton Senna") / 2 &&
    mouseY > y - 32 &&
    mouseY < y + 32
  ) {
    textColor = color(205, 25, 0); // bright yellow
  } else {
    textColor = color(0, 255, 25); 
  }

  fill(textColor);
  text("Ayrton Senna", x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setRetroGradient() {
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(75, 0, 130), color(0, 0, 50), inter);
    stroke(c);
    line(0, i, width, i);
  }
}
class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(2, 4);
    this.speed = random(0.5, 1.5);
    this.col = color(random([255, 0]), random([255, 255]), random([0, 255]), 150);
  }

  update() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  display() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diameter);
  }
}
