let currentDate = new Date();
let todayDate = new Date();

buildCalender();

function buildCalender() {
  let prevLast = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  let thisFirst = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  let thisLast = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  document.querySelector(".year").innerHTML = currentDate.getFullYear();
  document.querySelector(".month").innerHTML = currentDate.getMonth() + 1;
  let dates = [];
  if (thisFirst.getDay() != 0) {
    for (let i = 0; i < thisFirst.getDay(); i++) {
      dates.unshift(prevLast.getDate() - i);
    }
  }
  for (let i = 1; i <= thisLast.getDate(); i++) {
    dates.push(i);
  }
  for (let i = 1; i <= 13 - thisLast.getDay(); i++) {
    dates.push(i);
  }
  let htmlDates = "";
  for (let i = 0; i < 42; i++) {
    if (
      todayDate.getDate() == dates[i] &&
      todayDate.getMonth() == currentDate.getMonth() &&
      todayDate.getFullYear() == currentDate.getFullYear()
    ) {
      htmlDates += `<div class="date today">${dates[i]}</div>`;
    } else {
      htmlDates += `<div class="date">${dates[i]}</div>`;
    }
  }
  document.querySelector(".dates").innerHTML = htmlDates;
}

function prevCal() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  buildCalender();
}

function nextCal() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  buildCalender();
}
