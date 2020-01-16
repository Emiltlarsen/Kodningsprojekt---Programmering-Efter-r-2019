var BREDDE = 800;   //Bredden af canvasset
var HOJDE = 400;    //Højden af canvasset

var TYNGDE_KRAFT_JORDEN = 9.82;     //Fortæller jordens tyngdeacceleration
var Luft_rho = 1.225;   //Angiver aftagelsen af hastigheden når genstanden bevæger sig
var Drag = 0.00018;


var N_genstand = 0;
var N_vind = 0;
var timelapsed = 0;
var d = 0; //distance 
var acc = TYNGDE_KRAFT_JORDEN; //acceleration
var v = 0;
var Cd = 1.36

var masse = {
    m_para: 0,
    m_bold: 100,
    m_kasse: 0,
    }

var radius = {
    r_para: 5.5,
}

var areal = {
    A_para: (5.5*5.5)*3.1415,
    A_bold: 0,
    A_kasse: 0,
}

var A = 3.1415 * (radius.r_para*radius.r_para);

var K = Cd*A*Luft_rho;


F_res = W - D
//@https://www.youtube.com/watch?v=l_tixVH4aTs
function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);


}

function draw(){
    background(200);
    ellipse(BREDDE/2, HOJDE/2, 55, 55);

    var D = K*(v*v);

    var W = (masse.m_para+masse.m_bold)*acc;

    v=sqrt((2*(W-D)/(Cd*radius.r_para*A)));

    if (D>=W) {
        D=W
    }
    /*
    distancetraveled = timelapsed * 9,8
    
    N = genstand.m_bold * acc//(TYNGDE_KRAFT_JORDEN/timelapsed^2)
    
    //d=1/2*TYNGDE_KRAFT_JORDEN*(timelapsed*timelapsed)
    v=TYNGDE_KRAFT_JORDEN*timelapsed
    


    fill(0, 100, 200)

   


    timelapsed = timelapsed + 0.0333333;
        var decitl = timelapsed.toFixed(2);

    N_genstand = masse.m_bold * acc;
    //N=m*a

    N_v= Cd*radius.r_para*v*v*A*0.5
    //
    //vælg oppe eller nede
    ///N_v=1/2*Luft_rho*(areal.A_bold+areal.A_faldskærm)*(v*v)*Drag; //fix
    //N_v=1/2*rho*A*v^2*C_d(Drag coefficient)
        var decimod = N_v.toFixed(2);

    d=1/2*(TYNGDE_KRAFT_JORDEN-N_v)*(timelapsed*timelapsed);
    //d=1/2*g*t^2 
        var decid = d.toFixed(2);

    N_res=TYNGDE_KRAFT_JORDEN-N_v
       var deciNres = N_res.toFixed(2);

    //v=(TYNGDE_KRAFT_JORDEN-N_v)*timelapsed;
    //f(x)=N_res*t
    v=sqrt((2*masse.m_bold)/(Cd*radius.r_para*A))
    //v=g*t
       var deciv = v.toFixed(2);
*/


    
/*
    textSize(23);
    text("Tid gået = " + decitl, 50, 175);
    text("Newton = " + N_genstand, 50, 225);
    text("Distance = " + decid, 50, 275);
    text("Hastighed = " + deciv, 50, 325);
    text("Acceleration = " + acc, 50, 375);
    text("Modstand = " + decimod, 50, 125);
    text("Samlet Newton = " + deciNres, 50, 75);    

    fill(0, 100, 200);
*/

text("D = " + D, 50, 275);
text("Hastighed = " + v, 50, 325);
text("W = " + W, 50, 375);


}