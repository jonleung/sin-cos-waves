class Line {
  constructor(a, b, color) {
    this.a = a;
    this.b = b;
    this.color = color || '#000000';
  }

  calcLength() {
    return a.calcDistFrom(b);
  }

  calcAngleFrom(otherLine) {
    var thisLine = this;

    var theta1 = atan2(thisLine.a.y - thisLine.b.y, thisLine.a.x - thisLine.b.x);
    var theta2 = atan2(otherLine.a.y - otherLine.b.y, otherLine.a.x - otherLine.b.x);
    var delta = theta1 - theta2
    return delta;
  }

  draw() {
    push();
    stroke(this.color);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    pop();
  }
}
