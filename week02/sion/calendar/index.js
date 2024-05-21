const calendarDates = document.getElementById("calendarDates");
const currentMonthElement = document.getElementById("currentMonth");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const today = new Date(); 
// 현재 날짜를 나타내는 Date 객체를 저장.
let currentMonth = today.getMonth();
// 현재 월을 나타내는 값을 저장. getMonth() 메서드는 0부터 시작 -> 1월은 0 
let currentYear = today.getFullYear(); 
// 현재 연도를 나타내는 값을 저장.

function renderCalendar() {
  /* renderCalendar 함수 : 월별 캘린더를 생성하고 표시 */

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  /* firstDayOfMonth 변수에 현재 월의 첫 번째 날짜를 나타내는 Date 객체 저장.
  해당 월의 첫 번째 날짜에 대한 정보를 얻음. */

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  /* daysInMonth 변수에 현재 월의 총 일 수를 나타내는 값을 저장.
  월이 0부터 시작하므로 currentMonth + 1 */

  const startDayOfWeek = firstDayOfMonth.getDay();
  /* startDayOfWeek 변수에 현재 월의 첫 번째 날짜의 요일을 나타내는 값을 저장.
  해당 월의 첫 번째 날짜가 무슨 요일인지 알 수 있음. */

  currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;
  // 월을 나타내는 요소에 현재 월과 연도를 설정하여 표시.

  calendarDates.innerHTML = ""; // 일자를 표시하는 그리드 컨테이너 비움.

  // 빈 날짜(이전 달)
  for (let i = 0; i < startDayOfWeek; i++) {
    const emptyDate = document.createElement("div");
    //  빈 날짜를 나타내는 div 요소를 생성.
    emptyDate.classList.add("date", "empty");
    // 생성한 div 요소에 "date"와 "empty" 클래스를 추가.
    calendarDates.appendChild(emptyDate);
    // 생성한 빈 날짜 요소를 캘린더 그리드에 추가.
  }

  // 현재 달의 날짜
  for (let i = 1; i <= daysInMonth; i++) { // 현재 월의 총 일 수만큼 반복하여 월의 날짜를 순서대로 표시.
    const dateElement = document.createElement("div");
    // 날짜를 나타내는 div 요소 생성.
    dateElement.classList.add("date"); // 생성한 div 요소에 "date" 클래스를 추가.
    dateElement.textContent = i; // 해당 날짜 값을 div 요소의 텍스트로 설정.
    calendarDates.appendChild(dateElement); // 생성한 날짜 요소를 캘린더 그리드에 추가.
  }
}

renderCalendar();
// 페이지가 로드되면 renderCalendar 함수를 실행하여 초기 캘린더 표시.

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});
/* 
1. 이전 버튼(prevBtn)을 클릭하면 현재 월을 이전 월로 변경하고, 연도가 바뀌어야 한다면 연도를 변경.
2. 변경된 월과 연도를 바탕으로 renderCalendar 함수를 호출하여 이전 월의 캘린더를 표시.
*/

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});
/* 
1. 다음 버튼(nextBtn)을 클릭하면 현재 월을 다음 월로 변경하고, 연도가 바뀌어야 한다면 연도를 변경.
2. 변경된 월과 연도를 바탕으로 renderCalendar 함수를 호출하여 다음 월의 캘린더를 표시.
*/