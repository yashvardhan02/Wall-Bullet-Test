var bullet,wall

var speed,weight

var thickness




function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 10);
  wall = createSprite(1200,200,thickness,height/2);
  speed  = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83))
}

function draw() {
  background("black"); 
  
  bullet.velocityX = speed;
   
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness*thickness*thickness)

   if(damage > 10){
     
    wall.shapeColor = "green";
   }


   if(damage < 10){

   wall. shapeColor = "red";

   }

  }

  drawSprites();
}