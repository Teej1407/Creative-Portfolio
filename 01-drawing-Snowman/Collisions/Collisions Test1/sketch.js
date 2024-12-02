let size = 50



function setup(){
	createCanvas(500, 500);
	background(255);
}

function draw(){
	noFill();
  let x = mouseX;
  let y = mouseY;
  myShape(x, y);
  //myShape(x+50, y);
  //myShape(x-50, y);
}

function myShape(x, y){
  fill(255, 0, 0);
  ellipse(x, y, 40);
  fill(0, 255, 0);
  rect(x, y, 40, 20);
}
