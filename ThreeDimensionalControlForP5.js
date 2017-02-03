//*******************************************************************
//**                   Three Dimensional Controller                **
//**                            Infin8                             **
//**  Alternatives to Cardboard api for WebApps on mobile devices  **
//*******************************************************************

//instatiates default 3D camera
function ThreeDimensionalCamera() {
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;
    
    this.rotation = createVector(0, 0, 0);
    
    this.posX = 0;
    this.posY = 0;
    this.posZ = 0;
    
    this.position = createVector(0, 0, 0);
    
    
}

//instantiates camera with directions at position (0, 0, 0)
function ThreeDimensionalCamera(rotX, rotY, rotZ) {
    this.rotX = rotX;
    this.rotY = rotY;
    this.rotZ = rotZ;
    
    this.rotation = createVector(0, 0, 0);
}

ThreeDimensionalCamera.prototype.background = function(r, g, b) {
    this.lcam.background(r, g, b);
    this.rcam.background(r, g, b);
};

ThreeDimensionalCamera.prototype.display = function() {
    image(this.lcam, 0, 0);
    image(this.rcam, screenWidth / 2, 0);
}

ThreeDimensionalCamera.prototype.resizeCanvas = function() {
        this.lcam.canvas = createGraphics(windowWidth / 2, windowHeight, WEBGL);
        this.rcam.canvas = createGraphics(windowWidth / 2, windowHeight, WEBGL);
}

ThreeDimensionalCamera.prototype.resizeCanvas = function(sizeX, sizeY) {
    this.lcam = createGraphics(sizeX/2, sizeY);
    this.rcam = createGraphics(sizeX/2, sizeY);
};

function ThreeDimensionalObject() {
    
}

