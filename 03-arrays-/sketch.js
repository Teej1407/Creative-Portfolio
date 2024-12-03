let rectX =  [0, 150, 250, 300];   // save y coords
let rectY =  [0, 15, 300,  200] ;   // save y coords
let speeds = [3, 2, 5.5,  8]   ; 
let fills =  [5, 88, 200,  250]   ;  
let speed = 0.5; 

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  for (let i = 1; i <2; i++) {         //i < 2; = the amount of objects
    rectX[i] = random(0, 400)
    rectY[i] = random(0, 400)
    speeds[i] = random(0.5, 6);
    fills[i] = 255; 
  }
}

function draw() {
  background(50);
  fill(255);

  for (let i = 0; i < rectY.length; i++) {
    let x = rectX[i]; 
    let y = rectY[i]+speeds[i]; 
    rect(x, y,175, 50);               //TOP OF T //175=with & 50=Hight
    circle(x+0, y+150, 50, 75);   //0in the T
    circle(x+0, y+100, 50, 75);
    circle(x+0, y+50, 50, 75); 
    circle(x+0, y+0, 50, 75);         // +.. off of the rectange pos
    // Wrap movement 
    if(y>=height){
      y = 0;
    } 
    fill(fills[i]);
    rectY[i] = y; 
  }
}