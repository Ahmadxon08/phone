const hoursElement = document.getElementById("hour");
const minutesElement = document.getElementById("minute");
const secondsElement = document.getElementById("second");
const amPmElement = document.getElementById("pm-am");

const btnClose = document.getElementById("btnClose");
const btnOpen = document.getElementById("btnOpen");

const phoneContent = document.querySelector(".some");

const clock = document.querySelector(".clock_content");

// phoneContent.addEventListener("click", function (e) {
//   phoneContent.classList.add("open");
//   document.body.style.overflow = "hidden";
// });
// phoneContent.addEventListener("click", function (e) {
//   document.body.style.overflow = "auto";
// });

btnOpen.addEventListener("click", (e) => {
  clock.classList.add("open");
  phoneContent.classList.add("open");
  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", (e) => {
  clock.classList.remove("open");
  phoneContent.classList.remove("open");
  document.body.style.overflow = "auto";
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

setInterval(updateClock, 1000);

updateClock();
