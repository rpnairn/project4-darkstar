var font, bg;
var textAlpha = 0;
var bgAlpha = 0;
var isShattering = false;
var showArrow = false;
var pieces = [];
var textY = 200;

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  bg = loadImage('../img/planetgalaxyfinal.jpg');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(30);
}

function draw() {
  background(0);
  
  bgAlpha = min(bgAlpha + 3, 255);
  tint(255, bgAlpha);
  image(bg, -90, 0, 765, 420);
  noTint();

  var hoverOffset = sin(frameCount * 0.03) * 3;

  //ChatGPT helped in showing how to do shattered look
  if (!isShattering) {
    textAlpha = min(textAlpha + 5, 255);
    fill(255, textAlpha);
    text("Mirror shatters in formless reflections of matter", width / 2, textY + hoverOffset);
  } else {
    for (var i = 0; i < pieces.length; i++) {
      pieces[i].y += pieces[i].speed;
      text(pieces[i].char, pieces[i].x, pieces[i].y);
    }
    showArrow = true; // Show arrow immediately after shatter starts
  }

  // sign copy with some edits
  fill(150, 100);
  ellipse(width / 2, height - 30, 120, 30);
  fill(255);
  textSize(16);
  text("Click to Shatter", width / 2, height - 30);

  if (showArrow) {
    fill(255);
    drawArrow(width - 40, height - 30, 20);
  }
}

function drawArrow(x, y, size) {
  triangle(x, y - size / 2, x, y + size / 2, x + size, y);
}

function mousePressed() {
  if (!isShattering) {
    isShattering = true;
    pieces = [];
    var txt = "Mirror shatters in formless reflections of matter";
    var xStart = width / 2 - textWidth(txt) / 2;

    for (var i = 0; i < txt.length; i++) {
      pieces.push({
        char: txt[i],
        x: xStart + textWidth(txt[i]) * i,
        y: textY,
        speed: random(1, 3)
      });
    }
  }

  if (showArrow && dist(mouseX, mouseY, width - 40, height - 30) < 20) {
    window.location.href = "page6.html";
  }
}
