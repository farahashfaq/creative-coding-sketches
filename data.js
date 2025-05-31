let artists = [
  "CAS", "Arctic Monkeys", "Lana", "Weeknd", "Havi",
  "SZA", "Radiohead", "Sia", "Doja", "Selena Gomez"
];
let values = [98, 90, 85, 70, 75, 65, 60, 78, 68, 72];
let barColors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#3D3205');
  generatePastelColors();
}

function draw() {
  drawBarChart();
  noLoop(); 
}

function generatePastelColors() {
  for (let i = 0; i < artists.length; i++) {
    let r = random(150, 255);
    let g = random(150, 255);
    let b = random(150, 255);
    barColors.push(color(r, g, b));
  }
}

function drawBarChart() {
  let barWidth = (width - 100) / artists.length - 10;
  let startX = 50;
  let startY = height - 50;
  let cornerRadius = 12;

  // Title
  fill(700);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Favorite Music Artists", width / 2, 40);

  for (let i = 0; i < artists.length; i++) {
    let barHeight = map(values[i], 0, 100, 0, height - 150);

    fill(10);
    rect(startX + i * (barWidth + 10) + 5, startY - barHeight + 5, barWidth, barHeight, cornerRadius);

    fill(barColors[i]);
    noStroke();
    rect(startX + i * (barWidth + 10), startY - barHeight, barWidth, barHeight, cornerRadius);

    fill(300);
    textSize(12);
    textAlign(CENTER);
    text(artists[i], startX + i * (barWidth + 10) + barWidth / 2, startY + 20);

    textSize(14);
    text(values[i] + "%", startX + i * (barWidth + 10) + barWidth / 2, startY - barHeight - 10);
  }
}
