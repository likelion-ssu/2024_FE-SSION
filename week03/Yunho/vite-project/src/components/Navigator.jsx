import styled from "styled-components";
import homeIcon from "../assets/png/029-home.png";
import shortsIcon from "../assets/png/030-shorts.png";
import subscriptionIcon from "../assets/png/031-subscription.png";
import myProfileIcon from "../assets/png/profile.png";
import historyIcon from "../assets/png/003-history.png";
import playlistIcon from "../assets/png/004-play-list.png";
import myVideoIcon from "../assets/png/006-play-button.png";
import myMovieIcon from "../assets/png/013-clapper.png";
import watchLaterIcon from "../assets/png/008-clock.png";
import likeIcon from "../assets/png/009-like.png";
import trendingIcon from "../assets/png/010-fire.png";
import shoppingIcon from "../assets/png/011-bag.png";
import musicIcon from "../assets/png/012-music.png";
import liveIcon from "../assets/png/014-live.png";
import gameIcon from "../assets/png/015-console.png";
import sportsIcon from "../assets/png/016-trophy.png";
import studyIcon from "../assets/png/017-bulb.png";
import podcastIcon from "../assets/png/018-podcast.png";
import ytStudioIcon from "../assets/png/019-youtube.png";
import ytKidsIcon from "../assets/png/020-youtube-kids.png";
import ytMusicIcon from "../assets/png/021-youtube-1.png";
import settingIcon from "../assets/png/022-setting.png";
import flagIcon from "../assets/png/023-red-flag.png";
import questionIcon from "../assets/png/024-question.png";
import exclamationIcon from "../assets/png/025-sign.png";

const StyledNavigator = styled.nav`
  margin-top: 60px;
  width: 13rem;
  padding-top: 1rem;
  /* 스크롤처리 해야함 */
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: auto;

  & .navigator-button-style {
    cursor: pointer;
    margin: 0 0.7rem;
    border-radius: 10px;
    height: 36px;
    text-decoration-line: none;
    padding: 0.2rem 0.4rem;
  }

  & .navigator-button-style:hover {
    background-color: #9b9b9b;
  }

  & .navigator-button-style a {
    text-decoration-line: none;
    display: flex;
    align-items: center;
    color: black;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .navigator-button-style img {
    width: 25px;
    height: 25px;
    margin-right: 1.2rem;
  }

  & hr {
    opacity: 0.6;
  }

  & .navigator-section-header a {
    padding: 0.5rem 0;
  }

  & .makeRound {
    border-radius: 20px;
  }
`;

