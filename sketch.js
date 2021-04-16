var canvas;
var music;
var rect1, rect2, rect3, rect4;
var box;
var movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(700,580,140,20);
    rect2 = createSprite(520,580,140,20);
    rect3 = createSprite(320,580,140,20);
    rect4 = createSprite(120,580,140,20);
    
    rect1.shapeColor = "red"
    rect2.shapeColor = "blue"
    rect3.shapeColor = "green"
    rect4.shapeColor = "yellow"
    

    //create box sprite and give velocity
    box = createSprite(random(3,200),0,30,30);
    box.velocityX = -4;
    box.velocityY = 4;
    box.shapeColor = "white"

    movingRect = createSprite(random(200,400),0,40,20);
    movingRect.velocityX = 4;
    movingRect.velocityY = -4;
    movingRect.shapeColor = "black"

    edges = createEdgeSprites()

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges)
    movingRect.bounceOff(edges)
   
    music.stop();

   if (istouching(box,rect1)) {
       box.shapeColor = rect1.shapeColor
       music.play();
       box.setVelocity(-4,-4);
   }
   if (istouching(box,rect2)) {
    box.shapeColor = rect2.shapeColor
    music.play();
    box.setVelocity(-4,-4);
  }
  if (istouching(box,rect3)) {
    box.shapeColor = rect3.shapeColor
    music.play();
    box.setVelocity(-4,-4);
  }
  if (istouching(box,rect4)) {
    box.shapeColor = rect4.shapeColor
    music.play();
    box.setVelocity(-4,-4);
  }
  if (istouching(box,movingRect)) {
     music.play();
     box.setVelocity(0,0);
     movingRect.setVelocity(0,0);
  }

    //add condition to check if box touching surface and make it box

    drawSprites();
}
