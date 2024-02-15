const hoursElement = document.getElementById("hour");
const minutesElement = document.getElementById("minute");
const secondsElement = document.getElementById("second");
const amPmElement = document.getElementById("pm-am");

const btnClose = document.getElementById("btnClose");
const btnOpen = document.getElementById("btnOpen");

const clock = document.querySelector(".clock_content");

btnOpen.addEventListener("click", (e) => {
  
  clock.classList.add("open");
  document.body.style.overflow = 'hidden';
});

btnClose.addEventListener("click", (e) => {
  clock.classList.remove("open");
  document.body.style.overflow = 'auto';
});

function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amPm = "AM";

  if (hours > 12) {
    hours -= 12;
    amPm = "PM";
  }

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  amPmElement.textContent = amPm;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to update the clock immediately
updateClock();
