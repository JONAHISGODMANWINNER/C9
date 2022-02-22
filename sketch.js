var ground
function setup() {
  createCanvas(600,200);
  ground=createSprite(300, 190, 600, 20)
}



function draw() 
{
  background("blue");
  ground.shapeColor="yellow"
drawSprites()
}




