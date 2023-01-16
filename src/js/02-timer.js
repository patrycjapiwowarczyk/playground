import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const startBtn = document.querySelector('button[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notify.failure('Please select a date in the future');
    } else {
      startBtn.disabled = false;
      console.log(selectedDates[0]);
    }
  },
};

const flatpickrInput = flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

let dateTimer;

function countdown() {
  const timeToCount = flatpickrInput.selectedDates[0] - new Date();
  if (timeToCount <= 0) {
    clearInterval(dateTimer);
    startBtn.disabled = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(timeToCount);
  daysNumber.innerHTML = addLeadingZero(days);
  hoursNumber.innerHTML = addLeadingZero(hours);
  minutesNumber.innerHTML = addLeadingZero(minutes);
  secondsNumber.innerHTML = addLeadingZero(seconds);
}

startBtn.addEventListener('click', () => {
  countdown();
  startBtn.disabled = true;
  dateTimer = setInterval(countdown, 1000);
});