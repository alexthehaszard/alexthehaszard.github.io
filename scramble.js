function scramble() {
    this.show = function(txt) {
        textAlign(CENTER); //setup the text for the scramble
        textSize(windowWidth / 30);
        text(txt, width * 0.05, windowHeight / 20, width * 0.9, height / 5);
    }

    this.genScram = function(scLength, moveNum) {
        let scram = [0];
        let moves = ["R", "U", "F", "L", "D", "B", "r", "u", "f"];
        let final = "";
        for(let i = 1; i <= scLength; i++) {
            for (let j = 0; j < moveNum; j++) {
                let ran = Math.floor(Math.random() * (moveNum + 1));
                if (moveNum <= 3) {
                    if (ran % 3 == j && scram[i-1] != moves[j]) {
                        scram[i] = moves[j];
                    }
                } else if (moveNum > 3 && moveNum <= 6) {
                    if (scram.length >= 3) {
                        if (ran == j && scram[i-1] != moves[j] && scram[i-2] != moves[j] && scram[i-2] != moves[j]) {
                            scram[i] = moves[j];
                            console.log("after");
                        }
                    } else if (scram.length < 3) {
                        if (ran == j && scram[i-1] != moves[j] && scram[i-2] != moves[j]) {
                            scram[i] = moves[j];
                            console.log("before");
                        }
                    } else {
                        j--;
                    }
                } else if (moveNum > 6) {
                    if (scram.length >= 3) {
                        if (ran == j && scram[i-1] != moves[j] && scram[i-2] != moves[j] && scram[i-2] != moves[j]) {
                            scram[i] = moves[j];
                            console.log("after");
                        }
                    } else if (scram.length < 3) {
                        if (ran == j && scram[i-1] != moves[j] && scram[i-2] != moves[j]) {
                            scram[i] = moves[j];
                            console.log("before");
                        }
                    } else {
                        j--;
                    }
                }
            }
            if (scram[i] == undefined) {
                i--;
            }
        }
        
        for (let i = 1; i <= scLength; i++) {
            let moveType = Math.floor(Math.random() * 3) + 1;
            if (moveType == 1) {
                final += scram[i] + " ";
            } else if (moveType == 2) {
                final += scram[i] + "' ";
            } else if (moveType == 3) {
                final += scram[i] + "2 ";
            }
        }
        return final;
    }
}