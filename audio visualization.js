let song;
let fft;
let amp;
let tears = [];
let raindrops = [];

let threshold = 0.15;
let lastBeatTime = 0;
let beatDelay = 250;

function preload() {
  song = loadSound('Cry - Cigarettes After Sex (Instrumental) [LQ9BTIAe9e4].mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  noFill();
  
  for (let i = 0; i < 300; i++) {
    raindrops.push(new RainDrop());
  }

  textAlign(CENTER, CENTER);
  textSize(28);
  fill(255);
  text("Click to Play 'Cry'", width / 2, height / 2);
}

function draw() {
  if (song.isPlaying()) {
    background(10, 10, 30, 60);

    // Draw ambient rain
    for (let drop of raindrops) {
      drop.update();
      drop.display();
    }

    let vol = amp.getLevel();

    if (vol > threshold && millis() - lastBeatTime > beatDelay) {
      let x = width / 2 + random(-100, 100);
      tears.push(new TearDrop(x, 0, map(vol, 0, 1, 20, 80)));
      lastBeatTime = millis();
    }

    for (let i = tears.length - 1; i >= 0; i--) {
      tears[i].update();
      tears[i].display();
      if (tears[i].offscreen()) {
        tears.splice(i, 1);
      }
    }
    noStroke();
    fill(255, 80);
    textSize(34);
    text("Cry", width / 2, 80);
  }
}
class TearDrop {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = 220;
    this.speed = random(2, 4);
  }

  update() {
    this.y += this.speed;
    this.alpha -= 1.5;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(180, 200, 255, this.alpha);
    stroke(255, 180);
    strokeWeight(1);
    beginShape();
    vertex(0, -this.size / 2);
    bezierVertex(this.size / 2, 0, this.size / 2, this.size, 0, this.size);
    bezierVertex(-this.size / 2, this.size, -this.size / 2, 0, 0, -this.size / 2);
    endShape(CLOSE);
    pop();
  }

  offscreen() {
    return this.y > height || this.alpha < 0;
  }
}

class RainDrop {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.len = random(10, 20);
    this.speed = random(2, 5);
    this.alpha = random(50, 120);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(width);
    }
  }

  display() {
    stroke(200, 200, 255, this.alpha);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
