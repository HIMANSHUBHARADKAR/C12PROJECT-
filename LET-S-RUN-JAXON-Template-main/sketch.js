
//Note:- in this game player can move  identiy how it














var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin , coinImg    ;
var bomb , bombImg
var energyDrink , energyDrinkImg
var score=0;



function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadAnimation("coin.png");
  bombImg = loadAnimation("bomb.png");
  energyDrinkImg = loadAnimation("energyDrink.png");





}











function setup(){
  
  createCanvas(400,400);
  

 

  // Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
coin = createSprite(300,200,40,40);
coin.scale=0.5
coin.addAnimation("coin",coinImg);


bomb= createSprite(230,230,40,40);
bomb.scale=0.1
bomb.addAnimation("bomb",bombImg);

 energyDrink = createSprite(130,200,40,40);
 energyDrink.scale=0.2
 energyDrink.addAnimation("energyDrink",energyDrinkImg);








leftBoundary=createSprite(0,0,100,800);


 leftBoundary.visible = true;



rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  
 
  
  
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

 
  if (keyDown("up")) {
    boy.y=boy.y-10;
  }
  if (keyDown("down")) {
   boy .y=boy.y+10;
  }
  if (keyDown("left")) {
   boy.x=boy.x-10;
  }
  if (keyDown("right")) {
    boy.x=boy.x+10;
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  drawSprites();
  textSize(50);
  fill("green")
  text("Score :"+score,50,50);
  

}
