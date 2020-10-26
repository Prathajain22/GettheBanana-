var PLAY=1;
var END=0;
var gameState=PLAY;

var monkey , monkey_running
var foodImage,food, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  foodImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  

  monkey= createSprite(50,315,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,350,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
               
  
   

 survivalTime=0; 
  
obstacleGroup = createGroup();
foodGroup = createGroup(); 

 
  
 
}


function draw() {
background("lightblue"); 
  
  
   stroke("black");
   textSize(20)
   fill("black")
  
   text("Survival Time:"+survivalTime,100,50)
  
  
  if (gameState===PLAY){
    
   if (ground.x < 200){
      ground.x = ground.width/2;
    }
    
    food(); 
 obstacle();
  
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;}
      
    monkey.velocityY = monkey.velocityY + 0.8 
  
 monkey.collide(ground);
    
     survivalTime=Math.ceil(frameCount/frameRate());

 if(obstacleGroup.isTouching(monkey)){
   gameState=END;
   
 } }
  
  else if (gameState===END){
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
   obstacleGroup.setVelocityXEach(0);
   foodGroup.setVelocityXEach(0); 
  }
  
  
 
 drawSprites(); 
}

function obstacle(){
 //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
   var  obstacle = createSprite(200,200,40,10);
    obstacle.y = Math.round(random(327,327));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale=0.1;
    
     //assign lifetime to the variable
    obstacle.lifetime = 100;
  obstacleGroup.add(obstacle)
    
}}

function food (){
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var food = createSprite(50,100,40,10);
    food.y = Math.round(random(120,150));
    food.addImage(foodImage);
    food.velocityX = 3;
    food.scale=0.1;
    
     //assign lifetime to the variable
    food.lifetime = 100;
    
   
  foodGroup.add(food) 
}}
  





