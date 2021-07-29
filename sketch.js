var backgroundImg, BackGround;
var Ground, GroundImg;
var KakanoAnimation, Kakano

function preload(){
 backgroundImg = loadImage("Background.jpeg");
 GroundImg = loadImage("ground.jpeg");
 KakanoAnimation = loadAnimation("unscreen-001.png","unscreen-002.png","unscreen-003.png","unscreen-004.png","unscreen-005.png",
 "unscreen-006.png","unscreen-007.png")
  
}

function setup() {
  createCanvas(1920, 920);
  BackGround = createSprite(960, 460, 1920, 920);
  BackGround.addImage(backgroundImg);
  BackGround.scale = 6;
  BackGround.velocityX = -15;

  Ground = createSprite(960,900,2000,200);
  Ground.addImage(GroundImg);
  Ground.scale = 6;
  Ground.velocityX = -15;
  
  Kakano = createSprite(90, 700, 50,50);
  Kakano.addAnimation("running to death", KakanoAnimation);
  

}

function draw() {
  background("black");  
  if (Ground.x < 0){
    Ground.x = Ground.width/2;
    }
    if (BackGround.x < 0){
      BackGround.x = Ground.width/2;
      }
  drawSprites();
}