var cube1,cube2,cube3;

function setup() {
  createCanvas(800,400);

  cube1 = createSprite(400, 100, 50, 50);
  cube2 = createSprite(400,800,50,50);
  //cube3 = createSprite(600,100,50,50);
  //cube4 = createSprite(100, 300, 50, 50);
  //cube5 = createSprite(50,100,50,50);
  //cube6 = createSprite(50,300,50,50);

  cube2.velocityY = -5;
  //cube5.velocityY = 5;
  cube1.velocityY = 5;

  cube1.shapeColor = "green"; 
  cube2.shapeColor = "green";
  //cube3.shapeColor = "yellow";

  cube1.debug = true;
  cube2.debug = true;
  //cube3.debug = true;
}

function draw() {
  background(0);  

  cube2.x = World.mouseX;
  cube2.y = World.mouseY;

  //if(isTouching(cube2,cube6)){
    //cube2.shapeColor = "red";
    //cube6.shapeColor = "red";
  //}
  //else{
    //cube2.shapeColor = "green";
    //cube6.shapeColor = "green";
  //}

  bounceOff(cube2,cube1);

  drawSprites();
}