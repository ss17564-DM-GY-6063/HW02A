let L = 20; // Declare variable 'img'.
let T = 20;
let canvasW = 400;
let canvasH = 400;
let K = 76;

function setup() {
    createCanvas(600, 600);
    background(255);
   
}

function draw() {
    // the drawing area

    fill(242,212,178);
    strokeWeight(3);
    rect(L, T, canvasW, canvasH) ;

    //the upper trapezoid
    fill(0);
    noStroke();
    quad(L + canvasW/2, T, L + canvasW, T, L+canvasW, T+canvasH/2, L+canvasW/2 -K, T+canvasH/2)
    // the lower pattern mixed with square+triangle
    square(L, T + canvasH/2, canvasH/2);
    triangle(L+canvasW/2, T+canvasH/2, L+canvasW/2, T+canvasH, L+canvasW/2+K, T+canvasH/2);
}
