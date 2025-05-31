let img;

function preload() {
  img = loadImage("HI A LITTLE SURVEY BELOW.jpeg");
}

function setup() {
  createCanvas(800, 800);
  background(0);
  textSize(16);
  fill(255);
  noStroke();
}

function draw() {
  background(0);
  let v = int(map(mouseX, 0, width, 5, 1)); 
  
  let tintVal = map(mouseY, 0, height, 255, 100);
  tint(255, tintVal);
  
  let x = (width - img.width) / 2;
  let y = (height - img.height) / 2;
  image(img, x, y);

  filter(POSTERIZE, v);
  
  noTint();
  fill(25);
}
