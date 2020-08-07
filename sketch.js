const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,480);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 780);
  
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);
  
  for(var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Divisions(k, height = divisionHeight/2, 10, divisionHeight));
  }
 
  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75, 15));
  }

  for(var i = 15; i <= width - 10; i = i + 50)
  {
    plinkos.push(new Plinko(j, 175, 15));
  }
  
  for(var l = 25; l <= width - 10; l = l + 50)
  {
    plinkos.push(new Plinko(l, 275, 15));
  }

  for(var m = 40; m <= width - 10; m = m + 50)
  {
    plinkos.push(new Plinko(m, 375, 15));
  }

  if(frameCount%60 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10));
  }

  
  drawSprites();
}