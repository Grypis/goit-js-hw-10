// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const dateTimePickerInput = document.querySelector('#datetime-picker');
const startBtnElem = document.querySelector('[data-start]');
const daysSpanElem = document.querySelector('[data-days]');
const hoursSpanElem = document.querySelector('[data-hours]');
const minutesSpanElem = document.querySelector('[data-minutes]');
const secondsSpanElem = document.querySelector('[data-seconds]');
startBtnElem.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = Date.parse(selectedDates[0]);
    if (userSelectedDate < Date.now()) {
      iziToast.error({
        icon: '../img/icon.svg',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        progressBar: true,
        progressBarColor: '#B51B1B',
        progressBarEasing: 'linear',
        pauseOnHover: true,
        position: 'topRight',
      });
      startBtnElem.disabled = true;
    } else {
      startBtnElem.disabled = false;
    }
  },
};
flatpickr(dateTimePickerInput, options);
function startCountdown() {
  startBtnElem.disabled = true;
  dateTimePickerInput.disabled = true;
  const intervalId = setInterval(() => {
    let timeLeftMs = userSelectedDate - Date.now();
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
    }
    const timeLeft = convertMs(timeLeftMs);
    function addLeadingZero(value) {
      return String(value).padStart(2, '0');
    }
    daysSpanElem.textContent = addLeadingZero(timeLeft.days);
    hoursSpanElem.textContent = addLeadingZero(timeLeft.hours);
    minutesSpanElem.textContent = addLeadingZero(timeLeft.minutes);
    secondsSpanElem.textContent = addLeadingZero(timeLeft.seconds);
    if (timeLeftMs <= 1000) {
      clearInterval(intervalId);
      dateTimePickerInput.disabled = false;
    }
  }, 1000);
}
startBtnElem.addEventListener('click', startCountdown);
