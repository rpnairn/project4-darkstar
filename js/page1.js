var font, bg, star;
var starX = -100;
var bgAlpha = 0;
var textAlpha = 0;
var delayTime = 0;
var nextAlpha = 0;

var lyrics = [
  "Dark star crashes",
  "pouring its light into ashes"
];

var positions = [];

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  bg = loadImage('../img/PurpleDesign.jpg');
  star = loadImage('../img/DSL2.png');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(36);

  for (var i = 0; i < lyrics.length; i++) {
    positions.push({ x: width / 2, y: -50 + i * 70 });
  }
}

function draw() {
  background(0);

  if (starX < width + 100) {
    image(star, starX, height / 4, 300, 165);
    starX += 5;
  } else {
    delayTime += 1;

    bgAlpha = min(bgAlpha + 3, 255);
    tint(255, bgAlpha);
    image(bg, -90, 0, 765, 420);
    noTint();

    if (delayTime > 60) {
      textAlpha = min(textAlpha + 2, 255);
      fill(255, textAlpha);

      for (var i = 0; i < lyrics.length; i++) {
        var p = positions[i];
        if (!mouseIsPressed) p.y += 0.5;
        text(lyrics[i], p.x, p.y);
      }

      if (positions[1].y > height / 2 + 80) {
        nextAlpha = min(nextAlpha + 3, 255);
        fill(0, nextAlpha);
        ellipse(width / 2, height / 2, 70);
        fill(255, nextAlpha);
        textSize(18);
        text("Next", width / 2, height / 2);
        textSize(36);
      }
    }
  }
}

function mousePressed() {
  if (nextAlpha >= 255) {
    if (dist(mouseX, mouseY, width / 2, height / 2) < 35) {
      window.location.href = "page2.html";
    }
  }
}



