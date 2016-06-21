class Point {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color || '#000000';
  }

  calcDistFrom(otherPoint) {
    var thisPoint = this;

    var dist = sqrt(
                    sq(thisPoint.x - otherPoint.x) + sq(thisPoint.y - otherPoint.y)
                   )
    return dist;
  }

  draw() {
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 1, 1);
    pop();
  }
}
