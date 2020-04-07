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
      if (ran == 1 && prevMove != 1 && prevMove != 2) {
        scram[i] = "U";
        prevMove = 1;
      } else if (ran == 2 && prevMove != 2 && prevMove != 1) {
        scram[i] = "D";
        prevMove = 2;
      } else if (ran == 3 && prevMove != 3 && prevMove != 4) {
        scram[i] = "R";
        prevMove = 3;
      } else if (ran == 4 && prevMove != 4 && prevMove != 3) {
        scram[i] = "L";
        prevMove = 4;
      } else if (ran == 5 && prevMove != 5 && prevMove != 6) {
        scram[i] = "F";
        prevMove = 5;
      } else if (ran == 6 && prevMove != 6 && prevMove != 5) {
        scram[i] = "B";
        prevMove = 6;
      }else {
        i--;
      }
    }
    for (let i = 0; i < 20; i++) {
      let prime = Math.floor(Math.random() * 3) ;
      let pri = "";
      if (prime == 1) {
        pri = "'";
      } else if (prime == 2) {
		pri = "2";
	  }
      final += scram[i] + pri + " ";
    }
    return final;
  }
}