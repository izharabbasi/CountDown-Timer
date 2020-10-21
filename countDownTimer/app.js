const daysEl = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const newYears = '1 Jan 2021'

function countDown(){
    const newYearDate = new Date(newYears);
    const currntDate = new Date();

    const totalSeconds = (newYearDate - currntDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}

countDown()

setInterval(countDown, 1000)
