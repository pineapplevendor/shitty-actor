function setup() {

}

function draw() {
  fill(currentSentiment);
  ellipse(50, 50, 80, 100);
  fill("#7FFF00"); //green
  circle(35, 35, 20);
  circle(65, 35, 20);
  triangle(45, 60, 50, 40, 55, 60);
  rect(40, 70, 20, 10);
}
