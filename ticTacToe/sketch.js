let board;
let turn = "X";
let game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let pos;
let mPress;
let won = false;
let winner;
let move = 0;

function setup() {
    createCanvas(windowHeight / 2, windowHeight / 2);
    board = new Board();
    strokeWeight(10);
}

function draw() {
    background(200);
    board.show();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[i][j] == 0) {

            } else if (game[i][j] == "X") {
                board.drawX(i, j);
            } else if (game[i][j] == "O") {
                board.drawO(i, j);
            }
        }
    }
    board.checkWinner();
}

function mousePressed() {
    pos = board.getCounter(turn);
    if (turn == "X" && game[pos[1]][pos[0]] == 0) {
        game[pos[1]][pos[0]] = "X";
        turn = "O";
        move++;
    }
    if (turn == "O" && game[pos[1]][pos[0]] == 0) {
        game[pos[1]][pos[0]] = "O";
        turn = "X";
        move++;
    }
    if (won == true) {
        game = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        won = false;
        turn = "X";
    }
}