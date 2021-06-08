var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 620);

	rectMode(CENTER);
	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2,600, width,50);
	groundSprite.shapeColor=color("green");

	engine = Engine.create();
	world = engine.world;

    packageBody = Bodies.circle(width/2 , 100 , 13 , {restitution:0.2,isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 600, width, 55 ,{isStatic:true});
 	World.add(world, ground);
	
	Engine.run(engine);	 
}

function draw() 
{
	background(0);

	keyPressed();

  rectMode(CENTER);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
}

function keyPressed() 
{
	if (keyDown(DOWN_ARROW))
	{
		
		Matter.Body.setStatic(packageBody,false);
    }

}