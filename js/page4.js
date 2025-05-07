var font, galaxy;
var textAlpha1 = 0;
var textAlpha2 = 0;
var textAlpha3 = 0;
var bgAlpha = 0;
var stage = 1;

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  galaxy = loadImage('../img/GalaxyDesign.jpg');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  var hoverOffset = sin(frameCount * 0.03) * 3;

  if (stage === 3) {
    bgAlpha = min(bgAlpha + 3, 255);
    tint(255, bgAlpha);
    image(galaxy, -90, 0, 765, 420);
    noTint();
    
    fill(255, bgAlpha);
    drawArrow(width - 40, height - 30, 20);
  }
  
  //ChatGPT helped show me how I could have them revealed one at a time
  // first line of text
  textAlpha1 = min(textAlpha1 + 5, 255);
  fill(255, textAlpha1);
  textSize(28);
  text("Shall we go, you and I while we can", width / 2, height / 2 - 40 + hoverOffset);

  // second text line
  if (stage >= 2) {
    textAlpha2 = min(textAlpha2 + 5, 255);
    fill(255, textAlpha2);
    text("Through the transitive nightfall of", width / 2, height / 2 + hoverOffset);
  }

  // third text line
  if (stage === 3) {
    textAlpha3 = min(textAlpha3 + 5, 255);
    textSize(32);
    fill(255, textAlpha3);
    text("Diamonds", width / 2, height / 2 + 60 + hoverOffset);
  }

  // sign with instructions
  fill(150, 100);
  noStroke();
  ellipse(width / 2, height - 30, 120, 30);
  fill(255);
  textSize(16);
  text("Click to Reveal", width / 2, height - 30);
}

function drawArrow(x, y, size) {
  triangle(x, y - size / 2, x, y + size / 2, x + size, y);
}

function mousePressed() {
  if (stage < 3) {
    stage++;
  }

  if (stage === 3 && dist(mouseX, mouseY, width - 40, height - 30) < 20) {
    window.location.href = "page5.html";
  }
}
