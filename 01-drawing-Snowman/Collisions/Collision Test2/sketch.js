let size = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noFill();
  ellipse(mouseX, mouseY, size);    //why is 'size' by itself with no #

  if (size > 100){
    size = 0;
  }else if(size > 60){
    size = size + 10;
  }else{
    size = size + .5;
  }

}
