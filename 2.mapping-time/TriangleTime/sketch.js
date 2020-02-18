
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

  fill(150,150,150,75)
  stroke(0,0,0)
  
  triangle(50,350,350,350,200,50)
  triangle(100,200,300,180,270,360)

}