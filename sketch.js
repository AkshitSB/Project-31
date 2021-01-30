const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops = [];
var maxDrops = 100;
var walking, person, rand;
var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;



function preload(){
    walking = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");}

function setup(){
    createCanvas(800, 700);

    person = createSprite(400,500,20,20);
    person.addAnimation("moving",walking);
    person.scale = 0.6;
    
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,700), random(0,600)));
    }
}

function draw(){
    Engine.update(engine);
    background("black");

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = 0.7;
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
   
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    
    drawSprites();
}   

