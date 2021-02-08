// The density formula
class Formula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // Drawing the formula
    show() {
        // Drawing the heart
       noStroke();
       fill('red');
	   ellipse(this.x, this.y, 60);
	   ellipse(this.x + 50, this.y, 60);
	   triangle(this.x - 29, this.y + 10, this.x + 79, this.y + 10, this.x + 25, this.y + 85);
        
       // Drawing the formula
       stroke(0);
       fill('black');
       textSize(23);
       textFont('Georgia');
       text("D = M / V", this.x - 23, this.y + 10);
       
       
    }
}
    