function scramble() {
  
  this.show = function(txt) {
    textAlign("center");
    textSize(windowWidth / 30);
    text(txt, width/2, windowHeight / 12);
  }
  
  this.genScram = function() {
    let scram = [];
    let final = "";
    let prevMove = 0;
    for (let i = 0; i < 20; i++) {
      let ran = Math.floor(Math.random() * 12) + 1;
      if (ran == 1 && prevMove != 1 && prevMove != 12) {
        scram[i] = "U";
        prevMove = 1;
      } else if (ran == 2 && prevMove != 2 && prevMove != 7) {
        scram[i] = "D";
        prevMove = 2;
      } else if (ran == 3 && prevMove != 3 && prevMove != 8) {
        scram[i] = "R";
        prevMove = 3;
      } else if (ran == 4 && prevMove != 4 && prevMove != 9) {
        scram[i] = "L";
        prevMove = 4;
      } else if (ran == 5 && prevMove != 5 && prevMove != 10) {
        scram[i] = "F";
        prevMove = 5;
      } else if (ran == 6 && prevMove != 6 && prevMove != 11) {
        scram[i] = "B";
        prevMove = 6;
      } else if (ran == 7 && prevMove != 7 && prevMove != 2) {
        scram[i] = "D2";
        prevMove = 7;
      } else if (ran == 8 && prevMove != 8 && prevMove != 3) {
        scram[i] = "R2";
        prevMove = 8;
      } else if (ran == 9 && prevMove != 9 && prevMove != 4) {
        scram[i] = "L2";
        prevMove = 9;
      } else if (ran == 10 && prevMove !=10 && prevMove != 5) {
        scram[i] = "F2";
        prevMove = 10;
      } else if (ran == 11 && prevMove != 11 && prevMove != 6) {
        scram[i] = "B2";
        prevMove = 11;
      } else if (ran == 12 && prevMove != 12 && prevMove != 1) {
        scram[i] = "U2";
        prevMove = 12;
      } else {
        i--;
      }
    }
    for (let i = 0; i < 20; i++) {
      let prime = Math.floor(Math.random() * 2) ;
      let pri = "";
      if (prime == 1 && scram[i][1] != "2") {
        pri = "'";
      }
      final += scram[i] + pri + " ";
    }
    return final;
  }
}