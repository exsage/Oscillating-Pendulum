
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



  var holder_options={
    isStatic: true
  }

holder = Bodies.rectangle(400,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(440,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("orange");
}


function draw() {
  background(0); 
  Engine.update(engine);


  text("move the mouse from left to right in order to create a pendulum effect",210,50);
 

  fill ("blue");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);


fill("green");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("grey");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)



ball.position.x = mouseX
ball.position.y = mouseY



}


