class Particle {
  constructor(width, θ, r, vθ, vr) {
    this.baseWidth = width;

    this.r = r;
    this.θ = θ;

    this.base_vθ = vθ || 0;
    this.base_vr = vr || 0;

    this.drawCount = 0;

    this.marked = false;
  }

  get x() {
    return this.r * cos(this.θ) + width / 2;
  }

  get y() {
    return this.r * sin(this.θ) + width / 2;
  }

  update() {
    // this.r += this.vr;

    var θDistortion = map(
                          millis() % 6000,
                          0, 6000,
                          0, PI/4 // CHANGE: 0, TWO_PI
                         );

    this.vr = cos(θDistortion) * this.base_vr;
    this.vθ = cos(θDistortion) * this.base_vθ + .001; // CHANGE: 0;
    this.width = /*cos(θDistortion) */this.baseWidth /*+ 3*/; // CHANGE: 0;


    this.r += this.vr;
    this.θ += this.vθ;
  }

  draw() {
    this.update();
    ellipse(this.x, this.y, this.width, this.width);
    this.drawCount++;
  }
}

//------------------------------------------------------------------------------

// CHANGE

var PARTICLE_WIDTH = 8;
var PARTICLE_R = 20;
var PARTICLE_VR = 1;
var PARTICLE_Vθ = .02;
var TRIGGER_NEW_PARTICLE_DISTANCE = PARTICLE_R + PARTICLE_WIDTH*2;

var particleLayers;

function createParticleLayer() {
  var particleLayer = [];

  for(var θ = 0; θ <TWO_PI; θ += PI/6) {
    var particle = new Particle(PARTICLE_WIDTH, θ, PARTICLE_R, PARTICLE_Vθ, PARTICLE_VR);
    particleLayer.push(particle);
  }

  particleLayers.push(particleLayer);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  particleLayers = [];
  createParticleLayer();
}

function draw() {
  clear(); //


  var newestParticle = particleLayers[particleLayers.length-1][0];
  if (newestParticle === undefined || (newestParticle.r > TRIGGER_NEW_PARTICLE_DISTANCE && newestParticle.marked === false)) {
    createParticleLayer();
    if (newestParticle !== undefined) {
        newestParticle.marked = true;
    }
  }

  var lastParticle = particleLayers[0][0];

  for (var i=0; i<particleLayers.length; i++) {
    var particleLayer = particleLayers[i];

    for(var j=0; j<particleLayer.length; j++) {
      var particle = particleLayer[j];

      if (particle !== undefined) {
        if (particle.x < 0 - PARTICLE_WIDTH || particle.x > width + PARTICLE_WIDTH ||
            particle.y < 0 - PARTICLE_WIDTH || particle.y > height + PARTICLE_WIDTH) {
          delete particleLayer[j];
        }
        else {
          particle.draw();
        }
      }
    }
  }
}
