var BREDDE = 800;   //Bredden af canvasset
var HOJDE = 400;    //Højden af canvasset

var TYNGDE_KRAFT_JORDEN = 9.82;     //Fortæller jordens tyngdekraft
var MODSTAND_JORDEN = 1;   //Angiver aftagelsen af hastigheden når genstanden bevæger sig

var N = 0;
var timelapsed = 0;
var d = 0;
var acc = 0

//d=1/2*g*t^2 
//v=g*t
var genstand = {
    m_bold: 100,
    m_kasse: 0,
    }


function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);


}

function draw(){
    background(200);
    ellipse(BREDDE/2, HOJDE/2, 55, 55);

    
    timelapsed = timelapsed + 0.0333333
    /*
    distancetraveled = timelapsed * 9,8
    
    N = genstand.m_bold * acc//(TYNGDE_KRAFT_JORDEN/timelapsed^2)
    */
    acc = (1/2)*TYNGDE_KRAFT_JORDEN / timelapsed^2
    d=1/2*TYNGDE_KRAFT_JORDEN*timelapsed^2
    v=TYNGDE_KRAFT_JORDEN*timelapsed
    
    textSize(32);
    text("Tid gået = " + timelapsed, 50, 225);
    text("Newton = " + N, 50, 275);
    text("Distance = " + d, 50, 325);
    text("Hastighed = " + v, 50, 375);

    fill(0, 100, 200)

    if ((frameCount %30)==0) print(d);

}
// N = m*a(meter/s^2)