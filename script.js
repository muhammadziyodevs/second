let startTime = 0;
let updatedTime = 0;
let interval;
let running = false;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
  if (!running) {
    running = true;
    startTime = Date.now() - updatedTime;

    interval = setInterval(() => {
      updatedTime = Date.now() - startTime;
      let seconds = (updatedTime / 1000).toFixed(3);
      timeDisplay.textContent = seconds;
    }, 1);
  }
});

stopBtn.addEventListener('click', () => {
  if (running) {
    clearInterval(interval);
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  running = false;
  updatedTime = 0;
  timeDisplay.textContent = '0.000';
});
