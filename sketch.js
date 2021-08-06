const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  ground=Bodies.rectangle(400,380,800,10,{isStatic:true})
  World.add(world,ground)
  ball=Bodies.circle(400,80,30,{restitution:1})
  World.add(world,ball)
  ball1=Bodies.circle(300,180,30,{restitution:1.5})
  World.add(world,ball1)
  rectMode(CENTER)
ellipseMode(RADIUS)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,800,10)
ellipse(ball.position.x,ball.position.y,30)
ellipse(ball1.position.x,ball1.position.y,30)
}