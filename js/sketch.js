class Particle {
  constructor(width, θ, r, vθ, vr) {
    this.width = width;

    this.r = r;
    this.θ = θ;

    this.vθ = vθ || 0;
    this.vr = vr || 0;
  }

  get x() {
    return this.r * cos(this.θ) + width / 2;
  }

  get y() {
    return this.r * sin(this.θ) + width / 2;
  }

  update() {
    this.r += this.vr;
    this.θ += this.vθ;
  }

  draw() {
    this.update();
    ellipse(this.x, this.y, this.width, this.width);
  }
}

//------------------------------------------------------------------------------

var PARTICLE_WIDTH = 30;
var PARTICLE_R = 100;

var particles;

function setup() {
  createCanvas(windowWidth, windowHeight);

  particles = [];

  for(var θ = 0; θ <TWO_PI; θ += PI/6) {
    var particle = new Particle(PARTICLE_WIDTH, θ, PARTICLE_R, 1, 1);
    particles.push(particle);
  }
}


function draw() {
  clear(); //
  particles.forEach(function(particle) {
    particle.draw();
  })
}
