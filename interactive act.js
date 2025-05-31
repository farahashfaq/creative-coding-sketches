let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(5);
  noCursor();
}

function draw() {
  fill(255, 10);
  noStroke();
  rect(0, 0, width, height);

  if (frameCount % 2 == 0) {
    shapes.push(new Shape(mouseX, mouseY));
  }

  for (let i = shapes.length - 1; i >= 0; i--) {
    shapes[i].update();
    shapes[i].display();
    if (shapes[i].isFinished()) {
      shapes.splice(i, 1);
    }
  }
}

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 60);
    this.angle = random(TWO_PI);
    this.alpha = 255;
    this.color = color(
      random(150, 255),
      random(100, 200),
      random(150, 255),
      this.alpha
    );
  }

  update() {
    this.angle += 0.02;
    this.size += random(-0.5, 1.5);
    this.alpha -= 2;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.size, this.size * 0.5);
    pop();
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
