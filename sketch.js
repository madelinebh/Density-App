var boat;

function setup() {
  createCanvas(400, 400);
  boat = new boat(25, 300)
}

function draw() {
  background(220);
  boat.show()
  if (keyIsPressed === true) {
      boat.sailAway();
  }
}