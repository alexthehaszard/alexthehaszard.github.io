function Stats() {
  this.show = function () {
    line(0, height - height / 10, width, height - height / 10);

    line(width / 10, height - height / 10, width / 10, height);
    line(width - width / 10, height - height / 10, width - width / 10, height);

    line(width / 2, height - height / 10, width / 2, height);
  };

  this.showInfo = function () {
    textAlign(CENTER);

    text("<", width / 20, height - height / 10 / 2 + width / 80);
    text(">", width - width / 20, height - height / 10 / 2 + width / 80);
  };

  this.showStats = function (solve1, solve2) {
    if (solve1 != undefined) {
      let splitSolve1 = solve1.split("-");
      if (width > height) {
        textAlign(LEFT);
        textSize(width / 30);
        text(splitSolve1[1], width / 9, height - height / 40);
        textAlign(CENTER);
        textSize(width / 100);
        if (splitSolve1[0] == "4x4") {
          text(splitSolve1[0], width / 3 + width / 80, height - height / 15);
          text(
            splitSolve1[2],
            width / 6 + width / 60,
            height - height / 18,
            width / 3 - width / 50,
            height - height / 80
          );
        } else {
          text(splitSolve1[0], width / 3 + width / 80, height - height / 19);
          text(splitSolve1[2], width / 3 + width / 80, height - height / 40);
        }
      } else {
        textAlign(LEFT);
        textSize(width / 30);
        text(splitSolve1[1], width / 9, height - height / 40);
        textAlign(CENTER);
        textSize(width / 60);
        text(splitSolve1[0], width / 8, height - height / 16);
        if (splitSolve1[0] == "4x4") {
          text(
            splitSolve1[2],
            width / 6 + width / 50,
            height - height / 13,
            width / 3 - width / 40,
            height - height / 80
          );
        } else {
          text(
            splitSolve1[2],
            width / 6 + width / 60,
            height - height / 16,
            width / 3 - width / 50,
            height - height / 80
          );
        }
      }
    }
    if (solve2 != undefined) {
      let splitSolve2 = solve2.split("-");
      if (width > height) {
        textAlign(LEFT);
        textSize(width / 30);
        text(splitSolve2[1], width - width / 2.05, height - height / 40);
        textAlign(CENTER);
        textSize(width / 100);
        if (splitSolve2[0] == "4x4") {
          text(
            splitSolve2[0],
            width - width / 3 + width / 13,
            height - height / 15
          );
          text(
            splitSolve2[2],
            width - width / 2.4,
            height - height / 18,
            width / 3 - width / 50,
            height - height / 80
          );
        } else {
          text(
            splitSolve2[0],
            width - width / 3 + width / 13,
            height - height / 19
          );
          text(
            splitSolve2[2],
            width - width / 3 + width / 13,
            height - height / 40
          );
        }
      } else {
        textAlign(LEFT);
        textSize(width / 30);
        text(splitSolve2[1], width / 2 + width / 100, height - height / 40);
        textAlign(CENTER);
        textSize(width / 60);
        text(splitSolve2[0], width / 2 + width / 40, height - height / 16);
        if (splitSolve2[0] == "4x4") {
          text(
            splitSolve2[2],
            width / 2 + width / 12,
            height - height / 13,
            width / 3 - width / 40,
            height - height / 80
          );
        } else {
          text(
            splitSolve2[2],
            width / 2 + width / 12,
            height - height / 16,
            width / 3 - width / 50,
            height - height / 80
          );
        }
      }
    }
  };

  this.previous = function (solve1, solve2, direction) {
    let output = [];
    if (direction == 0) {
      output[0] = solve1 + 1;
      output[1] = solve2 + 1;
      console.log("move left");
    } else if (direction == 1) {
      output[0] = solve1 - 1;
      output[1] = solve2 - 1;
      console.log("move right");
    } else {
      output[0] = solve1;
      output[1] = solve2;
    }
    return output;
  };

  this.removeTime = function (ar, index, index2) {
    let output = [index, index2];
    if (0 == 1) {
      if (confirm("delete solve?")) {
        ar.splice(index, 1);
        output[0] = index - 1;
        output[1] = index2 - 1;
        localStorage.clear();
        for (let i = 0; i < ar.length; i++) {
          localStorage.setItem(i, ar[i]);
        }
      }
    }
    if (0 == 1) {
      if (confirm("delete solve?")) {
        ar.splice(index2, 1);
        output[0] = index - 1;
        output[1] = index2 - 1;
        localStorage.clear();
        for (let i = 0; i < ar.length; i++) {
          localStorage.setItem(i, ar[i]);
        }
      }
    }
    return output;
  };

  this.AOFive = function (ar, num) {
    let outAr = [];
    let average = 0;
    if (ar.length >= 5) {
      for (let i = 1; i <= num; i++) {
        let currentTime = ar[ar.length - i].split("-");
        console.log(currentTime[1]);
        average += parseFloat(currentTime[1]);
        outAr[i - 1] = parseFloat(currentTime[1]);
      }
      average -= Math.max(...outAr);
      average -= Math.min(...outAr);
      average /= num - 2;

      average = Math.round(average * 100) / 100;
      return average;
    } else {
      return null;
    }
  };
}
