import React,{useState,useEffect} from 'react';
import './Main.css';
import thumbnail from '../../assets/thumbnail.png';
import profile from '../../assets/profile.png';
// 비디오 데이터 추가 (객체 배열)
const videoData=[
  {
    id:1,
    title:"1아빠 기다리다 렉걸린 강아지",
    channel:"속삭이는 몽자",
    views:"조회수 3.8만",
    uploaded:"1일전"
  },
  {
    id:2,
    title:"2아빠 기다리다 렉걸린 강아지",
    channel:"속삭이는 몽자",
    views:"조회수 3.8만",
    uploaded:"2일전"
  },
  {
      id:3,
      title:"3아빠 기다리다 렉걸린 강아지",
      channel:"속삭이는 몽자",
      views:"조회수 3.8만",
      uploaded:"3일전"
  },
  
]

export const Main = () => {
// useState훅 
//빈 배열 []는 상태변수 videos의 초기값, setVideos로 인해 상태변수 videos가 업데이트 됨
  const[videos,setVideos]=useState([]);
//useEffect훅
//2개의 매개변수(실행될 함수, 의존성 배열)
  useEffect(()=>{
    setVideos(videoData);//컴포넌트 마운드 될때 videoData를 상태에 설정
  },[]);//빈 배열이므로 1번만 실행
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
      {/*  */}
        {videos.map(video => (
          <div className="video-item" key={video.id}>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            <div className="video-info">
              <div className='video-title'>
                <img src={profile} alt="profile" className="profile" />
                <div>
                  <div>{video.title}</div>
                  <div>{video.channel}</div>
                  <div>{video.views} {video.uploaded}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid">
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
   
   
      </div> */}
      
    
    </div>
  );
};

export default Main;
