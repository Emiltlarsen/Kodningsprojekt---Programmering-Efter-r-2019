var BREDDE = 800;   //Bredden af canvasset
var HOJDE = 400;    //Højden af canvasset

var TYNGDE_KRAFT_JORDEN = 9.8 * 1^2;     //Fortæller hvor hurtigt genstanden skal falde
var MODSTAND_JORDEN = 1;   //Angiver aftagelsen af hastigheden når genstanden bevæger sig

var N = 0;
var timelapsed = 0;
var distancetraveled = 0;
var acc = distancetraveled / timelapsed^2

var genstand = {
    m_bold: 100,

    }


function setup() {
    frameRate(30);
    createCanvas(500, 400);


}

function draw(){
    background(200);
    ellipse(56, 46, 55, 55);

    timelapsed = timelapsed + deltaTime/1000
    distancetraveled = timelapsed * 9,8
    
    N = genstand.m_bold * (TYNGDE_KRAFT_JORDEN/deltaTime^2)

    textSize(32);
    text("Newton = " + N, 50, 350);
    fill(0, 100, 200)

    if ((frameCount %30)==0) print(distancetraveled);

}
// N = m*a(meter/s^2)