var c11=0;
var c12=0;
var c13=0;
var c21=0;
var c22=0;
var c23=0;
var c31=0;
var c32=0;
var c33=0;
var bg;
var circle;
var cross;
var s11,s12,s13;
var s21,s22,s23;
var s31,s32,s33;
var turn=1;
var gameState="PLAY";
var tie;
var flag=0;

function preload(){
  bgImage=loadImage("tic tac toe bg.png");
  circle=loadImage("Circle.png");
  cross=loadImage("cross.png");
}

function setup(){
 createCanvas(400,400);
 tie =0;
  s11=createSprite(67,67,50,50);
  s12=createSprite(200,67,50,50);
  s13=createSprite(333,67,50,50);

  s21=createSprite(67,185,50,50);
  s22=createSprite(200,185,50,50);
  s23=createSprite(333,185,50,50);

  s31=createSprite(67,310,50,50);
  s32=createSprite(200,310,50,50);
  s33=createSprite(333,310,50,50);
}

function draw(){
  background(bgImage);
  
  textSize(18)
  fill("yellow")
  
  if(turn===1){
    text("X turn",180,10)
  }

  if(turn===2){
    text("O turn",180,10)
  }
  
  if(turn===1 && mousePressedOver(s11) && c11===0){
    s11.addImage(cross);
    s11.scale=0.15;
    turn=2;
    tie++
    c11=1;
  }

  if(turn===1 && mousePressedOver(s12) && c12===0){
    s12.addImage(cross);
    s12.scale=0.15;
    turn=2;
    tie++
    c12=1;
  }

  if(turn===1 && mousePressedOver(s13) && c13===0){
    s13.addImage(cross);
    s13.scale=0.15;
    turn=2;
    tie++
    c13=1;
  }

  if(turn===1 && mousePressedOver(s21) && c21===0){
    s21.addImage(cross);
    s21.scale=0.15;
    turn=2;
    tie++
    c21=1;
  }

  if(turn===1 && mousePressedOver(s22) && c22===0){
    s22.addImage(cross);
    s22.scale=0.15;
    turn=2;
    tie++
    c22=1;
  }

  if(turn===1 && mousePressedOver(s23) && c23===0){
    s23.addImage(cross);
    s23.scale=0.15;
    turn=2;
    tie++
    c23=1;
  }

  if(turn===1 && mousePressedOver(s31) && c31===0){
    s31.addImage(cross);
    s31.scale=0.15;
    turn=2;
    tie++
    c31=1;
  }

  if(turn===1 && mousePressedOver(s32) && c32===0){
    s32.addImage(cross);
    s32.scale=0.15;
    turn=2;
    tie++
    c32=1;
  }

  if(turn===1 && mousePressedOver(s33) && c33===0){
    s33.addImage(cross);
    s33.scale=0.15;
    turn=2;
    tie++
    c33=1;
  }

  if(turn===2 && mousePressedOver(s11) && c11===0){
    s11.addImage(circle);
    s11.scale=0.15;
    turn=1;
    tie++
    c11=2;
  }

  if(turn===2 && mousePressedOver(s12) && c12===0){
    s12.addImage(circle);
    s12.scale=0.15;
    turn=1;
    tie++
    c12=2;
  }

  if(turn===2 && mousePressedOver(s13) && c13===0){
    s13.addImage(circle);
    s13.scale=0.15;
    turn=1;
    tie++
    c13=2;
  }

  if(turn===2 && mousePressedOver(s21) && c21===0){
    s21.addImage(circle);
    s21.scale=0.15;
    turn=1;
    tie++
    c21=2;
  }

  if(turn===2 && mousePressedOver(s22) && c22===0){
    s22.addImage(circle);
    s22.scale=0.15;
    turn=1;
    tie++
    c22=2;
  }

  if(turn===2 && mousePressedOver(s23) && c23===0){
    s23.addImage(circle);
    s23.scale=0.15;
    turn=1;
    tie ++
    c23=2;
  }

  if(turn===2 && mousePressedOver(s31) && c31===0){
    s31.addImage(circle);
    s31.scale=0.15;
    turn=1;
    tie++
    c31=2;
  }

  if(turn===2 && mousePressedOver(s32) && c32===0){
    s32.addImage(circle);
    s32.scale=0.15;
    turn=1;
    tie++
    c32=2;
  }

  if(turn===2 && mousePressedOver(s33) && c33===0){
    s33.addImage(circle);
    s33.scale=0.15;
    turn=1;
    tie++
    c33=2;
  }

  drawSprites();

 
  if(c11===1 && c12===1 && c13===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c21===1 && c22===1 && c23===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c31===1 && c32===1 && c33===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c11===1 && c21===1 && c31===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c12===1 && c22===1 && c32===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c13===1 && c23===1 && c33===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  
  if(c11===1 && c22===1 && c33===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }

  if(c13===1 && c22===1 && c31===1){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("X wins!!",150,200);
  }
  // condition for O wins
  if(c11===2 && c12===2 && c13===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c21===2 && c22===2 && c23===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c31===2 && c32===2 && c33===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c11===2 && c21===2 && c31===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c12===2 && c22===2 && c32===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c13===2 && c23===2 && c33===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }
  
  if(c11===2 && c22===2 && c33===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }

  if(c13===2 && c22===2 && c31===2){
    gameState="END";
    flag=1;
    textSize(30);
    fill("purple")
    text("O wins!!",150,200);
  }

  if(tie===9 && flag===0){
    gameState="END";
    textSize(30);
    fill('red');
    text("Tie!!",150,200);
  }

  
 

}
