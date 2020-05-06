var movingRect1, fixedRect1;
var obj1, obj2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 50, 30, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 2;
  movingRect = createSprite(400,350,80,30);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -2;
  obj1 = createSprite(300,400,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(100,200,50,50);
  obj2.shapeColor = "green";
}

function draw() {
  background(0);
  
  movingRect.debug = true;
  fixedRect.debug = true;
  obj1.debug = true;
  obj2.debug = true;

  obj1.x = mouseX;
  obj1.y = mouseY;

  bounceOff(movingRect,fixedRect);

  if (isTouching(obj1,obj2)){
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }

  else {
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
  }

  drawSprites();
}

