class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity =  255 ;
        this.image = loadImage("box.png");
        World.add(world, this.body);
      }
      score(){
        if(this.visiblity < 0 && this.visiblity > -105){
          score++;
        }
      }
      display(){ 
        var pos =this.body.position;
        if(this.body.speed < 5){
      rectMode(CENTER);
      fill("green");
      image(this.image,pos.x,pos.y,this.width,this.height);
    }else{
          //do nothing
          World.remove(world , this.body)
          push();
          this.visiblity = this.visiblity - 5
          tint(255 , this.visiblity)
          image(this.image,pos.x,pos.y,this.width,this.height);
          pop();
          
        }
      }
    }