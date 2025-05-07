var font, bg;
var textAlpha = 0;
var delayTime = 0;
var isTearing = false;
var showArrow = false;
var arrowAlpha = 0;
var topY, middleY, bottomY;
var hoverOffset = 0;

function preload() {
  font = loadFont('../font/StarVintage-ow80V.ttf');
  bg = loadImage('../img/PurpleDesign.jpg');
}

function setup() {
  createCanvas(600, 400);
  textFont(font);
  textAlign(CENTER, CENTER);

  topY = height / 2 - 40;
  middleY = height / 2;
  bottomY = height / 2 + 40;
}

function draw() {
  background(0);
  delayTime += 1;
  hoverOffset = sin(frameCount * 0.05) * 3;

  var bgAlpha = min(delayTime * 3, 255);
  tint(255, bgAlpha);
  image(bg, -90, 0, 765, 420);
  noTint();

  if (delayTime > 60) {
    textAlpha = min(textAlpha + 2, 255);
    fill(255, textAlpha);

    textSize(36);

    if (!isTearing) {
      text("Reason tatters,", width / 2, topY + hoverOffset);
      text("the forces tear loose", width / 2, middleY + hoverOffset);
      text("from the axis.", width / 2, bottomY + hoverOffset);
    } else {
      // With assistance from ChatGPT for guidance:
      // tearing effect for splitting text apart
      topY -= 2;
      middleY += 1;
      bottomY += 2;

      text("Reason tatters,", width / 2, topY);
      text("the forces tear loose", width / 2, middleY);
      text("from the axis.", width / 2, bottomY);

      if (bottomY > height + 30) {
        showArrow = true;
      }
    }

    var btnX = width / 2;
    var btnY = height - 30;
    var btnWidth = 120;
    var btnHeight = 30;

    fill(150, 100);
    noStroke();
    ellipse(btnX, btnY, btnWidth, btnHeight);

    fill(255, textAlpha);
    textSize(16);
    text("Click to Tear", btnX, btnY);
  }

  if (showArrow) {
    // With assistance from chatGPT for guidance:
    // Creating and fading in the arrow
    arrowAlpha = min(arrowAlpha + 5, 255);
    fill(255, arrowAlpha);
    noStroke();
    drawArrow(width - 40, height - 30, 20);
  }
}

function drawArrow(x, y, size) {
  triangle(x, y - size / 2, x, y + size / 2, x + size, y);
}

function mousePressed() {
  isTearing = true;

  if (showArrow && dist(mouseX, mouseY, width - 40, height - 30) < 20) {
    window.location.href = "page3.html";
  }
}
