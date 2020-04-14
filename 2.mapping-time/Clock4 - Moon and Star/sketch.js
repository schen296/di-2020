
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())


}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()


  background('black')

  var mornMoon = color (0,60)
  var nightMoon = color ("white")
  var amMoon = lerpColor (mornMoon, nightMoon, now.progress.halfday)
  var pmMoon = lerpColor (nightMoon, mornMoon, now.progress.halfday)
  var x = map(now.progress.moon, 0,1,200,400)

  var r = now.progress.week*TWO_PI
  

  if(now.am) {
    filter(BLUR, 10)
    fill (amMoon)
    stroke(amMoon)
  } 
  else {
    filter(BLUR, 10)
    fill(pmMoon)
    stroke(pmMoon)
   
  }
    circle(200,200,300)

  noStroke()
  fill('black')
  circle(x,200,300)

push();
  translate(width /2, height/2);
  rotate(-r);
  fill(255,60)
  star(0, 0, 50, 150,5)
  pop()

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  circle(x,y-radius2,5)
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}