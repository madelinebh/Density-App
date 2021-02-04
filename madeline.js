
//Creating boat object
class Boat {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
        this.w = 200;
        this.h = 50; 
        this.r = 165;
        this.g = 42;
        this.b = 42;
    }

    show() {
        //brown body
        fill(165, 42, 42);
        rect(this.x, this.y, this.w, this.h);
        //mast
        rect(this.x + this.w/2, this.y - 40, 20, 40)
        //sail
        fill(0, 0, 255);
        triangle(this.x + 20 + this.w/2, this.y, this.x + this.w, this.y, this.x + 20 + this.w/2, this.y - 40)
    }//end of show function
//a function to make the boat sail right
    sailAway() {
            // making the boat sail to the right 
        this.x ++
            // if the boat sails off the screen
        // bring it back from the left
            if (this.x > 400) {
                this.x = - this.w;
            }
    } // end of sailAway function

} // end of boat function