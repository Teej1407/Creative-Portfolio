function setup() {
  createCanvas(400, 400);
}

function draw() {
  //snow scape floor 
  background(220);
  fill(202, 227, 218)
  strokeWeight(0)
  quad(0, 400, 0, 300, 400, 300, 400, 400);//Points should be added in either clockwise or counter-clockwise order.
  strokeWeight(0)

  //sky scape
  fill(68, 187, 219)
  quad(0, 0, 400, 0, 400, 300, 0, 300); //p1,p2,p3,p4
  strokeWeight(0)
  
  //bodys
  fill(252, 252, 252)
  circle(250,300,75)
  circle(250,275,50)
  circle(250,250,40) 
  
  //eyes
  fill(33, 31, 31) 
  circle(255,245,5)
  circle(245,245,5)

  //nose
  fill(227, 115, 59) 
  triangle(250, 250, 230, 260, 250, 255);

  //Buttons
  fill(33, 31, 31)
  circle(250,275,5)
  circle(250,282,5)
  circle(250,289,5)

  //Top Hat
  fill(33, 31, 31) 
  strokeWeight(0)
  square(235, 205, 30);
  strokeWeight(3)
  line(220, 235, 280, 235);

  // tree trunk 1
  fill(66, 51, 49) 
  strokeWeight(0)
  rect(50, 300, 15, 55);

  // tree leafs 1
  fill(79, 99, 70)
  triangle(15, 300, 58, 260, 100, 300);
  triangle(15, 280, 58, 220, 100, 280);
  triangle(15, 260, 58, 200, 100, 260);

  // tree trunk 2
  fill(66, 51, 49) 
  rect(140, 260, 15, 50);

   // leaves 2 
  fill(79, 99, 70)
  triangle(100, 260, 150, 180, 200, 260);//(pL,pT,pR)
  triangle(100, 200, 150, 260, 200, 200);

 

 




  




}