function Navigator() {
  return (
    <StyledNavigator>
      <section id="navigator-main-button">
        <div id="home" className="navigator-button-style">
          <a href="">
            <img src={homeIcon} alt="" />홈
          </a>
        </div>
        <div id="shorts" className="navigator-button-style">
          <a href="">
            <img src={shortsIcon} alt="" />
            Shorts
          </a>
        </div>
        <div id="subscription" className="navigator-button-style">
          <a href="">
            <img src={subscriptionIcon} alt="" />
            구독
          </a>
        </div>
      </section>
      <hr />
      <section id="navigator-my-button">
        <div
          id="my"
          className="navigator-button-style navigator-section-header"
        >
          <a href="">
            <span>나</span>
          </a>
        </div>
        <div id="my_channel" className="navigator-button-style">
          <a href="">
            <img src={myProfileIcon} alt="" />내 채널
          </a>
        </div>
        <div id="watching_history" className="navigator-button-style">
          <a href="">
            <img src={historyIcon} alt="" />
            시청 기록
          </a>
        </div>
        <div id="playlist" className="navigator-button-style">
          <a href="">
            <img src={playlistIcon} alt="" />
            재생 목록
          </a>
        </div>
        <div id="my_video" className="navigator-button-style">
          <a href="">
            <img src={myVideoIcon} alt="" />내 동영상
          </a>
        </div>
        <div id="my_movie" className="navigator-button-style">
          <a href="">
            <img src={myMovieIcon} alt="" />내 영화
          </a>
        </div>
        <div id="video_to_watch_later" className="navigator-button-style">
          <a href="">
            <img src={watchLaterIcon} alt="" />
            나중에 볼 동영상
          </a>
        </div>
        <div id="liked_video" className="navigator-button-style">
          <a href="">
            <img src={likeIcon} alt="" />
            좋아요 표시한 동영상
          </a>
        </div>
      </section>
      <hr />
      <section id="subscription">
        <div
          id="subscription"
          className="navigator-button-style navigator-section-header"
        >
          <a href="">
            <span>구독</span>
          </a>
        </div>
        <div id="subscription_1" className="navigator-button-style">
          <a href="">
            <img
              className="makeRound"
              src="https://yt3.ggpht.com/ytc/AIdro_lqUlOPY3CZFIrtBaXmtPvV9fOspGjlRosursGiN5yr3q0=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            정글유튜버 블루버튼
          </a>
        </div>
        <div id="subscription_2" className="navigator-button-style">
          <a href="">
            <img
              className="makeRound"
              src="https://yt3.ggpht.com/ytc/AIdro_kDRQFEoDAOjXmPhoKT6hUs_skYotYGjrBegtQReW_2Go4=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            랄로
          </a>
        </div>
        <div id="subscription_3" className="navigator-button-style">
          <a href="">
            <img
              className="makeRound"
              src="https://yt3.ggpht.com/tpFT3dTpHEr166BL1bMTb7hXBkWJc2cFkUqnY0C4JNiaTUJNXpmNeCgd1SHWLqlUewvJrAVSUK8=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            꿀템TV
          </a>
        </div>
        <div id="subscription_4" className="navigator-button-style">
          <a href="">
            <img
              className="makeRound"
              src="https://yt3.ggpht.com/CC3lKLV6DIJabtrU96HjtyXK4f8ajDUwTvlApdYS8QA_HniNBX9h0ICqNEDbOZs6La7FRwWE=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            숏박스
          </a>
        </div>
        <div id="subscription_5" className="navigator-button-style">
          <a href="">
            <img
              className="makeRound"
              src="https://yt3.ggpht.com/1KkbXFZ_37Nzp05IvWgoymyW73B4KXJK4J3DbT2VLBxs5BxIQ4GQgB_zz3eqOJMh7ox1Fihasfc=s88-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            이스타TV
          </a>
        </div>
      </section>
      <hr />
      <section id="research">
        <div
          id="research"
          className="navigator-button-style navigator-section-header"
        >
          <a href="">
            <span>탐색</span>
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={trendingIcon} alt="" />
            인기 급상승
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={shoppingIcon} alt="" />
            쇼핑
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={musicIcon} alt="" />
            음악
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={liveIcon} alt="" />
            실시간
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={gameIcon} alt="" />
            게임
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={sportsIcon} alt="" />
            스포츠
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={studyIcon} alt="" />
            학습 프로그램
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={podcastIcon} alt="" />
            팟캐스트
          </a>
        </div>
      </section>
      <hr />
      <section id="more-youtube_apps">
        <div id="" className="navigator-button-style">
          <a href="">
            <img
              src="https://www.youtube.com/s/desktop/aef0ced3/img/favicon.ico"
              alt=""
            />
            YouTube Premium
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={ytStudioIcon} alt="" />
            YouTube 스튜디오
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={ytMusicIcon} alt="" />
            YouTube Music
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={ytKidsIcon} alt="" />
            YouTube Kids
          </a>
        </div>
      </section>
      <hr />
      <section id="as-youtube">
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={settingIcon} alt="" />
            설정
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={flagIcon} alt="" />
            신고 기록
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={questionIcon} alt="" />
            고객센터
          </a>
        </div>
        <div id="" className="navigator-button-style">
          <a href="">
            <img src={exclamationIcon} alt="" />
            의견 보내기
          </a>
        </div>
        <hr />
      </section>
      <hr />
      <section id="info-youtube"></section>
    </StyledNavigator>
  );
}

export default Navigator;
