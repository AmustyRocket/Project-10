var ship, ship_moving, edges;
var seaImage;
function preload(){
seaImage = loadImage("sea.png");
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  ship = createSprite(130,200);
  ship.addAnimation("moving ship",ship_moving);

 ship.x = 130; 
 sea.scale  = 0.3;
 ship.scale = 0.4;
}
  



function draw() {
  background("white");


  console.log(ship.x);

  if(sea.x < 0) 
  {
   sea.x = sea.width/8; 
  }
 
  drawSprites();
}