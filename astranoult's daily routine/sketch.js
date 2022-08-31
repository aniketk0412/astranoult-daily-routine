function preload(){
  bg = loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png",);
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move1.png");
  sleep = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(400,400);
  astranoult=createSprite(300,230)
  astranoult.addAnimation("sleeping",sleep)
  astranoult.scale=0.1
}

function draw() {
  background(bg);

  if(keyDown(UP_ARROW)){
    astranoult.addAnimation("brushing",brush)
    astranoult.changeAnimation("brushing");
    astranoult.y=350;
    astranoult.velocityX=0;
    astranoult.velocityY=0;
  }

  if(keyDown(DOWN_ARROW)){
    astranoult.addAnimation("gymming",gym)
    astranoult.changeAnimation("gymming");
    astranoult.y=300;
    astranoult.velocityX=0;
    astranoult.velocityY=0;
  }

  if(keyDown(LEFT_ARROW)){
    astranoult.addAnimation("eating",eat)
    astranoult.changeAnimation("eating");
    astranoult.y=350;
    astranoult.velocityX=0;
    astranoult.velocityY=0;
  }

  if(keyDown(RIGHT_ARROW)){
    astranoult.addAnimation("bathing",bath)
    astranoult.changeAnimation("bathing");
    astranoult.y=350;
    astranoult.velocityX=0;
    astranoult.velocityY=0;
  }

  if(keyDown("m")){
    astranoult.addAnimation("moving",move)
    astranoult.changeAnimation("moving");
    astranoult.y=300;
    astranoult.velocityX=4;
    astranoult.velocityY=-4;
  }

  drawSprites();

}




