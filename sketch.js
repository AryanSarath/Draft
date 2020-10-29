const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world  = engine.world;

  ground = new Ground(240, 795, 480, 10);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  drawSprites();
  ground.display();
}