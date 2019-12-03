let clicks=0;
let yPos = 0;


//The setup function only happens once
function setup() {
	createCanvas(545, 545);
    background (220);
    osc1 = new p5.Oscillator(); //creating my oscillators
    osc1.setType('square'); //specifying waveform
    osc1.amp(.5,.5); //set oscillator volume
    osc1.freq(240); // initializing oscillator frequency
    osc1.start(); //start the oscillator audio
     // setup() runs once
  frameRate(1345);

}

//The draw function happens over and over again
function draw() {
  osc1.freq(map(mouseX, 0, width, 100,400));  
  background(254, 254, 219);
// draw() loops forever, until stopped
  background(90, 97, 215);
  yPos = yPos - 2;
  if (yPos < 4) {
    yPos = height;
  }
  line(2, yPos, width, 324);
    //circle
  stroke(226, 202, 251) // an RGB color for the circle's border
  fill(226, 202, 251, 54); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse( mouseX, mouseY, 23, 
          23.5); // center of canvas, 20px dia
    fill( 148, 233, 189)
   triangle(30, 75, 58, 20, 86, 75);   
}
 
function mouseClicked(){ //start audio with user interaction (mouse click)
   clicks++;
    if (clicks%2==0){
        osc1.stop();
    }
    else{
        osc1.start();
    }
}

