
var colors = ['red','orange','C6B38E','yellow','CAFFD0','green','8BB6F9','blue','purple','white','808A9F','pink']

var gradient = chroma.scale(colors).mode('lab')
function colorForProgress(pct){
  return gradient(pct).hex()
}



function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

   frameRate(60)

  rectMode(CENTER)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

   var r = now.progress.week*TWO_PI
   // var r = map(now.month,0,4,0,TWO_PI)
   var color = colorForProgress(now.progress.year)

   var x = 275
   if(now.am) {
    var y = map(now.progress.halfday, 0,1,125,275)
   }
   else {
    var y = map(now.progress.halfday, 0,1,275,125)
    }
   

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')


  push();
   translate(width /2, height/2);
    rotate(-r);
    fill(0)
   rect(0,0,200,200)
  pop()


  push();
    translate(width /2, height/2);
    rotate(-r);
    fill(255)
    rect(0,0,100,100)
  pop()

  push();
    noStroke()
    fill(color)
    circle(x,y,15)
  pop()

 
}

