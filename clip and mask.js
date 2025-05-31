let img;

function preload(){
  
  img = loadImage("HI A LITTLE SURVEY BELOW.jpeg");
}

function setup() {
  createCanvas(800, 800);
  
  background(90, 20, 25);
  
  img.resize(200, 200);
  
  let cnv7 = createGraphics(200, 200);

  cnv7.rect(10, 20, 180, 180, 110);
  
  cnv7.canvas.getContext("2d").clip();
  

  cnv7.image(img, 0, 10);

  image(cnv7, 50, 201); 

  img.resize(300, 300); 
  
  let cnv5 = createGraphics(200, 200);

  cnv5.circle(100, 0, 300); 
  img.mask(cnv5);
  

  image(img, 10, 25);
}
