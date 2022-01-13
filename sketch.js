var forest2,walking,diamonds,crowns,purse,sword,Barbie,GAME;
var forest2Img,walkingImg,diamondsImg,crownsImg,purseImg,swordImg;
var diamondsCloction=0;
var diamondsG,crownsG,purseG,swordGroup;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



//Game States
var Play=1;
var END =0;
var gameStates=1;

function preload (){
     BarbieImg=loadImg("barbie.jpg");
    forest2Img=loadImg("forest2.jpg");
    walkingImg=loadImg("walking.jpg");
    diamondsImg=loadImg("diamonds.jpg");
    crownsImg=loadImg("crown.jpg");
    purseImg=loadImg("purse.png");
    swordImg=loadImg("sword.png");
    EndImg=loadImg("END GAME.jpg");
}

function setup()
{
    var isMobile=/iPhone|iPad|iPod|Andoriod/i.test(navigation.userAgent);
    if(isMobile){
        canW=displayWidth;
        canH=displayHeight;
        createCanvas(displayWidth+80,displayHeight);
    }
    else {
        canW=windowWidth;
        canH=windowHeight;
        createCanvas(windowWidth,windowHeight);  
    }

    //Moving background

    forest2=createSprite(width/2,height-20,20,20);
    forest2.addAnimation(forest2Img);
    forest2.velocity=4;

    //creating barbie walking
    walking=createSprite(width/2,height-20,20,20);
    walking.addAnimation("walkingWlking",walkingImg);
    walking.scale=0.08;
    
    dimondsG=new Group();
    crownsG= new Group();
    purseG=new Group();
    swordGroup=new Group();

}

function draw(){
    if(gameState===PLAY){
        backGround(0);
        walking.x=World.mouseX;

        edges=createEdgesSprites();
        walking.collide(edges);

        //code to reset the background

        //if(path.x>height){
        //path.x=height/2;
       // }


      //if(path.y>height){
          //path.x=height/2;
      //}


      //if(path.x>height){
          //path.y=height;
     // }
    }

    createDiamonds();
    createCrown();
    createPurse();
    createSword();

    if(diamondG.isTouching(walking)){
        diamondG.destroyEach();
        tresureCollection=tresureCollection + 50;
    }
    else if (diamondG.isTouching(walking)){
        diamondG.destroyEach();
        treasureColluction=treasureCollection+100;
    }

else if(crownsG.isTrouching(walking)) {
    crownsG.destroyEach();
    treasurCollection=treasureCollection+150
 
}
else{
    if(swordGroup.isTouching(walking)){
        gameState=END;

        walking.addAnimation("walking",ending)
        walking.x=width/2;
        walking.y=height/2;
        walking.scale=0.6;

        diamondG.destroyEach();
        crownsG.destroyEach();
        purseG.destroyEach();
        swordGroup.destroyEach();

        diamondG.setVelocityEach(0);
        crownsG.setVelocityEach(0);
        purseG.setVelocityEach(0);
        swordGroup.setVelocityEach(0);
    }
}

drawSprites();
textSize(20);
fill (255);
text("treasure:"+ treasureCollection,width-150,30);

function createDiamond() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 5;
    cash.lifetime = 200;
    cashG.add(cash);
    }
  }
  
  function createCrown() {
    if (World.frameCount % 320 == 0) {
    var crowns = createSprite(Math.round(random(50, width-50),40, 10, 10));
    crowns.addImage(diamondsImg);
  crown.scale=0.03;
   crown.velocityY = 5;
   crown.lifetime = 200;
   crownG.add(crown);
  }
  }
  
  function createPurse() {
    if (World.frameCount % 410 == 0) {
    var purse = createSprite(Math.round(random(50, width-50),40, 10, 10));
    purse.addImage(jwelleryImg);
  purse.scale=0.13;
  purse.velocityY = 5;
  purse.lifetime = 200;
  purse.add(jwellery);
    }
  }
  
  function createSword(){
    if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 4;
    sword.lifetime = 200;
    swordGroup.add(sword);
    }
  }
}
