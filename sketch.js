var cat,mouse;
var catImg,mouseImg;
var muoseRunning,catRunning;
var garden,gardenImg;
function preload() {
    gardenImg=loadImage("images/garden.png")

    cat_Running=loadAnimation("images/tomTwo.png","images/tomThree.png")
    catImg=loadImage("images/tomOne.png")
    catImg2=loadImage("images/tomTwo.png")
    catImg3=loadImage("images/tomThree.png")
    catImg4=loadImage("images/tomFour.png")

    mouse_Running=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    mouseImg=loadImage("images/jerryOne.png")
    mouseImg2=loadImage("images/jerryTwo.png")
    mouseImg3=loadImage("images/jerryThree.png")
    mouseImg4=loadImage("images/jerryFour.png")
}

function setup(){
    createCanvas(800,700);
    garden=createSprite(400, 320, 1000, 800);
    garden.addImage(gardenImg)
    
    cat=createSprite(700,550,50,80);
    cat.addImage(catImg)
    cat.scale=0.1
    cat.debug=false;

    mouse=createSprite(150,575,25,40);
    mouse.addImage(mouseImg)
    mouse.scale=0.1
    mouse.shapeColor="green"
    mouse.debug=false;
    
}
    
function draw() {
   
    if(cat.x-mouse.x<mouse.width/2+cat.width/2 &&
        mouse.x-cat.x< mouse.width/2+cat.width/2 &&
        cat.y-mouse.y<mouse.width/2+cat.width/2 &&
        mouse.y- cat.y< mouse.width/2+cat.width/2){
            cat.velocityX=0

            cat.addAnimation("cat_Running",catImg4)
            cat.changeAnimation("cat_Running")

            mouse.addAnimation("mouse_Running",mouseImg4)
            mouse.changeAnimation("mouse_Running")
        

    }
     else{
         cat.addImage(catImg)
     
     }
     drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
       cat.addAnimation("cat_Running",catImg2,catImg3)
       cat.changeAnimation("cat_Running")
       cat.velocityX=-3

       mouse.addAnimation("mouse_Running",mouseImg2,mouseImg3)
       mouse.changeAnimation("mouse_Running")
    }
}
