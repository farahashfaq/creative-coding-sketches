let particles = [];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  fill(20, 20, 20, 40);
  noStroke();
  rect(0, 0, width, height);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    for (let i = 0; i < 2; i++) {
      particles.push(new Particle(mouseX, mouseY));
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x + random(-5, 5);
    this.y = y + random(-5, 5);
    this.alpha = 200;
    this.size = random(10, 25);
    this.col = color(
      random([120, 150, 200]),
      random([60, 80, 100]),
      random([30, 50]),
      this.alpha
    );
  }

  update() {
    this.x += random(-1.5, 1.5);
    this.y += random(-1.5, 1.5);
    this.alpha -= 4;
  }

  display() {
    strokeWeight(1.5);
    stroke(50, this.alpha);
    fill(this.col);
    rect(this.x, this.y, this.size, this.size);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}
