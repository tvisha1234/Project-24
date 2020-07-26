
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3;
var ground;
var paper;

function setup() {
	createCanvas(1200, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = new Rect(910,610,20,100);
	rect2 = new Rect(1090,610,20,100);
	rect3 = new Rect(1000,650,200,20);

	paper = new Paper(200,600,40);

	fill("white");
	ground = Bodies.rectangle(400, 650, 1200, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  rect1.display();
  rect2.display();
  rect3.display();

  paper.display();

  ifKeyPressed();

  drawSprites();
 
}

function ifKeyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50, y:-25});
	  }
	}