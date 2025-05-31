let isBlinking = false;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  background(20);

  if (frameCount % 60 === 0) {
    isBlinking = !isBlinking;
  }

  // Body
  fill(0, 255, 100);
  ellipse(200, 250, 100, 140);

  // Head
  ellipse(200, 150, 70, 100); 

  // Eyes
  if (!isBlinking) {
    fill(25); 
    ellipse(185, 145, 20, 30); // Left eye
    ellipse(215, 145, 20, 30); // Right eye

    fill(0); // Pupils
    ellipse(185, 145, 10, 15); // Left pupil
    ellipse(215, 145, 10, 15); // Right pupil
  } else {
    // Closed eyes
    fill(25);
    rect(175, 145, 20, 3, 2); // Left eyelid
    rect(205, 145, 20, 3, 2); // Right eyelid
  }

  // Antennae
  stroke(0, 255, 100);
  strokeWeight(5);
  line(185, 110, 170, 84);
  line(215, 110, 230, 84);

  noStroke();
  fill(255, 0, 25); 
  ellipse(170, 80, 10, 10);
  ellipse(230, 80, 10, 10);

  // Arms
  fill(0, 255, 100);
  ellipse(140, 250, 30, 80); // Left arm
  ellipse(260, 250, 30, 80); // Right arm

  // Feet
  ellipse(180, 330, 30, 40); // Left foot
  ellipse(220, 330, 30, 40); // Right foot
}
