function setup() {
  // set the width & height of the sketch
  createCanvas(400, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 20



 //  // draw as many circles as the current `now.hours` value
 //  // using _.times. The first circle's y position should be at 100
 //  // and each circle below it should be `spacing` pixels below it
 //  _.times(now.hours,i => {
 //    fill(0)
 //    circle(100, 20+i*spacing, 20)
 //  })
 
 //  // draw as many circles as the current now.min value
 //  // by creating a list from 0 .. `now.min` using _.range
 //  // and then stepping through that list using _.each
 //  _.times(now.min, i=> {
 //  fill(100)
 //  circle(200, 20+i*spacing, 20)
 //  })
  
 //  // draw as many circles as the current `now.sec` value
 //  // using `for (;;){...}` syntax
 // _.times(now.min, i=> {
 //  fill(200)
 //  circle(300, 20+i*spacing, 20)
 //  })
   _.times(now.hours, i=> {fill(0,0,255,10)
    circle(100,100,20+i*spacing)
   }) 
   
    _.times(now.min, i=> {fill(0,255,0,5)
    circle(200,300,20+i*spacing)
   }) 
   
      _.times(now.sec, i=> {fill(255,0,0,5)
    circle(300,500,20+i*spacing)
   }) 
   
}