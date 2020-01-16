var BREDDE = 800;   //Bredden af canvasset
var HOJDE = 500;    //Højden af canvasset

var TYNGDE_KRAFT_JORDEN = 9.82;     //Fortæller jordens tyngdeacceleration
var Luft_rho = 1.225;   //Angiver aftagelsen af hastigheden når genstanden bevæger sig
var strsK = 10
var N_genstand = 0;
var N_vind = 0;
var timelapsed = 0;
var distance = 0; //distance 
var acc = TYNGDE_KRAFT_JORDEN; //acceleration
var v = 0;
var Cd = 1.75

var masse = 100;

var radius = 5.5;

var A = 3.1415 * (radius*radius);

var K = Cd*A*Luft_rho*0.5;

var D = 0
    var D = K*(v*v);

var W = 0
    var W = masse*acc;


let slider;

function setup() {
    frameRate(30);
    createCanvas(BREDDE, HOJDE);
    slider = createSlider(10, 500, 200);
    slider.position(50, 500);
    slider.style('width', '350px');

}

function draw(){
    background(200);
    ellipse(BREDDE/2, HOJDE/2, masse/4, masse/4);
    
    //Slider
    let m = slider.value();
    masse = (m);

    //Stregerne
    let x = color('grey');      
    fill(x);
    noStroke();
    rect(350, (250-M4A1/8), 5, v/strsK *-1);
    rect(375, (245-M4A1/8), 5, v/strsK *-1);
    rect(400, (240-M4A1/8), 5, v/strsK *-1);
    rect(425, (245-M4A1/8), 5, v/strsK *-1);
    rect(450, (250-M4A1/8), 5, v/strsK*-1)

    textSize(15);
    fill('black');
    text("Massse = " + masse, 175, 420);
    

    var D = K*(v*v);

    var W = masse*acc;

    if (D>W) {
        D=W
    }

    v=sqrt((2*(W)/(Cd*radius*A)));

    distance = timelapsed * v;

    timelapsed = timelapsed + 0.0333333;


    /*    
    N = genstand.m_bold * acc//(TYNGDE_KRAFT_JORDEN/timelapsed^2)
    
    //d=1/2*TYNGDE_KRAFT_JORDEN*(timelapsed*timelapsed)
    v = v + 1;
    

    fill(0, 100, 200)

   


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
    //v=sqrt((2*masse.m_bold)/(Cd*radius.r_para*A))
    //v=g*t
       var deciv = v.toFixed(2);
*/


    var deciTL = timelapsed.toFixed(2);
    var deciW = W.toFixed(2);
    var deciDist = distance.toFixed(2);
    var deciv = v.toFixed(2);
    var deciacc = acc.toFixed(2);
    var deciM = D.toFixed(2);
    var deciF = W-D.toFixed(2);


    textSize(23);
    text("Tid gået = " + deciTL, 50, 200);
    text(" > Nedad Kraft = " + deciW, 50, 100);
    text("Distance = " + deciDist, 50, 250);
    text("Hastighed = " + deciv, 50, 300);
    text("Acceleration = " + deciacc, 50, 350);
    text(" > Modstand = -" + deciM, 50, 125);
    text("Samlet Kraft = " + deciF, 50, 75);    

    fill(0, 100, 200);

}