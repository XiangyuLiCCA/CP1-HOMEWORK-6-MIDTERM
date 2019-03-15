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
  background(230, 80);
}

function keyPressed() {
  if (key == '1') {
    penbeat[0].play();
    stroke(230);
    bezier(250, 250, 40, 100, 100, 0, 100, 0, 0, 0, 100, 0);
  }
  if (key == '2') {
    penbeat[1].play();
    triangle(30, 75, 58, 20, 86, 75);
  }
  if (key == '3') {
    penbeat[2].play();
  }
  if (key == '4') {
    penbeat[3].play();
    stroke(0);
    curve(5, 26, 73, 24, 73, 61, 15, 65);
  }
  if (key == '5') {
    penbeat[4].play();
  }
  if (key == '6') {
    penbeat[5].play();
  }

}
