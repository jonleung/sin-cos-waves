function setup() {
  createCanvas(windowWidth, windowHeight);
}

var NUM_VERTICAL = 5;
var ELLIPSE_WIDTH = 30;
var ELLIPSE_MARGIN = 20;
var TOTAL_MS = 3000;

function draw() {
  clear(); //

  var RADIUS = 100;

  for(var θ = 0; θ <TWO_PI; θ += PI/6) {
    var x = RADIUS * cos(θ) + width/2;
    var y = RADIUS * sin(θ) + width/2;
    ellipse(x, y, ELLIPSE_WIDTH, ELLIPSE_WIDTH);
  }
}
