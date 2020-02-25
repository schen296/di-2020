
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

var tri1Rot = 0
var tri2Rot = 0
var tri3Rot = 0

}

function draw() {
  var now=clock()

  var tri1Max = TWO_PI
  var tri2Max = TWO_PI
  var tri3Max = TWO_PI
 
  var tri1Rot = now.hours/24*tri1Max
  var tri2Rot = now.min/60*tri2Max
  var tri3Rot = now.sec/60*tri3Max

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')
  noStroke()

  // triangle(50,350,200,50,350,350)
    push();  //hours
  translate(width/2, height/2);
  rotate(tri1Rot);
  fill(0,0,255,55);
  polygon(0, 0, 200, 3)
  pop();

      push();  //minutes
  translate(width/2, height/2);
  rotate(tri2Rot);
  fill(0,255,0,55);
  polygon(0, 0, 200, 3)
  pop();

       push();  //seconds
  translate(width/2, height/2);
  rotate(tri3Rot);
  fill(255,0,0,55);
  polygon(0, 0, 200, 3)
  pop();
}
  
  function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
    endShape(CLOSE);
}