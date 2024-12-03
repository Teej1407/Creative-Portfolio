let size = 50;
let x;
let y; 
let myFill = 255;

function setup() {
  createCanvas(400, 400); // canvas width/height
  x=width = 240;
  y=height= 360;

}

function draw(){
  background(100); // Make background grey

  fill(myFill);
  text('Find the correct area and make shapes red!!!',50,50)
  ellipse(25, 25, size); // x, y, size
  ellipse(375, 25, size);
  rect(100, 200,50);
  triangle(15, 300, 58, 260, 100, 300);
  triangle(300, 150, 58, 260, 100, 300);
  ellipse(300, 289, 78);
  ellipse(300, 289, 20);
  ellipse(300, 289, 10);

  fill(150)
  ellipse(mouseX, mouseY, size); // x, y, size
  
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){
    myFill = [255, 45, 0];
  }else{
    myFill = 255;
  }

 
}