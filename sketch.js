const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

      dustbin1 = new dustbin (900, 20, 200 , PI/2  );
      dustbin2= new dustbin (900, 200, 20 , PI/2 )
      dustbin3 = new dustbin (1100, 20, 200  , PI/2);


    paper1 = new paper (200, 200, 20);

    

    ground = new Ground(600,height,1200,30);
}

function draw(){
    background(0);

    
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    
    paper1.display()
    ground.display();

}