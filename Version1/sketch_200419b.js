//slider xpos
var x_value_red = 0;
var x_value_green = 0;
var x_value_blue = 0;

//ratingbar x-Position
var xRatingbar = 200;

//ratingbar y-Position
var yRatingbar_red = 150;
var yRatingbar_green = 250;
var yRatingbar_blue = 350;

var ratingbarWidth = 510;
var ratingRadius = 25;

var xOutputRating = xRatingbar;
var yOutputRating = 450;

function setup() {
  
  createCanvas(1000, 800);
  
  noLoop();
 
}


function draw() {
  //remove();
  //ratingbars
  var red = color(255, 0, 0);
  var white = color(255, 255, 255);
  var green = color(0,128,0);
  var blue = color(0,0,255);
  
  noFill();
  setGradient(xRatingbar, yRatingbar_red, ratingbarWidth, 50, white, red);
  stroke(0);
  rect(xRatingbar,yRatingbar_red,ratingbarWidth,50);
  //circle(xRatingbar,yRatingbar_red+ratingRadius,50);
  //circle(xRatingbar + ratingbarWidth,yRatingbar_red + ratingRadius,50);
  
  setGradient(xRatingbar, yRatingbar_green, ratingbarWidth, 50, white, green);
  stroke(0);
  rect(xRatingbar,yRatingbar_green,ratingbarWidth,50);
  //circle(xRatingbar,yRatingbar_green+ratingRadius,50);
  //circle(xRatingbar + ratingbarWidth,yRatingbar_green + ratingRadius,50);   
  
  setGradient(xRatingbar, yRatingbar_blue, ratingbarWidth, 50, white, blue);
  stroke(0);
  rect(xRatingbar,yRatingbar_blue,ratingbarWidth,50);
  //circle(xRatingbar,yRatingbar_blue+ratingRadius,50);
  //circle(xRatingbar + ratingbarWidth,yRatingbar_blue + ratingRadius,50);
  

  //ratingcircles
  fill(355);
  circle(x_value_red + xRatingbar, yRatingbar_red + ratingRadius, ratingRadius * 2);
  
  fill(355);
  circle(x_value_green + xRatingbar, yRatingbar_green + ratingRadius, ratingRadius * 2);
  
  fill(355);
  circle(x_value_blue + xRatingbar, yRatingbar_blue + ratingRadius, ratingRadius * 2);
  
}

function mouseDragged() {
  if(mouseY >= yRatingbar_red && mouseY <= yRatingbar_red + 2*ratingRadius && mouseX >= xRatingbar && mouseX <= xRatingbar + ratingbarWidth){
    x_value_red = mouseX - xRatingbar;
    redraw();
  }
  
  if(mouseY >= yRatingbar_green && mouseY <= yRatingbar_green + 2*ratingRadius && mouseX >= xRatingbar && mouseX <= xRatingbar + ratingbarWidth){
    x_value_green = mouseX - xRatingbar;
    redraw();
  }
  
  if(mouseY >= yRatingbar_blue && mouseY <= yRatingbar_blue + 2*ratingRadius && mouseX >= xRatingbar && mouseX <= xRatingbar + ratingbarWidth){
    x_value_blue = mouseX - xRatingbar;
    redraw();
  }
  
}

function addRating(){
   console.log("You're colors are: red: "+ x_value_red / 2 +", blue:" + x_value_blue / 2 + ", green: "  + x_value_green / 2);
   
   fill(color(x_value_red / 2, x_value_green / 2, x_value_blue / 2));
   rect(xOutputRating, yOutputRating, 50, 50);
   xOutputRating += 50;
   
   if(xOutputRating > 600) {
      yOutputRating += 50;
      xOutputRating = xRatingbar;
   }
}


function setGradient(x, y, w, h, c1, c2) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
}
