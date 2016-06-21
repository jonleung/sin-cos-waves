var drawLabelFunctions = [];

function drawLabels() {
  push();
  fill('white');
  noStroke();
  rect(0, 0, width, 200);
  drawLabelFunctions.forEach(function(drawLabelFunction) {
    drawLabelFunction();
  })
  pop();
}

function createLabeledSlider(x, y, label, a, b, defaultValue, width) {
  if (width === undefined) {
    width = 80;
  }

  var slider = createSlider(a, b, defaultValue);
  slider.position(x, y);
  slider.style('width', width+'px');

  slider.drawLabel = function() {
    push();
    textSize(15);
    fill('black')
    text(slider.value() + ' ' + label, x + width + 10, y + 13);
    pop();
  }

  slider.mouseMoved(function() {
    if(mouseIsPressed) {
      if (sliderChanged) {
        sliderChanged(slider);
      }
    }
  });

  drawLabelFunctions.push(slider.drawLabel);

  return slider;
}

function createLabeledVerticalSlider(x, y, label, a, b, defaultValue, width) {
  var slider = createLabeledSlider(x - width/2, y + width/2, label, a, b, defaultValue, width);
  slider.style('position', 'absolute');
  slider.style('-webkit-transform', 'rotate(90deg)');

  return slider;
}
