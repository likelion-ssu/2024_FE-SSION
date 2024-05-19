let date = new Date();

const renderCalendar = () => {
  // 현재 year과 month를 가져온다.
  // *month는 0부터 시작하므로 실제 월은 +1 해주어야 구할 수 있다.
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  // 최상단 날짜를 선택하여 현재 연/월을 세팅
  document.querySelector(".year-month").textContent = `${viewYear}년 ${
    viewMonth + 1
  }월`;

  // 현재 날짜 기준 저번 달의 마지막 날에 대한 date 객체를 받음
  // * 자바 스크립트에서 날짜의 0은 마지막 날을 나타낸다.
  const prevLast = new Date(viewYear, viewMonth, 0);
  // 현재 연/월의 마지막 날에 대한 date 객체를 받음
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  // 저번 달 마지막 날이 며칠인지 prevLastDate에
  // 저번 달 마지막 날이 무슨 요일인지 prevLastDay에 : 일요일이 0부터 시작
  const prevMonthLastDate = prevLast.getDate();
  const prevMonthLastDay = prevLast.getDay();

  // 위에서 받은 것과 같음, 이번 달에 대한 정보
  const thisMonthLastDate = thisLast.getDate();
  const thisMonthLastDay = thisLast.getDay();

  // 저번 달 날짜 중 현재 달력에 표시할 date들을 받을 배열
  const prevDates = [];
  // 이번 달 날짜를 받을 배열
  // thisMonthLastDate + 1 설명: 마지막 날짜 + 1 만큼의 크기를 가짐
  // keys() : 인덱스 값을 배열 값으로 갖게 됨
  // 인덱스 0은 필요가 없으므로 slice(1)로 맨 앞 요소 1개를 잘라 배열을 완성함
  const thisDates = [...Array(thisMonthLastDate + 1).keys()].slice(1);
  // 다음 달 날짜 중 현재 달력에 표시할 date들을 받을 배열
  const nextDates = [];

  if (prevMonthLastDay !== 6) {
    // 저번 달 마지막 날이 토요일이 아닌 이상 표시할 것이 존재함
    for (let i = 0; i < prevMonthLastDay + 1; i++) {
      prevDates.unshift(prevMonthLastDate - i); // 거꾸로 표시해야 하는 개수만큼 배열에 추가
    }
  }

  for (let i = 1; i < 7 - thisMonthLastDay; i++) {
    nextDates.push(i); // 이번 달의 마지막 날이 무슨 요일인지에 따라 알맞게 다음 달의 날짜도 추가함
  }

  // 배열을 concat함
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(thisMonthLastDate);

  // date 배열을 순회하며 div 태그로 감싼 각각의 date를 만들어낸다.
  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
    dates[i] = `<div class="date ${condition}">${date}</div>`; // 수정: span이 아닌 div.date에 today 클래스 적용
  });

  // innerHTML 속성을 사용하여 동적으로 날짜를 추가한다.
  document.querySelector(".dates").innerHTML = dates.join("");

  // 캘린더 페이지와 현재 연도/ 달이 일치하면 오늘 날짜에 대한 처리를 함
  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll(".date.this")) {
      // 수정: span이 아닌 div.date 선택
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};

renderCalendar(); //달력 초기화 (현재 날짜로)

// 지난 달로 가는 버튼을 위한 함수
const prevMonth = () => {
  // 저번 달에 대한 날짜를 세팅
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

// 다음 달로 가는 버튼을 위한 함수
const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

// 현재 날짜로 돌아오는 버튼을 위한 함수
const goToday = () => {
  date = new Date();
  renderCalendar();
};
