class Plank
{
    constructor(x,y,height,angle)
    {
        var options =
         {
                 restitution: 0.7,
                 density: 1.0,
                 friction:1.0
         }
        this.body=Bodies.rectangle(x,y,25,height,options);
        this.width=25;
        this.height=height;
        World.add(myworld,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);

        pop();
    }

  
}