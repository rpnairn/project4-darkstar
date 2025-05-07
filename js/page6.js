var font, star;
var starX = -100;
var textAlpha = 0;

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  star = loadImage('../img/DSL2.png');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(40);
}

function draw() {
  background(0);

  //logo flying
  image(star, starX, height / 4, 300, 150);
  starX += 5;

  // the end reveal
  if (starX > width / 2) {
    textAlpha = min(textAlpha + 5, 255);
    fill(255, textAlpha);
    text("The End", width / 2, height / 2);
  }

  fill(255);
  triangle(width - 50, height - 35, width - 50, height - 25, width - 30, height - 30);
}

function mousePressed() {

  if (mouseX > width - 60 && mouseY > height - 50) {
    window.location.href = "index.html";
  }
}
