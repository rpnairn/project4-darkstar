var font, bg;
var lightRadius = 100;
var textAlpha = 0;
var arrowAlpha = 0;
var textRevealed = false;
var hoverOffset = 0;

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  bg = loadImage('../img/PurpleDesign.jpg');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(32);
  noCursor();
}

function draw() {
  background(0);

  tint(255, 200);
  image(bg, -90, 0, 765, 420);
  noTint();

  fill(255, 100);
  noStroke();
  ellipse(mouseX, mouseY, lightRadius * 2);

  hoverOffset = sin(frameCount * 0.03) * 3;

  if (mouseX > width / 2 - 150 && mouseX < width / 2 + 150 && 
      mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
    textRevealed = true;
  }

  if (textRevealed) {
    textAlpha = min(textAlpha + 5, 255);
    fill(255, textAlpha);
    text("Searchlight casting for faults", width / 2, height / 2 - 20 + hoverOffset);
    text("in the clouds of delusion", width / 2, height / 2 + 20 + hoverOffset);

    if (textAlpha >= 255) {
      arrowAlpha = min(arrowAlpha + 5, 255);
      fill(255, arrowAlpha);
      drawArrow(width - 40, height - 30, 20);
    }
  }
}

function drawArrow(x, y, size) {
  triangle(x, y - size / 2, x, y + size / 2, x + size, y);
}

function mousePressed() {
  if (dist(mouseX, mouseY, width - 40, height - 30) < 20) {
    window.location.href = "page4.html";
  }
}
