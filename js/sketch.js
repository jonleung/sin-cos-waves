function setup() {
  createCanvas(windowWidth, windowHeight);
}

var NUM_VERTICL = 20;
var ELLIPSE_WIDTH = 30;
var ELLIPSE_MARGIN = 20;

function draw() {
  for(var i=0; i<NUM_VERTICL; i++) {
    var x = width/2;
    var y = i * (ELLIPSE_WIDTH + ELLIPSE_MARGIN) + ELLIPSE_WIDTH + ELLIPSE_MARGIN;
    ellipse(x, y, ELLIPSE_WIDTH, ELLIPSE_WIDTH);
  }
}
