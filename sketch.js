
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy1;
var stone1;
var tree;
var mango1,mango2,mango3,mango4;
var ground

function preload()
{

}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 boy1 = new Boy(100,850,70,100);
	

	 stone1 = new Stone(60,790);

	 tree = new Tree(600,300,600,600);

	 mango1 = new Mango(900,500);
	 mango2 = new Mango(900,550);
	 mango3 = new Mango(850,500);
	 mango4 = new Mango(850,550);

	 ground = new Ground(600,900,1200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();

  stone1.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  ground.display();
  
  drawSprites();
 
}



