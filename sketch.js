var cam;

function setup() {
    console.re.log('remote log test');
    createCanvas(windowWidth, windowHeight)
    cam = new ThreeDimensionalCamera();
    cam.resizeCanvas();
    cam.background(171, 205, 239);
}

function draw() {
    cam.display();
}

function windowResized() {
    cam.resizeCanvas
}

function mousePressed() {
    
}