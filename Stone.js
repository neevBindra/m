class Stone{

    constructor(x,y,width,height){
    var op = {
        restitution:0,
        friction:1
    }
        this.body = Bodies.rectangle(x,y,width,height,op)
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }

    
    
    display(){
    
        var pos = this.body.position;
        push ();
       // translate(this.body.position.x,this.body.position.y)
        //rectMode(CENTER);
        fill ("white");
       // rect(pos.x, pos.y, this.width, this.height);
        imageMode (CENTER);
        image(this.image,110,520,70,50);
        pop ();
    }
    }