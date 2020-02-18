
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  
  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  noFill()
  stroke(150)

  circle(200,200,50)
  circle(200,200,150)
  circle(200,200,300)

  fill(150,150,150,75)
  stroke(150)

  circle(200,50,10)
  circle(200,125,10)
  circle(225,200,10)





}