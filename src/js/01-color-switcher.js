const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);
stopBtn.disabled = true;
let interval = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onClickStart() {
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);
};

function onClickStop() {    
    interval = clearInterval(interval);
    startBtn.disabled = false;  
    stopBtn.disabled = true;
};
