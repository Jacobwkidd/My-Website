const SPACE_BAR = 32;
let bird;
let numPipe = 10;
let pipe = [];


function setup(){
    createCanvas(800, 800);
}
function draw(){
    background(0);


 
    if (frameCount % 60 === 0) {
        pipe.push(new Pipepair());
    }
}