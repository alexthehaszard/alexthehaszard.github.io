function Board() {

    this.show = function () {
        stroke(0);
        line(width / 3, 0, width / 3, height);
        line(width / 1.5, 0, width / 1.5, height);
        line(0, width / 3, width, width / 3);
        line(0, width / 1.5, width, width / 1.5);
    }

    this.getCounter = function (x) {
        let index1 = null;
        let index2 = null;
        let output = [];
        if (mouseX < width / 3) {
            index2 = 0;
        } else if (mouseX > width / 1.5) {
            index2 = 2;
        } else {
            index2 = 1;
        }
        output[1] = index2
        if (mouseY < height / 3) {
            index1 = 0;
        } else if (mouseY > height / 1.5) {
            index1 = 2
        } else {
            index1 = 1;
        }
        output[0] = index1;
        return output;
    }

    this.drawX = function (a, b) {
        a = a * height / 3;
        b = b * height / 3;
        line(a + height / 12, b + height / 12, a + height / 3 - height / 12, b + height / 3 - height / 12);
        line(a + + height / 3 - height / 12, b + height / 12, a + height / 12, b + height / 3 - height / 12);
    }

    this.drawO = function (a, b) {
        noFill();
        a = a * height / 3;
        b = b * height / 3;
        ellipse(a + height / 6, b + height / 6, 80, 80);
    }

    this.checkWinner = function () {
        for (let i = 0; i < 3; i++) {
            if (game[i][0] == game[i][1] && game[i][0] == game[i][2] && game[i][0] != 0) {
                winner = game[i][0];
                line(i * width / 3 + width / 6, width / 12, i * width / 3 + width / 6, height - width / 12);
                won = true;
            }
            if (game[0][i] == game[1][i] && game[0][i] == game[2][i] && game[0][i] != 0) {
                winner = game[0][i];
                line(width / 12, i * width / 3 + width / 6, width - width / 12, i * width / 3 + width / 6);
                won = true;
            }
            if (game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0] != 0) {
                winner = game[0][0];
                line(width / 12, width / 12, width - width / 12, height - width / 12);
                won = true;
            }
            if (game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2] != 0) {
                winner = game[0][2];
                line(width - width / 12, width / 12, width / 12, height - width / 12);
                won = true;
            }
            if (move == 9 && won == false) {
                won = true;
                move = 0;
            }
            if (won == true) {
                textSize(50);
                textAlign(CENTER);
                strokeWeight(2);
                fill(255);
                text("Click to restart", width / 2, height / 2);
                strokeWeight(10);
                move = 0;
            }
        }
    }
}