function scramble() {

  this.show = function(txt) {
    textAlign("center"); //setup the text for the scramble
    textSize(windowWidth / 30);
    text(txt, width/2, windowHeight / 12);
  }

  this.genScram = function() {
    let scram = []; //create an array for scramble values
    let final = ""; //what will be returned at the end
    let prevMove = 0; //the previous move that was generated to stop redundant moves from being created
    let l2m = 0;
    for (let i = 0; i < 20; i++) {
      let ran = Math.floor(Math.random() * 6) + 1; //generate a random move from 1-6
      if (ran == 1 && prevMove != 1) { //if the move is not the same as the previous move and one that would make it redundant eg U and D moves
        if (prevMove == 2 && l2m != 2) {
          l2m = 1;
          scram[i] = "U";
          prevMove = 1;
        } else if (l2m != 2) {
          scram[i] = "U";
          prevMove = 1;
          l2m = 0;
        } else {
          i--;
        }
      }

      else if (ran == 2 && prevMove != 2) { //this is repeated 6 times
        if (prevMove == 1 && l2m != 1) {
          l2m = 2;
          scram[i] = "D";
          prevMove = 2;
        } else if (l2m != 1) {
          scram[i] = "D";
          prevMove = 2;
          l2m = 0;
        } else {
          i--;
        }
      }

      else if (ran == 3 && prevMove != 3) {
        if (prevMove == 4 && l2m != 4) {
          l2m = 3;
          scram[i] = "R";
          prevMove = 3;
        } else if (l2m != 4) {
          scram[i] = "R";
          prevMove = 3;
          l2m = 0;
        } else {
          i--;
        }
      }

      else if (ran == 4 && prevMove != 4) {
        if (prevMove == 3 && l2m != 3) {
          l2m = 4;
          scram[i] = "L";
          prevMove = 4;
        } else if (l2m != 3) {
          scram[i] = "L";
          prevMove = 4;
          l2m = 0;
        } else {
          i--;
        }
      }

      else if (ran == 5 && prevMove != 5) {
        if (prevMove == 6 && l2m != 6) {
          l2m = 5;
          scram[i] = "F";
          prevMove = 5;
        } else if (l2m != 6) {
          scram[i] = "F";
          prevMove = 5;
          l2m = 0;
        } else {
          i--;
        }
      }

      else if (ran == 6 && prevMove != 6) {
        if (prevMove == 5 && l2m != 5) {
          l2m = 6;
          scram[i] = "B";
          prevMove = 6;
        } else if (l2m != 5) {
          scram[i] = "B";
          prevMove = 6;
          l2m = 0;
        } else {
          i--;
        }
      }

      else {
        i--; //if there is no move that is viable (redundant moves) then reset the loop and make a new move in its place
      }
      // console.log(l2m);
      // console.log(scram[i]);
      // console.log("i = " + i);
    }
    for (let i = 0; i < 20; i++) {
      let prime = Math.floor(Math.random() * 3) ; //generate a random number 1-3 for normal, prime and double moves
      let pri = "";
      if (prime == 1) {
        pri = "'"; //if the number is 1 then it is a prime move
      } else if (prime == 2) {
		pri = "2"; //if the number is 2 then it is a double move
	  }
      final += scram[i] + pri + " "; //output the array in a string with the prime and double moves
    }
    return final;
  }
}
