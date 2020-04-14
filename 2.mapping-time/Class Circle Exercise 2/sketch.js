function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}


function setup() {
  createCanvas(600, 600)
}

function draw(){
  var now = clock()
  background('white')
  noStroke()
  fill(0)

  
  // choose the spacing parameters for the grid
  // var colSpacing = 30

  
  
  // _.times(numRows, r => {
   
  //   _.times(numColumns, c => {
  //     var cellNumber = r*numColumns + c
  //     var x = c * colSpacing
  //     var y = r * rowSpacing

  //     var grey = map(r, 0, numRows, 0, 255)
  //     fill(grey)
   
  //     if (cellNumber < now.sec){
  //       circle(x, y, cellDiameter)
  //     }else if (cellNumber < totalCells){
  //       circle(x, y, 4)
  //     }
    
  //   })

  // })

  var rowSpacing = 90
  // var cellDiameter = 10
  var circleRadius = 30
  var dotDiameter = 10

  
  // determine the layout of the grid
  var totalDots = 60
  var perCircles = 10
  var numCircles = ceil(totalDots/perCircles)

  _.times(numCircles, r => {
      var circleX = 300
      var circleY = 65+r*rowSpacing
    _.times(perCircles, p => {
      var dotAngle = map(p,0,perCircles,0,360)
      var DotPoint = pointAt(circleX, circleY, dotAngle, circleRadius)
      
      var dotNumber = r*perCircles+p

      if (dotNumber<now.sec) {
        circle (DotPoint.x, DotPoint.y, dotDiameter)
      }
      // else ()
      // circle (DotPoint.x, DotPoint.y, dotDiameter)
    })
  })
}