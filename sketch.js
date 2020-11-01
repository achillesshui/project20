var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(100,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(400);  

  if(wall.x-car.x < (car.width+wall.width)/2){
    deformation = (0.5*weight*speed^2)/22500;
    car.velocityX = 0;
    if(deformation>180) {
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180&&deformation>100) {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }
  car.collide(wall);
  drawSprites();
}