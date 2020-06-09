var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");

var output1 = document.getElementById("value1");
var output2 = document.getElementById("value2");
var output3 = document.getElementById("value3");

// Lists to store previouse values / ratings

let col1List = [];
let col2List = [];
let col3List = [];
let xList = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360];
let yList = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360];

let step = 80;
let counter = -1;

let buttonPressed = false;

function setup() {
  createCanvas(1000, 1000);

}

// Display the default slider value

output1.innerHTML = slider1.value; 
output2.innerHTML = slider2.value; 
output3.innerHTML = slider3.value; 

// Updates the current slider value each time slider is dragged

slider1.oninput = function() {
  output1.innerHTML = this.value;
} 

slider2.oninput = function() {
  output2.innerHTML = this.value;
} 

slider3.oninput = function() {
  output3.innerHTML = this.value;
} 

function draw(){

  noStroke();
  fill(slider1.value, slider2.value, slider3.value);
  rect(150, 10, 100, 40, 20);
  fill(255, 255, 255, 255);
  textAlign(CENTER);
  text('Submit', 200, 39);
  textSize(25);
  submitButton()
  buttonPressed = false;
  fill(0,0,0,0);
  stroke(100,100,100,100);
  strokeWeight(0.2); // Default
  rect(0, 80, 400, 400);
  drawRectangles()
  //console.log(step);


}

// Button Functions

function mousePressed() {
    buttonPressed = true;
  }

function keyPressed() {
    buttonPressed = true;
  }

function submitButton() {
  if (buttonPressed == true) {
    if (mouseX > 150 && mouseX < 250 && mouseY > 10 && mouseY < 60){
          col1List.push(int(slider1.value));
          col2List.push(int(slider2.value));
          col3List.push(int(slider3.value));
          counter += 1;
          
    }
  }
}

// Create rectangle based on slider values
 
function drawRectangles() {
    for (let i = 0; i < col1List.length; i++) {
          fill(col1List[i], col2List[i], col3List[i], 255); 
          noStroke();
          rect(xList[counter], step, 40, 40);  
          if (counter > 9) {
            counter = 0;
            step += 40;
          }
    }
}

  
