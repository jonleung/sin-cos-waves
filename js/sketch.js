function setup() {
  createCanvas(windowWidth, windowHeight);
}

var NUM_VERTICAL = 20;
var ELLIPSE_WIDTH = 30;
var ELLIPSE_MARGIN = 20;
var TOTAL_MS = 3000;

function draw() {
  clear(); //

  for(var i=0; i<NUM_VERTICAL; i++) {
    var θ = map(
                (millis()+ i * (TOTAL_MS / NUM_VERTICAL)) % TOTAL_MS,
                 0, 3000,
                 0, TWO_PI
               );
    var x = cos(θ) * width/2.2 + width/2;
    var y = i * (ELLIPSE_WIDTH + ELLIPSE_MARGIN) + ELLIPSE_WIDTH + ELLIPSE_MARGIN;

    ellipse(x, y, ELLIPSE_WIDTH, ELLIPSE_WIDTH);
  }
}
