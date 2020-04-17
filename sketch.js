let counter = 0; //counts the time
let new_counter; //the counter reformatted to be displayed
let seconds = 0; //the seconds
let new_seconds; //seconds reformatted
let minutes = 0; //the minutes
let new_minutes = 0; //minutes reformatted
let hours = 0; //hours 
let tcounter = 0; //counts the time
let new_tcounter; //the counter reformatted to be displayed
let tseconds = 0; //the seconds
let new_tseconds; //seconds reformatted
let tminutes = 0; //the minutes
let timerStarted = false; //tell the draw loop whether or not the timer has started
let keyStopped = false; //used to stop the timer from starting itself when it is stopped
let justSolved = false; //used to tell the draw loop to log the time in console
let scram1; //the scramble
let current_time; //the full time formatted
let times = [];
let threeTimes = [];
let twoTimes = [];
let fourTimes = [];
let scramLength = 20;
let scram2;
let scramMoves = 6;
let scramType = "3x3";
let oldScram = "";
let red = "#ff0000";
let green = "#00ff00";
let white = 255;
let txtClr = white;
let strtTmr = 0;
let testing = false;
let usingStack = false;
let prevPacket;
let timerTime;
let stats;
let showSolve1;
let showSolve2;
const stackmat = new Stackmat();

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(timer, 10);
  setInterval(startTimer, 100); //sets up the colors for the timer

  stats = new Stats();

  sc2 = new Scramble();
  scram1 = sc2.genScram(scramLength, scramMoves);

  showSolve1 = localStorage.length - 1;
  showSolve2 = localStorage.length - 2;



  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(i) != undefined) {
      times[i] = localStorage.getItem(i);
      if (times[i][0] == 3) {
        threeTimes[threeTimes.length] = times[i];
        //console.log("threeTimes added" + threeTimes[threeTimes.length - 1]);
      } else if (times[i][0] == 2) {
        twoTimes[twoTimes.length] = times[i];
        //console.log("twoTimes added" + twoTimes[twoTimes.length - 1]);
      } else if (localStorage.getItem(localStorage.length - 1)[0] == 4) {
        fourTimes[fourTimes.length] = localStorage.getItem(localStorage.length - 1);
        //console.log("twoTimes added" + twoTimes[twoTimes.length - 1]);
      }
    }
  }
}

function draw() {
  background(50);
  textFont("Arial");
  textSize(windowWidth / 8);
  textAlign("center");
  fill(txtClr);
  new_seconds = String(seconds).padStart(2, '0'); //make the seconds always have 2 digits
  new_counter = String(counter).padStart(2, '0'); //make the counters always have 2 digits
  new_minutes = String(minutes).padStart(2, '0'); //make the minutes always have 2 digits
  new_tseconds = String(tseconds).padStart(2, '0'); //make the seconds always have 2 digits
  new_tcounter = String(tcounter).padStart(2, '0'); //make the counters always have 2 digits

  if (usingStack == true) {
    if (timerStarted == false) {
      if (tminutes > 0) {
        current_time = tminutes + ":" + new_tseconds + "." + new_tcounter; //output the current time with minutes if there has been more than one minute
        text(current_time, width / 2, height / 2 + windowWidth / 30);
      } else if (tminutes < 1) {
        current_time = tseconds + "." + new_tcounter;
        text(current_time, width / 2, height / 2 + windowWidth / 30); //output the current time without minutes if it has not been a minute yet
      }
    } else {
      if (minutes > 0 && hours == 0) {
        current_time = minutes + ":" + new_seconds + "." + new_counter; //output the current time with minutes if there has been more than one minute
        text(current_time, width / 2, height / 2 + windowWidth / 30);
      } else if (minutes < 1) {
        current_time = seconds + "." + new_counter;
        text(current_time, width / 2, height / 2 + windowWidth / 30); //output the current time without minutes if it has not been a minute yet
      } else if (hours > 0) {
        current_time = hours + ":" + new_minutes + ":" + new_seconds + "." + new_counter; //output the current time with hours if there has been more than one hour
        text(current_time, width / 2, height / 2 + windowWidth / 30);
      }
    }
  } else {
    if (minutes > 0 && hours == 0) {
      current_time = minutes + ":" + new_seconds + "." + new_counter; //output the current time with minutes if there has been more than one minute
      text(current_time, width / 2, height / 2);
    } else if (minutes < 1) {
      current_time = seconds + "." + new_counter;
      text(current_time, width / 2, height / 2 + windowWidth / 30); //output the current time without minutes if it has not been a minute yet
    } else if (hours > 0) {
      current_time = hours + ":" + new_minutes + ":" + new_seconds + "." + new_counter; //output the current time with hours if there has been more than one hour
      text(current_time, width / 2, height / 2);
    }
  }

  if (justSolved == true) {
    localStorage.setItem(localStorage.length, scramType + "-" + current_time + "-" + oldScram);
    console.log("solve: " + (localStorage.length) + " " + localStorage.getItem(localStorage.length - 1));
    times[localStorage.length - 1] = localStorage.getItem(localStorage.length - 1);
    showSolve1++;
    showSolve2++;
    if (localStorage.getItem(localStorage.length - 1)[0] == 3) {
      threeTimes[threeTimes.length] = localStorage.getItem(localStorage.length - 1);
      //console.log("threeTimes added" + threeTimes[threeTimes.length - 1]);
    } else if (localStorage.getItem(localStorage.length - 1)[0] == 2) {
      twoTimes[twoTimes.length] = localStorage.getItem(localStorage.length - 1);
      //console.log("twoTimes added" + twoTimes[twoTimes.length - 1]);
    } else if (localStorage.getItem(localStorage.length - 1)[0] == 4) {
      fourTimes[fourTimes.length] = localStorage.getItem(localStorage.length - 1);
      //console.log("twoTimes added" + twoTimes[twoTimes.length - 1]);
    }
    justSolved = false; //stop the if statement from being called again
  }
  fill(white);
  sc2.show(scram1); //show the scramble text
  stats.show();
  stats.showInfo();
  stats.showStats(times[showSolve1], times[showSolve2]);
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
  if (usingStack == false) {
    if (key === ' ') { //if the key is spacebar
      if (timerStarted == true) {
        keyStopped = true; //if the timer is started then stop the timer
        oldScram = scram1;
        scram1 = sc2.genScram(scramLength, scramMoves); //generate a new scramble
        justSolved = true; //tell the draw loop to output the solve to the console
      } else {
        strtTmr = 0;
        txtClr = red;
        testing = true;
        startTimer();
      }
    }
  }
  if (key === '2') {
    scramLength = 8; //changes scramble type to 2x2
    scramMoves = 3;
    scramType = "2x2";
    scram1 = sc2.genScram(scramLength, scramMoves);
  }
  if (key === '3') {
    scramLength = 20; //changes scramble type to 3x3
    scramMoves = 6;
    scramType = "3x3";
    scram1 = sc2.genScram(scramLength, scramMoves);
  }
  if (key === '4') {
    scramLength = 38; //changes scramble type to 4x4
    scramMoves = 9;
    scramType = "4x4";
    scram1 = sc2.genScram(scramLength, scramMoves);
  }
  if (key === 's') {
    usingStack = true;
    keyStopped = false;
    stackmat.start();
  }
  if (key === 'c') {
    usingStack = false;
    counter = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
  }
}

