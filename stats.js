function Stats() {

    this.show = function() {
        line(0, height - height / 10, width, height - height / 10);

        line(width / 10, height - height / 10, width / 10, height);
        line(width - width / 10, height - height / 10, width - width / 10, height);

        line(width / 2, height - height / 10, width / 2, height);
    }

    this.showInfo = function() {
        textAlign(CENTER);

        text("<", width / 20, height - height / 40);
        text(">", width - width / 20, height - height / 40);
    }

    this.showStats = function(solve1, solve2) {
        if (solve1 != undefined) {
            let splitSolve1 = solve1.split("-");
            if (width > height) {
                textAlign(LEFT);
                textSize(width / 30);
                text(splitSolve1[1], width / 9, height - height / 40);
                textAlign(CENTER);
                textSize(width / 100)
                if (splitSolve1[0] == "4x4") {
                    text(splitSolve1[0], width / 3 + width / 80, height - height / 15);
                    text(splitSolve1[2], width / 6 + width / 60, height - height / 18, width / 3 - width / 50, height - height / 80);
                } else {
                    text(splitSolve1[0], width / 3 + width / 80, height - height / 19);
                    text(splitSolve1[2], width / 3 + width / 80, height - height / 40);
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
                textSize(width / 100)
                if (splitSolve2[0] == "4x4") {
                    text(splitSolve2[0], width - width / 3 + width / 13, height - height / 15);
                    text(splitSolve2[2], width - width / 2.4, height - height / 18, width / 3 - width / 50, height - height / 80);
                } else {
                    text(splitSolve2[0], width - width / 3 + width / 13, height - height / 19);
                    text(splitSolve2[2], width - width / 3 + width / 13, height - height / 40);
                }
            }
        }
    }

    this.previous = function(solve1, solve2) {
        let output = [];
        if (mouseX > width / 10 && mouseY > height - height / 10) {
            output[0] = solve1-1;
            output[1] = solve2-1;
        }
        else if (mouseX < width - width / 10 && mouseY > height - height / 10) {
            output[0] = solve1+1;
            output[1] = solve2+1;
        }
        else {
            output[0] = solve1;
            output[1] = solve2;
        }
        return output;
    }
}