var canvas;
var backgroundImage;
var titulo
var botonplay
var score
var hola
var tabla
var gameState = "PLAY"

function preload() {
  backgroundImage = loadImage("./Images/sciencebg.png");
  tablaimg = loadImage("tabla.jpg");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  
 titulo = createSprite(800,300,50,50);

 botonplay = createSprite(800,400,50,50)


 tabla = createSprite (800,400,100,100)
 tabla.addImage(tablaimg);
 tabla.scale = 0.1;
  
 
 
  
  
 
  

  
 

  score = 0;
  
}

function draw() {
  
  //image (backgroundImage,0,0,windowWidth,windowHeight)
  background("blue");
  text("Puntuación: "+ score, 1300,80);
 
    
    
  if(mousePressedOver(botonplay)) {
   botonplay.visible = false;
   titulo.visible = false;
   tabla.visible = true;
  }
  if(gameState === "PLAY"){
tabla.visible = false;
titulo.visible = true;
botonplay.visible = true;
if(score>0 && score%100 === 0){
       
}
  }
 
 //  else if (gameState === END) {
    
   //}
     
    drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

