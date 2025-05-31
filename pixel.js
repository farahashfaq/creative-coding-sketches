var img, x, y;

function preload() {

img = loadImage("HI A LITTLE SURVEY BELOW.jpeg"); 
}

function setup() {
createCanvas (600,700);
background(0);
noStroke();

}

function draw() {
background(0);
  
x = mouseX;
y = mouseY;
  
image( img, 0, 0);

var c = get(x, y);

fill(c);
  
rect (x, y, 100, 100);

}