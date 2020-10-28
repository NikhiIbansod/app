let POMODORO = '25:00';
let SHORT_BREAK = '05:00';
let LONG_BREAK = '30:00';
let currentTime = POMODORO; 

const pomodoroButton = document.querySelector('.pomodoro-button');
const shortBreakButton = document.querySelector('.short-break-button');
const longBreakButton = document.querySelector('.long-break-button');
const timerContainer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

let duration = null;
let minutes = null;
let seconds = null;

var timer = '';
function startTimer(duration) {

     timer = duration, minutes, seconds;
    window.intervalOne = setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerContainer.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

timerContainer.onload = function () {
    let duration = timerContainer.innerText.slice(0, 2) * 60;
    startTimer(duration);
};

startButton.addEventListener('click', function() {

	startTimer(parseInt(timerContainer.innerText.slice(0, 2) * 60) + parseInt(timerContainer.innerText.slice(3)));
});

stopButton.addEventListener('click', function() {

	clearInterval(intervalOne);
})

resetButton.addEventListener('click', function() {

	clearInterval(intervalOne);
	timerContainer.innerText = currentTime;
})

pomodoroButton.addEventListener('click', function() {

	((currentTime === SHORT_BREAK) ? shortBreakButton : longBreakButton).classList.remove('btn-active');
	clearInterval(intervalOne);
	currentTime = POMODORO;
	timerContainer.innerText = currentTime;
	pomodoroButton.classList.add('btn-active');

});

shortBreakButton.addEventListener('click', function() {

	((currentTime === POMODORO) ? pomodoroButton : longBreakButton).classList.remove('btn-active');
	clearInterval(intervalOne);
	currentTime = SHORT_BREAK;
	timerContainer.innerText = currentTime;
	shortBreakButton.classList.add('btn-active');
})

longBreakButton.addEventListener('click', function() {

((currentTime === SHORT_BREAK) ? shortBreakButton : pomodoroButton).classList.remove('btn-active');
clearInterval(intervalOne);
	currentTime = LONG_BREAK;
	timerContainer.innerText = currentTime;
	longBreakButton.classList.add('btn-active');
})

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }}
