
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1;
var backgroundImg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ball,slingshot;
var score = 0 ;
var bg;
function preload()
{
	getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1 = new Ground(450,680,600,20);
	//lowest layer
	box1 = new Box(250,600,70,70);
	box2 = new Box(350,600,70,70);
	box3 = new Box(450,600,70,70);
	box4 = new Box(550,600,70,70);
	box5 = new Box(650,600,70,70);
	//second layer
	box6 = new Box(300,530,70,70);
	box7 = new Box(400,530,70,70);
	box8 = new Box(500,530,70,70);
	box9 = new Box(600,530,70,70);
	//third layer
	box10 = new Box(350,460,70,70);
	box11 = new Box(450,460,70,70);
	box12 = new Box(550,460,70,70);
	//forth layer
	box13 = new Box(400,390,70,70);
	box14 = new Box(500,390,70,70);
	//sixth layer
	box15 = new Box(450,320,70,70);

	ball = new Ball(100,350,50);
    slingshot = new SlingShot(ball.body,{x:100, y:350});
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  if(backgroundImg){
  background(backgroundImg);
  }
  //texting score and calling score function for every box
  text("SCORE :" + score , 40 , 40);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();

  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  
  box15.display();
  
  ball.display();
  slingshot.display();
  
 
}
function keyPressed(){
	if(keyCode===32){
		ball.attach();
	}
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  console.log(hour);
  if(hour >= 06 && hour <= 19){
    bg = "day.jpg" ;
  }else{
    bg = "night.jpg" ;
  }
  backgroundImg = loadImage(bg);
}