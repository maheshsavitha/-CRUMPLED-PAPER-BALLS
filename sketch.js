
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()


{
	
}

function setup() {
	createCanvas(1200, 1200);
	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}



	//Create the Bodies Here.
  Matter.Bodies.circle(x,y,radius,[options],[maxSides])

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  groundObj=new ground(width/2,670,width,20);
  leftSide =new ground(1100,600,20,120);
  righttSide =new ground(1100,600,20,120);
  
  function keyPressed() 
     if (keyCode ===UP_ARROW)
	
	 

	  drawSprites();
	  var ball;
}

