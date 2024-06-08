let date = new Date();

const renderCalendar = () => {
  const renderedYear = date.getFullYear();
  const renderedMonth = date.getMonth();

  document.querySelector(
    '.present_year-month'
  ).textContent = `${renderedYear}년 ${renderedMonth + 1}월`;

  const prevMonth_lastDay = new Date(renderedYear, renderedMonth, 0); // 2024.04.30
  const thisMonth_lastDay = new Date(renderedYear, renderedMonth + 1, 0); // 2024.05.31

  const PLDate = prevMonth_lastDay.getDate(); // 30
  const PLDay = prevMonth_lastDay.getDay(); // 2(Tue)

  const TLDate = thisMonth_lastDay.getDate(); // 31
  const TLDay = thisMonth_lastDay.getDay(); // 5(Fri)

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  console.log(thisDates);

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  // [28, 29, 30, 1 ~ 31, 1]

  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    dates[
      i
    ] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();

  if (
    renderedMonth === today.getMonth() &&
    renderedYear === today.getFullYear()
  ) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalendar();

const goToPrevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

const goToNextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

