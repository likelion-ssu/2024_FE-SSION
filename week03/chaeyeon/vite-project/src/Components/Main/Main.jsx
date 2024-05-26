import React from 'react';
import './Main.css';
import thumbnail from '../../assets/thumbnail.png';
import profile from '../../assets/profile.png';

export const Main = () => {
  return (
    <div>
      <div className="button-bar">
        <button>전체</button>
        <button>음악</button>
        <button>피트니스</button>
        <button>뷰티 팁</button>
        <button>관광지</button>
        <button>요리</button>
        <button>최근에 업로드된 동영상</button>
        <button>감상한 동영상</button>
        <button>새로운 맞춤 동영상</button>
      </div>
      <div className="grid">
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
        <div className="video-item">
          <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          <div className="video-info">
            <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                    <div>아빠 기다리다 렉걸린 강아지</div>
                    <div>속삭이는 몽자</div>
                    <div>조회수 3.8만 1일 전</div>
                </div>
            </div>
          </div>
        </div>
   
   
      </div>
    </div>
  );
};

export default Main;
