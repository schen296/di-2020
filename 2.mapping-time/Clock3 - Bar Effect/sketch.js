var x = 0 
var y = 0  
var barHeight = 200
var maxWidth = 600 

function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())


}

function draw()
 {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

   var hoursWidth = map(now.hours, 0,24, 0,barHeight) 
   var minsWidth = map(now.min,  0,60, 0,barHeight)
   var secsWidth = map(now.sec,  0,60, 0,barHeight) 

   var nightColor = color("#152CA3")
   var mornColor = color("#A3B2FF")
   var colorSec = lerpColor(nightColor,mornColor,now.progress.day)
   var colorMin = lerpColor(mornColor,nightColor,now.progress.day)
   var colorHour = lerpColor(mornColor,nightColor,now.progress.day)


    fill(colorSec, 50) //seconds
    noStroke()
  rect(x, y, maxWidth, secsWidth)
  
    fill(colorMin, 75) //mins
    noStroke()
  rect(x, 200, maxWidth, minsWidth)

    fill(colorHour) //hours
    noStroke()
  rect(x, 400, maxWidth, hoursWidth)
  

  }