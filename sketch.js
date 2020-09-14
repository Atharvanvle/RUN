const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var car,carIMG,road,roadIMG,road2,road3,road4;
var road5,road6,road7,road8,road9,road10;


function preload(){
  
 carIMG = loadImage("car.png")
 roadIMG = loadImage("road.png");
 
}

function setup() 
{
  canvas = createCanvas(300,400);
  
 car = createSprite(170,200);
 car.addImage(carIMG);
 car.scale=0.15;

 road = createSprite(180,200,50,50);
 road.addImage(roadIMG);
 road.x=road.width/2;

 road2=createSprite(204,-250,50,50);
 road.isSatic=true;
 road2.addImage(roadIMG);
 road2.x=road2.width/2;

 road3=createSprite(228,-700,50,50);
 road3.addImage(roadIMG);
 road3.x=road3.width/2;

 road4=createSprite(126,-1000,50,50);
 road4.addImage(roadIMG);
 road4.x=road4.width/2;

 road5=createSprite(126,-1300,50,50);
 road5.addImage(roadIMG);
 road5.x=road5.width/2;

 road6 = createSprite(126,-1600,50,50);
 road6.addImage(roadIMG);
 road6.x=road6.width/2;

 

 
/* rect1 = createSprite(218,200,8,10000);
 rect1.shapeColor="yellow";
 rect2 = createSprite(50,10,100,10000);
 rect2.shapeColor="white";
 rect3 = createSprite(235,200,12,10000);
 rect3.shapeColor="yellow";*/
 
}

function draw() 
{
background(35,35,36);

 if(keyWentDown(UP_ARROW)){
   road.velocityY=8;
   road2.velocityY=8;
   road3.velocityY=8;
   road4.velocityY=8;
   road5.velocityY=8;
   road6.velocityY=8;
   camera.position.y=car.position.y;
   road.x=road.width/2;
   road2.x=road2.width/2;
   road3.x=road2.width/2;
   road4.x=road4.width/2;
   road5.x=road.width/2;
   road6.x=road.width/2;
 }else if(keyWentUp(UP_ARROW)){
   road.velocityY=0;
   road2.velocityY=0;
   road3.velocityY=0;
   road4.velocityY=0;
   road5.velocityY=0;
   road6.velocityY=0;
 }

 if(road.x<0){
  road.x=road.width/2;
}

if(road6.y>380){
    road6.velocityY=0;
}
 car.depth=road.depth;
 car.depth=road.depth+1;
 car.depth=road2.depth;
 car.depth=road2.depth+2;
 car.depth=road3.depth;
 car.depth=road3.depth+2;
 car.depth=road4.depth;
 car.depth=road4.depth+1;
 car.depth=road5.depth;
 car.depth=road5.depth+1;
 car.depth=road6.depth;
 car.depth=road6.depth+1;

 

  drawSprites();
}

