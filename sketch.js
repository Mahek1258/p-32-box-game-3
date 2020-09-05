
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stand1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var ball,slingshot;
var score = 0;
var bgc = "white";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1 = new Ground(450,680,600,20);
	//lowest layer
	box1 = new Box(250,620,70,70);
	box2 = new Box(350,620,70,70);
	box3 = new Box(450,620,70,70);
	box4 = new Box(550,620,70,70);
	box5 = new Box(650,620,70,70);
	//second layer
	box6 = new Box(300,520,70,70);
	box7 = new Box(400,520,70,70);
	box8 = new Box(500,520,70,70);
	box9 = new Box(600,520,70,70);
	//third layer
	box10 = new Box(350,420,70,70);
	box11 = new Box(450,420,70,70);
	box12 = new Box(550,420,70,70);
	//forth layer
	box13 = new Box(400,320,70,70);
	box14 = new Box(500,320,70,70);
	//sixth layer
	box15 = new Box(450,220,70,70);

	ball = new Ball(100,350,50,50);
    slingshot = new SlingShot(ball.body,{x:100, y:350});
	Engine.run(engine);
  
}


function draw() {
	backgroundColor();
  background(bgc);
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

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  
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
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
	slingshot.attach(ball.body);
}
}
async function backgroundColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bgc = "black";
    }
    else{
        bgc = "lightBlue";
    }
}