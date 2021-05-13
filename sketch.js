const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var holder,ball,groundOBJ;
var stand1,stand2;
var ball;
var slingShot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;
var polygon;

function setup() {
	engine = Engine.create();
	world = engine.world;

    imageMode(CENTER);
    
    polygon=Bodies.polygon(50,200,6,20);
    World.add(world,polygon);

	createCanvas(900, 700);
	groundOBJ = new Ground(400,690,1000,20);
	stand1 = new Ground(380,300,270,10);
	stand2 = new Ground(700,200,200,10);
    
	//level one;
	block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
	block3 = new Block(340,275,30,40);
	block4 = new Block(370,275,30,40);
	block5 = new Block(400,275,30,40);
	block6 = new Block(430,275,30,40);
	block7 = new Block(460,275,30,40);
	block8 = new Block(490,275,30,40);

	//level two;
	block9 = new Block(310,235,30,40);
	block10 = new Block(340,235,30,40);
	block11 = new Block(370,235,30,40);
	block12 = new Block(400,235,30,40);
	block13 = new Block(430,235,30,40);
	block14 = new Block(460,235,30,40);

	//level three;
	block15 = new Block(340,195,30,40);
	block16 = new Block(370,195,30,40);
	block17 = new Block(400,195,30,40);
	block18 = new Block(430,195,30,40);

	//level four;
	block19 = new Block(370,155,30,40);
	block20 = new Block(400,155,30,40);

	//level five;
	block21 = new Block(385,115,30,40);

	//set two;
	//level one;
	blocks1 = new Block(640,175,30,40);
	blocks2 = new Block(670,175,30,40);
	blocks3 = new Block(700,175,30,40);
	blocks4 = new Block(730,175,30,40);
	blocks5 = new Block(760,175,30,40);
	//level two;
	blocks6 = new Block(670,135,30,40);
	blocks7 = new Block(700,135,30,40);
	blocks8 = new Block(730,135,30,40);
    //level three;
	blocks9 = new Block(700,95,30,40);



    //slingShot = new SlingShot(this.polygon,{x:100,y:200});
  
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
   groundOBJ.display();
   stand1.display();
   stand2.display();

   stroke(15);
   fill('lightblue');
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   blocks1.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();

   stroke(15);
   fill('pink');
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();

   stroke(15);
   fill('cyan');
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   blocks6.display();
   blocks7.display();
   blocks8.display();

   stroke(15);
   fill('orange');
   block19.display();
   block20.display();

   stroke(15);
   fill('grey');
   block21.display();
   blocks9.display();

//    imageMode(CENTER);
//    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  // slingShot.display();
}



