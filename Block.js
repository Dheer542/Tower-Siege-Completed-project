class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.04
      }
      this.visiblity = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
    // Matter.World.add(world, this.body);
     World.add(world, this.body); 
    }
    score(){
        if (this.visiblity < 0 && this.visiblity > -1005) {
            score++;
        }
    }
    display(){
     //   push();
        if (this.body.speed < 3) {
            var angle = this.body.angle;
            var pos =this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
           // fill("brown");
            rect(0,0, this.width, this.height);
            pop();
        }else{
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity-5;
            pop();
        }
     // pop();
     
    }
  };