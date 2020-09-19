const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg = 0;
var score = 0;
function preload() {
  polygon_img = loadImage("polygon.png");
  getBackgroundImg();
}
function setup() {
  createCanvas(900,400);
  
  
 engine = Engine.create();
 world = engine.world; 
 Engine.run(engine); 
 
 platform1 = new Ground(240,790,480,20);
 stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  Box1 = new Box(300,275,30,40);
  console.log(Box1);
  Box2 = new Box(330,275,30,40);
  Box3 = new Box(360,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(420,275,30,40);
  Box6 = new Box(450,275,30,40);
  Box7 = new Box(480,275,30,40);
  //level two
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  //level three
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  //top
  Box16 = new Box(390,155,30,40);

  //set 2 for second stand
  //level one
  Boxs1 = new Box(640,175,30,40);
  Boxs2 = new Box(670,175,30,40);
  Boxs3 = new Box(700,175,30,40);
  Boxs4 = new Box(730,175,30,40);
  Boxs5 = new Box(760,175,30,40);
  //level two
  Boxs6 = new Box(670,135,30,40);
  Boxs7 = new Box(700,135,30,40);
  Boxs8 = new Box(730,135,30,40);
  //top
  Boxs9 = new Box(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

}

function draw() {
  background(backgroundImg);  
  
  platform1.display();
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the Boxs",100,30);

  fill("lightyellow");
  text("Score : "+score,750,40);
  

  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  Box1.display();
  Box1.score();
  Box2.display();
  Box2.score();
  Box3.display();
  Box3.score();
  Box4.display();
  Box4.score();
  Box5.display();
  Box5.score();
  Box6.display();
  Box6.score();
  Box7.display();
  Box7.score();
  fill("pink");
  Box8.display();
  Box8.score();
  Box9.display();
  Box9.score();
  Box10.display();
  Box10.score();
  Box11.display();
  Box11.score();
  Box12.display();
  Box12.score();
  fill("turquoise");
  Box13.display();
  Box13.score();
  Box14.display();
  Box14.score();
  Box15.display();
  Box15.score();
  fill("grey");
  Box16.display();
  Box16.score();
  fill("skyblue");
  Boxs1.display();
  Boxs1.score();
  Boxs2.display();
  Boxs2.score();
  Boxs3.display();
  Boxs3.score();
  Boxs4.display();
  Boxs4.score();
  Boxs5.display();
  Boxs5.score();
  fill("turquoise");
  Boxs6.display();
  Boxs6.score();
  Boxs7.display();
  Boxs7.score();
  Boxs8.display();
  Boxs8.score();
  fill("pink")
  Boxs9.display();
  Boxs9.score();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = 0;
  }
  else{
      bg = 1;
  }

  backgroundImg = bg;
  console.log(backgroundImg);
}
