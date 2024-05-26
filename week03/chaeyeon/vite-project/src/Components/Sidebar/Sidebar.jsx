import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import history from '../../assets/history.png';
import music from '../../assets/music.png';
import like from '../../assets/like.png';
import subscription from '../../assets/subscription.png'; 
import explore from '../../assets/explore.png'; 


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src={home} alt="home icon" />
        <span>홈</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} alt="shorts icon" />
        <span>Shorts</span>
      </div>
      <div className="sidebar-item">
        <img src={subscription} alt="subscription icon" />
        <span>구독</span>
      </div>
      <div className="divider"></div>
      <div className="sidebar-item">
        <img src={history} alt="history icon" />
        <span>시청 기록</span>
      </div>
      <div className="sidebar-item">
        <img src={music} alt="playlist icon" />
        <span>재생목록</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} alt="watch later icon" />
        <span>나중에 볼 동영상</span>
      </div>
      <div className="sidebar-item">
        <img src={like} alt="liked videos icon" />
        <span>좋아요 표시한 동영상</span>
      </div>
      <div className="divider"></div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>인기 급상승</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>쇼핑</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>음악</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>영화</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>실시간</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>게임</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>스포츠</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>학습 프로그램</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>팟캐스트</span>
      </div>
      <div className="divider"></div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>설정</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>신고 기록</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>고객센터</span>
      </div>
      <div className="sidebar-item">
        <img src={explore} />
        <span>의견 보내기</span>
      </div>

    </div>
  );
};

export default Sidebar;
