
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;


	boy = createSprite(300,580,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.2;



	ground = new Ground(750,700,1500,20);

	tree = new Tree(1000,300,20,20);

	stone = new Stone(200,470,50,50);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(244,0,255);
  Engine.update(engine);

  drawSprites();

  tree.display();

  ground.display();
  
  stone.display();
  
 
}



