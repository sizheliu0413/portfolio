var capture;
var canvas;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  image(capture, 320, 0, 320, 240);
  image(capture, 640, 0, 320, 240);
  image(capture, 960, 0, 320, 240);
  image(capture, 1280, 0, 320, 240);
  image(capture, 1600, 0, 320, 240);
  image(capture, 320, 240, 320, 240);
  image(capture, 640, 240, 320, 240);
  image(capture, 960, 240, 320, 240);
  image(capture, 1280, 240, 320, 240);
  image(capture, 1600, 240, 320, 240);
  image(capture, 0, 240, 320, 240);
  image(capture, 0, 480, 320, 240);
  image(capture, 0, 720, 320, 240);
  image(capture, 0, 1200, 320, 240);
  image(capture, 320, 480, 320, 240);
  image(capture, 640, 480, 320, 240);
  image(capture, 960, 480, 320, 240);
  image(capture, 1280, 480, 320, 240);
  image(capture, 320, 720, 320, 240);
  image(capture, 640, 720, 320, 240);
  image(capture, 960, 720, 320, 240);
  image(capture, 1280, 720, 320, 240);
  
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};