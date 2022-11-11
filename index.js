let homeScoreDisplay = document.getElementById("score-home");
let awayScoreDisplay = document.getElementById("score-away");

let homeScoreResult = 0;
let awayScoreResult = 0;

function add1home() {
    homeScoreResult += 1;
    homeScoreDisplay.textContent = homeScoreResult;
}

function add2home() {
    homeScoreResult += 2;
    homeScoreDisplay.textContent = homeScoreResult;
}

function add3home() {
    homeScoreResult +=3;
    homeScoreDisplay.textContent = homeScoreResult;
}

function add1away() {
    awayScoreResult += 1;
    awayScoreDisplay.textContent = awayScoreResult;
}

function add2away() {
    awayScoreResult += 2;
    awayScoreDisplay.textContent = awayScoreResult;
}

function add3away() {
    awayScoreResult += 3;
    awayScoreDisplay.textContent = awayScoreResult;
}

function newGame() {
    homeScoreResult = 0;
    homeScoreDisplay.textContent = homeScoreResult;
    awayScoreResult = 0;
    awayScoreDisplay.textContent = awayScoreResult;
}