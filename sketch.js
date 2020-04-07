let counter = 0;
let new_counter;
let outputc;
let seconds = 0;
let new_seconds;
let minutes = 0;
let timerStarted = false;
let keyStopped = false;
let justSolved = false;
let scram1;
let current_time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(timer, 10);
  sc = new scramble();
  scram1 = sc.genScram();
}

function draw() {
  background(51);
  fill(255);
  textFont("Arial");
  textSize(windowWidth / 8);
  textAlign("center");
  new_seconds = String(seconds).padStart(2, '0');
  new_counter = String(counter).padStart(2, '0');
  outputc = String(counter + 1).padStart(2, '0');
  if (minutes > 0) {
	current_time = minutes + ":" + new_seconds + "." + new_counter;
    text(current_time, width / 2, height / 2);
  } else {
	current_time = seconds + "." + new_counter;
    text(current_time, width / 2, height / 2 + windowWidth / 30);
  }
  if (justSolved == true) {
	console.log(current_time);
	justSolved = false;
  }
  sc.show(scram1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function timer() {
  if (keyStopped == false && timerStarted == true) {
    counter++;
  }
  if ((counter + 1) % 101 == 0) {
    counter = 0;
    seconds++;
  }
  if ((seconds + 1) % 61 == 0) {
    seconds = 0;
    minutes++;
  }
}

function keyPressed() {
  if (key === ' ') {
    if (timerStarted == true) {
      keyStopped = true;
      scram1 = sc.genScram();
	  justSolved = true;
    }
  }
}

function touchStarted() {
  if (key === ' ') {
    if (timerStarted == true) {
      keyStopped = true;
      scram1 = sc.genScram();
	  justSolved = true;
    }
  }
}

function keyReleased() {
  if (key === ' ') {
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
}

function touchEnded() {
  if (key === ' ') {
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
}