var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var background,backgroundImg;
function preload() {
 //loading the images here

backgroundImg = loadImage("garden.png");
catImg1 = loadImage("cat1.png");
catImg2 = loadAnimation("cat2.png","cat3.png");
catImg3 = loadImage("cat4.png");
mouseImg1 = loadImage("mouse1.png");
mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
mouseImg3 = loadImage("mouse4.png");
} 

function setup(){
    createCanvas(1000,800);
    
background = createSprite(486,350,500,400);
background.addImage("ground",backgroundImg);

cat = createSprite(843,540,40,40);
cat.addImage("see",catImg1);
cat.scale = 0.2;

mouse = createSprite(186,540,40,40);
mouse.addImage("mouse",mouseImg1);
mouse.scale = 0.1;

}

function draw() {
  
 mouse.depth = cat.depth;
 cat.depth = cat.depth + 1;
 
 if (cat.x - mouse.x < (cat.width -mouse.width)/2){

  mouse.addImage("catched",mouseImg3);
  mouse.changeImage("catched");
 
  cat.addImage("catche",catImg3);
  cat.changeImage("catche");
 
  cat.velocityX = 0;

 }


  

    
  drawSprites();
}

function keyPressed(){
 if(keyCode === LEFT_ARROW){
   cat.velocityX = -4;
   cat.addAnimation("running",catImg2);
   cat.changeAnimation("running");
   mouse.addAnimation("catch",mouseImg2);
   mouse.changeAnimation("catch");

 }
}


