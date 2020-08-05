
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;
var sling;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,700,width,20);
	dustbinObj=new dustbin(1200,690);
	sling = new SlingShot(paperObject.body,{x:200,y:100});
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  sling.display();
  
  
 
  
  
 
}

//function keyPressed() {
 // 	if (keyCode === UP_ARROW) {

  //  	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  //	}
//}
function mouseDragged() {
	Matter.Body.setPosition(paperObject.body,{x: mouseX,y: mouseY})
	}
	
	function mouseReleased(){
	sling.fly();    
	}





