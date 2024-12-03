
let img; // Declare variable 'img'.
let myswitch = 1;

function preload() {
  img = loadImage('IMG_1201.jpg'); // Load image
  img2 = loadImage('Goose.jpg'); // Load image
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  if(myswitch==1){
    img.resize(400, 400); // Display image at actual size at x/y (0,0)
    image(img, 0, 0);  // Display the resized image.
  }else{
    img2.resize(400, 400); // Display image at actual size at x/y (0,0)
    image(img2, 0, 0);  // Display the resized image.
  }
}

function mouseClicked() { // Code to run. }
  if(myswitch==1){
    myswitch=2
  }else{
    myswitch = 1;
  }
    
}
