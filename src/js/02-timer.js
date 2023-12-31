import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const elements = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]')    
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {      
      if (selectedDates[0] <= options.defaultDate) {
        return Notiflix.Notify.failure('Please choose a date in the future');
      }
        startBtn.disabled = false;      
    }    
};
const fp = flatpickr('input[type="text"]', options);  
startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

startBtn.addEventListener('click', handlerClick);
function handlerClick() {
    const timer = setInterval(() => {   
      const remainingTime = new Date(input.value) - new Date();     
      startBtn.disabled = true;
    
      if (remainingTime >= 0) {
        let featureTimeObject = convertMs(remainingTime);
        elements.days.textContent = addLeadingZero(featureTimeObject.days);
        elements.hours.textContent = addLeadingZero(featureTimeObject.hours);
        elements.minutes.textContent = addLeadingZero(featureTimeObject.minutes);
        elements.seconds.textContent = addLeadingZero(featureTimeObject.seconds);
      };      
      
    }, 1000);
};

function addLeadingZero(value) {
   return value.toString().padStart(2, '0');
};
