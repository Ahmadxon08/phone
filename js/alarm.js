const alarmAudio = document.getElementById("alarm_audio");
const stopAlarm = document.querySelector(".btn_stopAlarm");
const setAlarm = document.querySelector(".btn_alarm");

let alarmInterval;

setAlarm.addEventListener("click", function () {
  const alarmTimeInput = document.getElementById("time_input").value;
  if (!alarmTimeInput) {
    alert("Budilnik vaqtni tanlang!");
    return;
  }

  const [alarmHour, alarmMinute] = alarmTimeInput.split(":");
  const now = new Date();
  const alarmDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    alarmHour,
    alarmMinute,
    0
  );
  const timeDiff = alarmDate - now;

  if (timeDiff < 0) {
    alert("Sozlangan vaqt kechirildi, ertaga sozlang!");
    return;
  }

  alarmInterval = setTimeout(() => {
    alarmAudio.play();
    alert("Budilnik ringlash vaqti!");
    stopAlarm.disabled = false;
  }, timeDiff);
});

stopAlarm.addEventListener("click", function () {
  clearTimeout(alarmInterval);
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
  stopAlarm.disabled = true;
});
