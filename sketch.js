
var cat,mouse,garden;





function preload() {
    //load the images here
    cat = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    mouse = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    garden = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(400,600,20,20);
    mouse = createSprite(450,600,20,20);
    cat.addAnimation("cat",cat);
    mouse.addAnimation("mouse",mouse);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){

        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
