const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var ground;
var d1,d2,d3,d4,d5;
var particles = [];
var plinko = [];



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,780,480,20);
  d1 = new Division(0,690,5,160);
  d2 = new Division(80,690,5,160);
  d3 = new Division(160,690,5,160);
  d4 = new Division(240,690,5,160);
  d5 = new Division(320,690,5,160);
  d6 = new Division(400,690,5,160);
  d7 = new Division(480,690,5,160);

  // particles = new Particle(j, 0, 10);
  // for(var j = 0; j < 480; j++){
  //   particles[j].display();
  // }


  
  // for(var k = 40; k <+ 480; k = k+50){
  //  //plinko = new Plinko(k,60,10);
  //  plinko.push(new Plinko(j,75));
  // }
  
}

function draw() {
  background(0);  
  //drawSprites();
  Engine.update(engine);
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  if(frameCount % 60 === 0){
    //console.log(frameCount);
    newParticle();
  }
 
}

function newParticle(){
  var particles = new Particle(300,70,10);
  particles.display();
 // console.log(particles);
}