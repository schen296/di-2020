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

//   var r=random(255)
//   var g = random (255)
//   var b = random (255)

//    let from=color(255,255,255) 
//    let to=color(r,g,b);
//     amt=0;

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



  //  let from=color(255,255,255) 
  //  let to=color(random(255),random(255),random(255));
  //   amt=0;

  //  // let interA=lerpColor(from, to, 0.1)
  //  // let interB=lerpColor (from,to,1)

  //   fill(lerpColor(from, to, smoothstep(0.3,0.7,amt);
  // amt += 0.01;
  // if(amt >= 1){
  //   amt = 0.0;
  //   from = to;
  //   to = color(random(255),random(255),random(255));
  // }

   // let secschange = map(now.sec, interA, interB, 0, maxWidth) 

    fill(255,0,0,30) //seconds
    noStroke()
  rect(x, y, maxWidth, secsWidth)
  
    fill(255,0,0,50) //mins
    noStroke()
  rect(x, 200, maxWidth, minsWidth)

    fill(255,0,0,70) //hours
    noStroke()
  rect(x, 400, maxWidth, hoursWidth)
  

  }