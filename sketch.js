const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground
var rect1;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.5
	}

	rect1 = new Dustbin(750,600,100,100);

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	//engine = Engine.create();
	//world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(100,450,20,ball_options);
	World.add(world,ball);
	
	console.log(ball);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  //push()
	
  //translate(ball.position.x, ball.position.y);
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  rect1.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);
  //moveForward();
  //pop();
}

/*function moveForward(){
	if (keyCode === UP_ARROW){
		//Body.setStatic(ball,false);
		//Matter.Body.applyForce(ball.Body.x,ball.Body.y,position,{x:85,y:85})
		
    	Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
	}
}*/


