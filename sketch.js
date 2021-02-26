var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box, edges, play;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     surface1= createSprite(20, 540,220, 20);
     surface1.shapeColor="blue";

     surface2= createSprite(250, 540, 220, 20);
     surface2.shapeColor="yellow";

     surface3= createSprite(480, 540, 220, 20);
     surface3.shapeColor="red";
     
     surface4= createSprite(720, 540, 220, 20);
     surface4.shapeColor="green"; 

     box= createSprite(random(0, 750), 40, 40, 40);
     box.shapeColor="white";
     box.velocityX=5;
     box.velocityY=5;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    
    edges=createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(surface4.isTouching(box) && box.bounceOff(surface4) ){
        box.shapeColor="green";
        music.play();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3) ){
        box.shapeColor="red";
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2) ){
        box.shapeColor="yellow";
        music.play();
    }

    if(surface1.isTouching(box) && box.bounceOff(surface1) ){
        box.shapeColor="blue";
        music.play();
    }
    drawSprites();
}
