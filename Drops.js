class Drops{
    constructor(x, y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.1,
            'density':1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.x= x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        stroke("blue");
        fill("blue");
        rectMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,600)});
        }
    }
};