var penbeat = [];

function preload() {
  soundFormats('m4a');
  penbeat[0] = loadSound('penbeat 1.m4a');
  penbeat[1] = loadSound('penbeat 2.m4a');
  penbeat[2] = loadSound('penbeat 3.m4a');
  penbeat[3] = loadSound('penbeat 4.m4a');
  penbeat[4] = loadSound('penbeat 5.m4a');
  penbeat[5] = loadSound('penbeat 6.m4a');

}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(240, 20);
  noStroke();
}

function keyPressed() {
  if (key == '1') {
    penbeat[0].play();

    for (var x0 = 50; x0 < 790; x0 = x0 + 35) {
      for (var y0 = 20; y0 < 150; y0 = y0 + 40) {
        fill(random(60, 230), 190, random(20, 220), 130);
        ellipse(x0, random(20, height - 40), y0)
      }
    }
  }

  if (key == '2') {
    penbeat[1].play();
    var x1 = 40;
    var y1 = 20;

    for (var i = 0; i < 80; i++) {
      fill(random(20, 200), random(60, 120), 200, 130);
      angleMode(DEGREES);
      rotate(random(10, 30));
      triangle(x1 - random(10, 60), y1 * 0.3, x1 - random(50, 100), y1, x1 + random(100, 200), y1 + random(20, 80));
      x1 = random(50, width - 360);
      y1 = random(0, height);
    }
  }

  if (key == '3') {
    penbeat[2].play();
    for (var x3 = 20; x3 <= 790; x3 = x3 + 35) {
      for (var y3 = 10; y3 <= 200; y3 = y3 + 30) {
        fill(200, random(20, 200), random(60, 120), 130);
        angleMode(DEGREES);
        rotate(random(0, 60));
        square(x3, random(10, height - 200), y3);
      }
    }
  }

  if (key == '4') {
    penbeat[3].play();
    for (var x4 = 50; x4 < 750; x4 = x4 + 50) {
      for (var y4 = 10; y4 < 350; y4 = y4 + 30) {
        var k = random(20, 500)
        noFill();
        stroke(200, random(20, 200), random(10, 220), 130);
        strokeWeight(random(2, 5));
        angleMode(DEGREES);
        rotate(random(0, 160));
        curve(x4 + 160, y4, x4 * 1.3, k, x4, k + random(10, 120), x4 + 80, y4 + random(60, 220));
      }
    }
  }

  if (key == '5') {
    penbeat[4].play();
    for (var x5 = 20; x5 < 790; x5 = x5 + 35) {
      for (var y5 = 10; y5 <= 180; y5 = y5 + 30) {
        fill(220, 20, random(40, 220), 130);
        angleMode(DEGREES);
        rotate(random(0, 60));
        rect(x5, random(10, height - 40), y5, y5 * 1.3, 30);
      }
    }
  }

  if (key == '6') {
    penbeat[5].play();
    angleMode(DEGREES);
    for (var x6 = 50; x6 < 790; x6 = x6 + 75) {
      for (var y6 = 10; y6 < 200; y6 = y6 + 30) {
        fill(200, random(20, 200), random(60, 120), 130);
        arc(x6, random(20, height - 40), y6, y6, 0, random(150, 300), CHORD);
      }
    }
  }
}
