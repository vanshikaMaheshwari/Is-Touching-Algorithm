function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300, 200, 40, 80);
}

function draw() {
  background("lightblue");

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(abs(fixedrect.x - movingrect.x) <= fixedrect.width/2 + movingrect.width/2 && 
  abs(fixedrect.y - movingrect.y) <= fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor = "pink";
    fixedrect.shapeColor = "pink";
  } else {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  drawSprites();
}