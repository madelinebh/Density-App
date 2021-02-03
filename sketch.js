var boat;

function setup() {
  createCanvas(400, 400);
  boat = new Boat(25, 300)
}

function draw() {
  background(220);
  boat.show()
  if (keyIsPressed === true) {
      boat.sailAway();
  }
}