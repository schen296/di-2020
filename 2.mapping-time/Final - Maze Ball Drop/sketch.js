// var colorsHours = ['red','orange','C6B38E','yellow','CAFFD0','green','8BB6F9','blue','purple','white','808A9F','pink']

// var gradientHours = chroma.scale(colorsHours).mode('lab')
// function colorForHours(pct){
//   return gradientHours(pct).hex()

var colorsYear = ['green','yellow','orange', 'blue']

var gradientYear = chroma.scale(colorsYear).mode('lab')
function colorForProgress(pct){
  return gradientYear(pct).hex()
}


function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)
  rectMode(CENTER)
 
  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
    // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  var Day = color('yellow')
  var Night = color('blue')
  var amColor = lerpColor(Day,Night,now.progress.halfday)
  var pmColor = lerpColor(Night,Day,now.progress.halfday)

  var colorYear = colorForProgress(now.progress.year)
  // var colorHours = colorforHours(now.progress.day)

  // var valueHour1 = color('white')
  // var valueHour2 = color('black')
  // var valueHour = lerpColor(valueHour1,valueHour2,now.progress.hour)
  // var valueYear = lerpColor (valueHour1,valueHour2,now.progress.year)


   background('white')

   noStroke() 
   fill(colorYear)
   rect(150,300,300,600)

   if(now.am) {
    noStroke()
    fill(amColor)
    rect(450,300,300,600)
   }
   else {
    noStroke()
    fill(pmColor)
    rect(450,300,300,600)
   }

   // noStroke()
   // fill(valueHour)
   // rect(450,500,300,200)

   // noStroke()
   // fill(valueYear)
   // rect(150,500,300,200)
  
   var ySpacing = 100

   noStroke // track
   fill('white')
   rect(300,50,20,100)
   rect(180,90,260,20)
   rect(60,50+ySpacing,20,100)
   rect(180,90+ySpacing,260,20)
   rect(300,50+ySpacing*2,20,100)
   rect(180,90+ySpacing*2,260,20)
    rect(60,50+ySpacing*3,20,100)

  rect(420,90,260,20)
  rect(540,50+ySpacing,20,100)
  rect(420,90+ySpacing,260,20)
  rect(420,90+ySpacing*2,260,20)
  rect(540,50+ySpacing*3,20,100)

    var s = 1/7

  if (now.progress.week<s) {
    var y = map(now.progress.week,0,s,-7.5,90)
    var x = 300
  }
  else if (now.progress.week<s*2)  {
      var x = map(now.progress.week,s,s*2,300, 60)
      var y = 90
  }
  else if (now.progress.week<s*3) {
    var x = 60
    var y = map(now.progress.week,s*2,s*3,90, 190)
  }
  else if (now.progress.week<s*4) {
    var x = map(now.progress.week,s*3,s*4,60,300)
    var y = 190  
  }
  else if (now.progress.week<s*5) {
    var x = 300
    var y = map(now.progress.week,s*4,s*5,190, 290)
  }
  else if (now.progress.week<s*6) {
    var x = map(now.progress.week,s*5,s*6,300, 60)
    var y = 290
  }
  else if (now.progress.week<s*7) {
    var x = 60
    var y = map(now.progress.week,s*6,s*7,290, 407.5)
  }
    noStroke()
   fill('purple')
   circle(x,y,15)

    var t = 1/7

  if (now.progress.min<t) {
    var b = map(now.progress.min,0,s,-7.5,90)
    var a = 300
  }
  else if (now.progress.min<s*2)  {
      var a = map(now.progress.min,s,s*2,300, 540)
      var b = 90
  }
  else if (now.progress.min<s*3) {
    var a = 540
    var b = map(now.progress.min,s*2,s*3,90, 190)
  }
  else if (now.progress.min<s*4) {
    var a = map(now.progress.min,s*3,s*4,540,300)
    var b = 190  
  }
  else if (now.progress.min<s*5) {
    var a = 300
    var b = map(now.progress.min,s*4,s*5,190, 290)
  }
  else if (now.progress.min<s*6) {
    var a = map(now.progress.min,s*5,s*6,300, 540)
    var b = 290
  }
  else if (now.progress.min<s*7) {
    var a = 540
    var b = map(now.progress.min,s*6,s*7,290, 407.5)
  }

   noStroke()
   fill('red')
   circle(a,b,15)

  push()
  var colSpacing = 30
  var rowSpacing = 30
  var cellRadius = 15
 
  
  // determine the layout of the grid
  translate (315,425)
  var totalCells = 60
  var numColumns = 10
  var numRows = ceil(totalCells/numColumns)
  
  
  _.times(numRows, r => {
   
    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      // var grey = map(r, 0, numRows, 0, 255)
      fill('red')
   
      if (cellNumber < now.min){
        circle(x, y, cellRadius)
      }else if (cellNumber < totalCells){
        circle(x, y, 4)
      }
    
    })

  })
  pop()

  push()
  translate (30,410)
  var colSpacing = 80
  var rowSpacing = 15
  var cellRadius = 15
 
  var totalCells = 52
  var numColumns = 4
  var numRows = ceil(totalCells/numColumns)
  
  
  _.times(numRows, r => {
   
    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      // var grey = map(r, 0, numRows, 0, 255)
      fill('purple')
   
      if (cellNumber < 52.1429*now.progress.year){
        circle(x, y, cellRadius)
      }else if (cellNumber < totalCells){
        circle(x, y, 4)
      }
    
    })

  })
  pop()
}