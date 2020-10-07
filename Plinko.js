class Plinko{
    constructor(x,y,radius){
    var options = {
        restituition: 0.4,
        isStatic: true
    }

    this.radius = radius;

    this.body = Bodies.circle(x,y,radius,options);
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        fill(255);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
}