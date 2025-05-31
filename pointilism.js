let img;
let spacing = 20;

function preload() {
  img = loadImage("HI A LITTLE SURVEY BELOW.jpeg");
}

function setup() {
  createCanvas(800, 700);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  frameRate(30);
}

function draw() {
  let x = int(random(width / spacing)) * spacing;
  let y = int(random(height / spacing)) * spacing;

  let c = img.get(x, y);
  fill(c[0], c[1], c[2], 100);

  push();
  translate(x, y);
  rotate(random(360));
  rect(0, 0, spacing, spacing / 2);
  pop();
}