function touchStarted() { //same as keyPressed for mobile
  if (timerStarted == true) {
    keyStopped = true; //if the timer is started then stop the timer
    oldScram = scram1;
    scram1 = sc2.genScram(scramLength, scramMoves); //generate a new scramble
    justSolved = true; //tell the draw loop to output the solve to the console
  } else {
    strtTmr = 0;
    txtClr = red;
    testing = true;
    startTimer();
  }
}

function keyReleased() {
  if (key === ' ') { //if the key is spacebar
    if (timerStarted == false && txtClr == green) {
      txtClr = white;
      timerStarted = true; //if the timer is not started start the timer
      keyStopped = false; //when the key is pressed to stop the timer this is used to make sure that is will not start again when the key is released
      counter = 0; //reset the timer
      seconds = 0;
      minutes = 0;
    } else if (timerStarted == true && txtClr == white) {
      timerStarted = false; //stop the timer
    } else if (txtClr == red) {
      testing = false;
      txtClr = white;
    }
  }
}

function touchEnded() { //same as keyReleased for mobile
  if (timerStarted == false && txtClr == green) {
    txtClr = white;
    timerStarted = true; //if the timer is not started start the timer
    keyStopped = false; //when the key is pressed to stop the timer this is used to make sure that is will not start again when the key is released
    counter = 0; //reset the timer
    seconds = 0;
    minutes = 0;
  } else if (timerStarted == true && txtClr == white) {
    timerStarted = false; //stop the timer
  } else if (txtClr == red) {
    testing = false;
    txtClr = white;
  }
}

function mousePressed() { //the mobile controls are automatically bound to mouse to these are to disable that functionality
  return;
}

function mouseReleased() {
  return;
}

function startTimer() {
  strtTmr++;
  if (strtTmr == 5) {
    if (testing == true) {
      txtClr = green; //changes the color of the timer when it is ready
    }
  }
}

function mouseClicked() {
  let op = stats.previous(showSolve1, showSolve2);
  showSolve1 = op[0];
  showSolve2 = op[1];
  let removed = stats.removeTime(times, showSolve1, showSolve2);
  showSolve1 = removed[0];
  showSolve2 = removed[1];
}

stackmat.on('packetReceived', function (packet) {
  if (usingStack == true) {
    timerTime = packet.timeInMilliseconds;
    if (timerStarted == true && tcounter == 0 && prevPacket == 0 && timerTime == 0) {
      timerStarted = false;
    }
    else if (packet.timeInMilliseconds == prevPacket && timerStarted == true) {
      timerStarted = false;
      justSolved = true;
      oldScram = scram1;
      scram1 = sc2.genScram(scramLength, scramMoves);
    }
    tcounter = Math.trunc((timerTime % 1000) / 10);
    tseconds = Math.trunc(timerTime / 1000);
    if (tseconds > 59) {
      tseconds = tseconds % 60;
    }
    tminutes = Math.trunc(timerTime / 60000);

    prevPacket = packet.timeInMilliseconds;
  }
})

stackmat.on('started', function (packet) {
  if (usingStack == true) {
    keyStopped = false;
    timerStarted = true;
    seconds = 0;
    counter = 0;
    minutes = 0;
  }
})

stackmat.on('reset', function (packet) {
  console.log('reset');

})