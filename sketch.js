
var myColor ;
var canvas;
function setup() {
    canvas = createCanvas(window.innerWidth,window.innerHeight);
    canvas.position(0,0);
    canvas.style('z-index','-10');
    noCursor();
}

function draw() {
    myColor = color('#00ffff');
    background(255);
    stroke(myColor);
    noFill();
    rect(mouseX, mouseY, width, height);


}
