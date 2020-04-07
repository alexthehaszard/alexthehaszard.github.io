let counter = 0; //counts the time
let new_counter; //the counter reformatted to be displayed
let seconds = 0; //the seconds
let new_seconds; //seconds reformatted
let minutes = 0; //the minutes, they do not need to be reformatted (yet)
let timerStarted = false; //tell the draw loop whether or not the timer has started
let keyStopped = false; //used to stop the timer from starting itself when it is stopped
let justSolved = false; //used to tell the draw loop to log the time in console
let scram1; //the scramble
let current_time; //the time formatted

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(timer, 10);
  sc = new scramble();  //create the scramble function
  scram1 = sc.genScram(); //generate first scramble
}

function draw() {
  background(51);
  fill(255);
  textFont("Arial");
  textSize(windowWidth / 8);
  textAlign("center");
  new_seconds = String(seconds).padStart(2, '0'); //make the seconds always have 2 digits
  new_counter = String(counter).padStart(2, '0'); //make the counters always have 2 digits
  if (minutes > 0) {
	current_time = minutes + ":" + new_seconds + "." + new_counter; //output the current time with minutes if there has been more than one minute
    text(current_time, width / 2, height / 2);
  } else {
	current_time = seconds + "." + new_counter;
    text(current_time, width / 2, height / 2 + windowWidth / 30); //output the current time without minutes if it has not been a minute yet
  }
  if (justSolved == true) {
	console.log(current_time); //log the previous time when it has been solved
	justSolved = false; //stop the if statement from being called again
  }
  sc.show(scram1); //show the scramble text
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //change the canvas size automatically
}

function timer() {
  if (keyStopped == false && timerStarted == true) {
    counter++; //count up if the timer is going
  }
  if ((counter + 1) % 101 == 0) {
    counter = 0; //if the counter is at 100 then put it back to 0
    seconds++; //and then increase seconds by 1
  }
  if ((seconds + 1) % 61 == 0) {
    seconds = 0; //if it has been 60 seconds then put seconds to 0
    minutes++; //and increase minutes by 1
  }
}

function keyPressed() {
  if (key === ' ') { //if the key is spacebar
    if (timerStarted == true) {
      keyStopped = true; //if the timer is started then stop the timer
      scram1 = sc.genScram(); //generate a new scramble
	  justSolved = true; //tell the draw loop to output the solve to the console
    }
  }
}

function touchStarted() { //same as keyPressed for mobile
  if (timerStarted == true) {
    keyStopped = true; 
    scram1 = sc.genScram();  
	justSolved = true;
  }
}

function keyReleased() {
  if (key === ' ') { //if the key is spacebar
    if (timerStarted == false) {
      timerStarted = true; //if the timer is not started start the timer
      keyStopped = false; //when the key is pressed to stop the timer this is used to make sure that is will not start again when the key is released
      counter = 0; //reset the timer
      seconds = 0;
      minutes = 0;
    } else {
      timerStarted = false; //stop the timer
    }
  }
}

function touchEnded() { //same as keyReleased for mobile
  if (timerStarted == false) {
    timerStarted = true;
    keyStopped = false;
    counter = 0;
    seconds = 0;
    minutes = 0;
  } else {
    timerStarted = false;
  }
}

function mousePressed() { //the mobile controls are automatically bound to mouse to these are to disable that functionality
  return;
}

function mouseReleased() {
  return;
}