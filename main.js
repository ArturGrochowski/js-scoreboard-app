let homeScoreDisplay = document.getElementById("score-home");
let awayScoreDisplay = document.getElementById("score-away");
let pauseButton = document.getElementById("pause-btn");
let clockIsRunning = false;

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
    clockIsRunning = false;
    pauseButton.textContent = "PAUSE"
    clearInterval(clock)
    resetTimer();
}

let clock;
let minutes = 0;
let seconds = 0;

function runClock() {
    if(seconds<59){
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    document.getElementById("clock-el").innerHTML = timeRender();
}

function startTimer() {
    if(!clockIsRunning){
    pauseButton.textContent = "PAUSE"
    clockIsRunning = true;
    clock = setInterval(runClock ,1000);
    } else {
        console.log("Can't u see the Timer is running already? Moron...")
    }
}

function pauseOrResetTimmer() {
    if(clockIsRunning){
        pauseTimer()
    } else {
        resetTimer()
    }
}

function pauseTimer() {
    clearInterval(clock)
    clockIsRunning = false;
    pauseButton.textContent = "RESET"
}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    document.getElementById("clock-el").innerHTML = timeRender();
}

function timeRender() {
    let minutesStr = "" + minutes;
    let secondsStr = "" + seconds;
    minutesStr = minutesStr.padStart(2, '0');
    secondsStr = secondsStr.padStart(2, '0');

    return minutesStr + ":" + secondsStr;
}