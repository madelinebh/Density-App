// formula = new Formula(315, 30)


var boat;
var formula; 

function setup() {
  createCanvas(400, 400);
  boat = new Boat(25, 300)
  formula = new Formula(315, 30)
}

function draw() {
  background(220);
  ocean();
  formula.show()
  boat.show()
  if (keyIsPressed === true) {
      boat.sailAway();
  }
}