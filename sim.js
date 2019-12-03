var BREDDE = 800;   //Bredden af canvasset
var HOJDE = 400;    //Højden af canvasset

var TYNGDE_KRAFT_JORDEN = 9.82;     //Fortæller jordens tyngdekraft
var Luft_rho = 1.225;   //Angiver aftagelsen af hastigheden når genstanden bevæger sig
var Drag = 18*10^-6;

var N_genstand = 0;
var N_vind = 0;
var timelapsed = 0;
var d = 0;
var acc = TYNGDE_KRAFT_JORDEN;
var v = 0;


var masse = {
    m_bold: 100,
    m_kasse: 0,
    }

var areal = {
    A_faldskærm: 10,
    A_bold: 0.5,
    A_kasse: 0,

}



function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);


}

function draw(){
    background(200);
    ellipse(BREDDE/2, HOJDE/2, 55, 55);

    
    timelapsed = timelapsed + 1/30;


    N_genstand = masse.m_bold * acc;
        //N=m*a
    d=1/2*(TYNGDE_KRAFT_JORDEN-0)*(timelapsed*timelapsed);
        //d=1/2*g*t^2 
    v=TYNGDE_KRAFT_JORDEN*timelapsed;
        //v=g*t
    N_v=1/2*Luft_rho*(areal.A_bold+areal.A_faldskærm)*(v*v)*Drag; //fix
        //N_v=1/2*rho*A*v^2*C_d(Drag coefficient)
    

    textSize(32);
    text("Tid gået = " + timelapsed, 50, 175);
    text("Newton = " + N_genstand, 50, 225);
    text("Distance = " + d, 50, 275);
    text("Hastighed = " + v, 50, 325);
    text("Acceleration = " + acc, 50, 375);
    text("Modstand = " + N_v, 50, 125);

    fill(0, 100, 200);

    if ((frameCount %30)==0) print(d);

}