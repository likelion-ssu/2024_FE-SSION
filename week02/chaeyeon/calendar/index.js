//js엔 Date 클래스 내장
//현재 날짜 
const today= new Date();
//현재 월 getMonth() 메서드는 1월일때 0을 반환
let currentMonth=today.getMonth();
//현재 년도
let currentYear=today.getFullYear();

//월별로 캘린더 생성하고 표시하는 함수
function renderCalendar(){
    //해당 년도 월의 첫 번째 날짜
    const firstDayOfMonth= new Date(currentYear, currentMonth+1)
    //해당 년도 월의 총 일 수
    const daysInMonth=new Date(currentYear,currentMonth+1,0).getDate();
    //해당 년도 월의 첫 번째 날짜의 요일
    const firstDayOfweek=firstDayOfMonth.getDay();
    //현재 년도 월 표시
    document.getElementById('current').textContent=`${currentYear}년 ${currentMonth+1}월`;
}
renderCalendar();
