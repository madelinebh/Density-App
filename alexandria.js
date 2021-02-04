
 class DaBoat {
   constructor(x,y){
    this.x = x;
       this.y = y;
       this.w = 200;
       this.h = 50;
       this.r = 150;
       this.g = 50;
       this.b = 150;
   }
     show(){
      fill(this.r,this.g,this.b);
         rect(this.x,this.y,this.h);
     }
 }
//use arcs to create the clouds
