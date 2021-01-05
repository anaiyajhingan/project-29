class Box {
    constructor(x, y, width, height) {
     var options = {
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
   }
   display(){
     fill("orange");
     var angle = this.body.position;
     rect(angle.x,angle.y,this.width,this.height)
   }
 };
 
 