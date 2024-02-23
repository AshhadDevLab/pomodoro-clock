let interval;
let minutes = 25;
let seconds = 0;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

function updateClock() {
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

function startClock() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateClock();
  }, 1000);
}

function pauseClock() {
  clearInterval(interval);
}

function resetClock() {
  clearInterval(interval);
  minutes = 25;
  seconds = 0;
  updateClock();
}

startButton.addEventListener("click", startClock);
pauseButton.addEventListener("click", pauseClock);
resetButton.addEventListener("click", resetClock);

updateClock();
