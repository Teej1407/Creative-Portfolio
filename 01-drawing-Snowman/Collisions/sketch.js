
let x = 100;
let y = 100;
let size = 30; 
let speed = 2;
let score = 0;

function setup(){
	createCanvas(500, 500);
	background(255);
}

function draw(){
  background(200);
	fill(235, 55, 52);
	ellipse(mouseX, mouseY, size,);

   // Move the circle
   fill(0,255,0);
   shapes();
   y = y % width;
   y+=speed;
}

// I struggled to undertyand tnhisd
function shapes(){
  circle(x, y, size);
  circle(x+5, y, size);
  circle(x+10, y, size);
}
 


