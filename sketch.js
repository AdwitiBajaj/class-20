var fixed;
var moving;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 100, 50);
moving = createSprite(500,300,50,100);
moving.shapeColor = "blue";
fixed.shapeColor  = "blue";
}

function draw() {
  background(0,0,0); 
   moving.x = mouseX;
   moving.y = mouseY;
   if(fixed.x-moving.x<= fixed.width/2+moving.width/2 && moving.x-fixed.x<=moving.width/2+fixed.width/2 && fixed.y-moving.y<=fixed.height/2+moving.height/2 && moving.y-fixed.y<= moving.height/2+fixed.height/2){
    moving.shapeColor = "green";
fixed.shapeColor  = "green";
   }
   else{
    moving.shapeColor = "red";
    fixed.shapeColor  = "red";
   }
  drawSprites();
}
