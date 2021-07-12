var ship_ani, sea_img, sea, ship
function preload(){
ship_ani = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_img = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,200);
  ship = createSprite(200,200);
  sea.addImage("seaImg", sea_img);
  ship.addAnimation("ship_moving", ship_ani);
  ship.scale = 0.5
  sea.scale = 0.3;
  sea.velocityX = -2
}

function draw() {
  background("green");
  drawSprites();
  if (sea.x < 0) {
    console.log(sea.x)
    sea.x = sea.width
    console.log(sea.width)
    sea.x = sea.x/20
    sea.x = sea.x*3
    console.log(sea.x)
 }
}