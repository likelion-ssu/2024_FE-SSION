//js엔 Date 클래스 내장되어 있다.
//현재 날짜 
const today= new Date();
//현재 월 getMonth() 메서드는 1월일때 0을 반환
let currentMonth=today.getMonth();
//현재 년도
let currentYear=today.getFullYear();
//현재 날짜
let currentDate=today.getDate();

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
    //캘린더 그릴 HTML
    let daysHtml='';
    //첫번째주 빈칸
    for(let i=0;i<firstDayOfweek;i++){
        daysHtml+='<li></li>';
    }
    //날짜 채우기
    for(let day=1;day<=daysInMonth;day++){
        //오늘의 날짜를 빨간 글씨로 바꾸기
        daysHtml+=`<li>${day}</li>`;
        
    }
    //캘린더 html업데이트
    document.querySelector('.days').innerHTML=daysHtml;
    currentDate
}
renderCalendar();
//이전 달로 이동하는 함수
function goToPreviousMonth(){
    if(currentMonth==0){
        currentMonth=11;
        currentYear--;
    }else{
        currentMonth--;
    }
    renderCalendar();
}
//다음 달로 이동하는 함수
function goToNextMonth(){
    if(currentMonth==11){
        currentMonth=0;
        currentYear++;
    }
    else currentMonth++;
    renderCalendar();
}

//이벤트 리스너 설정
document.getElementById('prevBtn').addEventListener('click',goToPreviousMonth);
document.getElementById('nextBtn').addEventListener('click',goToNextMonth);

