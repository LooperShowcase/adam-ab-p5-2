let r = 0;
let g = 0;
let b = 0;
function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  translate(width / 2, height / 2);
  background("cyan");
  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  if (frameCount % 10 == 0) {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
  strokeWeight(7);
  stroke(r, b, g);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  stroke("yellow");
  rotate(secondAngle);
  line(0, 0, 150, 0);
  pop();

  stroke("brown");
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 270, 270, 0, minuteAngle);
  push();
  stroke(r, g, b);
  rotate(minuteAngle);
  line(0, 0, 130, 0);
  pop();

  stroke(g, r, b);
  let hourAngle = map(hr % 12, 0, 24, 0, 360) + map(mn, 0, 60, 0, 6);
  arc(0, 0, 240, 240, 0, hourAngle);
  push();
  stroke(r, b, g);
  rotate(hourAngle);
  line(0, 0, 110, 0);
  pop();

  push();
  stroke("black");
  strokeWeight(12);
  point(0, 0);
  pop();

  strokeWeight(1);
  stroke("teal");
  rotate(90);
  textSize(20);

  text("12", 0, -160);
  text("3", 170, 0);
  text("6", 0, 170);
  text("9", -170, 0);
  text("1", 70, -140);
  text("2", 135, -100);
  text("4", 135, 100);
  text("5", 70, 155);
  text("7", -70, 155);
  text("8", -135, 100);
  text("10", -140, -100);
  text("11", -70, -140);

  stroke(r, b, g);
  text(hr + ":" + mn + ":" + sc, 0, 50);
}
