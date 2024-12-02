
let i = 0;

// Text obtained from  UK Government website 
const housingText = " S A V E T H E W O R L D   SAVE  THE WORLD SAVE-THE-WORLD !!!!";
const textArray = housingText.split(" "); // Convert the text into an an array (list) of words. 


function setup(){
	createCanvas(400, 400); 
  frameRate(7); // speed of the sketch 
  fill(66, 135, 245)
  circle(200, 200, 400)


}
function draw(){
  let x = random(width)
  let y = random(height);
  x = mouseX;
  y = mouseY;

  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(255, 255, 255);
    stroke(255, 255, 255);
    console.log(i);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
   // background(255); //infront=clear the background 
  }
beginShape(100, 100, 200, 150, )
endShape
}