const soon = "20 May 2022";
const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

function commingSoon() {
  const commingDate = new Date(soon);
  const currentDate = new Date();

  const totalSeconds = (commingDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);

  daysText.textContent = days;
  hoursText.textContent = hours;
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;
}

document.addEventListener("DOMContentLoaded", () =>
  setInterval(commingSoon, 1000)
);
