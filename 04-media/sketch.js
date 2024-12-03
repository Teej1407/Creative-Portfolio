
let img; // Declare variable 'img'.
let myswitch = 1;

function preload() {
  img = loadImage('IMG_1201.jpg'); // Load images
  img2 = loadImage('Goose.jpg'); 
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  if(myswitch==1){
    img.resize(400, 400); // RESIZE IMG
    image(img, 0, 0);  // Display the resized image.
  }else{
    img2.resize(400, 400); 
    image(img2, 0, 0);  
  }
}

function mouseClicked() { // Code to run. 
  if(myswitch==1){    //click to swap images
    myswitch=2
  }else{
    myswitch = 1;
  }
    
}
