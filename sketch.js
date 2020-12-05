const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;


var myengine, myworld,ground;
var box1,box2;
var pig1;
var log1


function setup()
  {
  createCanvas(1200,400);

  myengine=Engine.create();
  myworld=myengine.world;

  ground=new Ground(600,400,1200,20);
  box1 = new Box(700,360,70,70);
  box2 = new Box(900,360,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(900,240,70,70);
  pig1 = new Pig(800,360);
  pig2 = new Pig(800,240);
  log1 = new Log(800,260,280,PI/2);
  log2 = new Log(800,140,280,PI/2);
  box5 = new Box(800,120,70,70);
  log3 = new Log(760,70,140,PI/6);
  log4 = new Log(810,70,140,-PI/6)  
  bird = new Bird(100,100)
  }
 

 


function draw() {
  background(0);  
   
  Engine.update(myengine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}