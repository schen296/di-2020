var colors = ['red','orange','yellow','green','blue','purple','pink']

var gradient = chroma.scale(colors).mode('lab')
function colorForProgress(pct){
  return gradient(pct).hex()
}


function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)
  rectMode(CENTER)
 
  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

   var value1 = color(225)
   var value2 = color("black")
   var valueNow = lerpColor(value1,value2,now.progress.year)

  var colorNow = colorForProgress(now.progress.month)

  var s = 1/7

  if ((now.progress.week<=s) & (now.progress.week>=0)) {
    var y = map(now.progress.week,0,1,-7.5,90)
    var x = 60
  }
  else if ((now.progress.week<=s*2) & (now.progress.week>=s)) {
      var x = map(now.progress.week,0,1,60, 340)
      var y = 90
  }
  else if (now.progress.week<=s*3) {
    var x = 340
    var y = map(now.progress.week,0,1,90, 190)
  }
  else if (now.progress.week<=s*4) {
    var x = map(now.progress.week,0,1,340,60)
    var y = 190  
  }
  else if (now.progress.week<=s*5) {
    var x = 60
    var y = map(now.progress.week,0,1,190, 290)
  }
  else if (now.progress.week<=s*6) {
    var x = map(now.progress.week,0,1,60, 340)
    var y = 290
  }
  else if (now.progress.week<=s*7) {
    var x = 340
    var y = map(now.progress.week,0,1,290, 407.5)
  }


  // var y1 = map(now.progress.week,0,1,0,90)

   background('white')

   noStroke()
   fill(valueNow)
   rect(200,200,400,400)

   var ySpacing = 100

   noStroke // track
   fill('white')
   rect(60,50,20,100)
   rect(200,90,300,20)
   rect(340,50+ySpacing,20,100)
   rect(200,90+ySpacing,300,20)
   rect(60,50+ySpacing*2,20,100)
   rect(200,90+ySpacing*2,300,20)
   rect(340,50+ySpacing*3,20,100)

   noStroke()
   fill(colorNow)
   circle(x,y,15)

}