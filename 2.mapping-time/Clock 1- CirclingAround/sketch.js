var x = 200
var y = 200
var d = 300 //d = diameter
function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)
  background(0)

  noFill()
  stroke(255)
  
  circle(x,y,d)
  circle(x,y,d/2)
  circle(x,y,d/2/2) 

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  var now=clock()
  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('black')

  noFill()
  stroke(150)

  // var hourangle=map(now.hours,0,24,0,TWO_PI)
  // var minuteangle=map(now.min,0,60,0,TWO_PI)
  // var secondangle=map(now.sec,0,60,0,TWO_PI)

  var hourangle=map(now.hours,0,24,0,360)
  var minuteangle=map(now.min,0,60,0,360)
  var secondangle=map(now.sec,0,60,0,360)

  // arc(200,200,300,300,0-HALF_PI,hourangle-HALF_PI)
  // arc(200,200,150,150,0-HALF_PI,minuteangle-HALF_PI)
  // arc(200,200,75,75,0-HALF_PI,secondangle-HALF_PI) 


  circle(x,y,d)
  circle(x,y,d/2)
  circle(x,y,d/2/2)

var redPt=pointAt(200,200,secondangle,d/2/2/2)
var yellowPt=pointAt(200,200,minuteangle,d/2/2)
var bluePt=pointAt(200,200,hourangle,d/2)

fill('red')
circle(redPt.x, redPt.y, 15)

fill('yellow')
circle(yellowPt.x,yellowPt.y,15)

fill ('blue')
circle(bluePt.x,bluePt.y,15)

stroke(255,65)
line(200,200,redPt.x,redPt.y)
line(200,200,yellowPt.x,yellowPt.y)
line(200,200,bluePt.x,bluePt.y)

}