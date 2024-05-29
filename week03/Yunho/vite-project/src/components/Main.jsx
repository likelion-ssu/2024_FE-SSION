import styled from 'styled-components';
import MainSection from './MainSection';
import content_img01 from '../assets/content_Img/content_img01.jpg';
import content_img02 from '../assets/content_Img/content_img02.jpg';
import content_img03 from '../assets/content_Img/content_img03.jpg';
import content_img04 from '../assets/content_Img/content_img04.jpg';
import content_img05 from '../assets/content_Img/content_img05.jpg';
import content_img06 from '../assets/content_Img/content_img06.jpg';
import content_img07 from '../assets/content_Img/content_img07.jpg';
import content_img08 from '../assets/content_Img/content_img08.jpg';
import content_img09 from '../assets/content_Img/content_img09.jpg';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 10px;
  margin-left: 300px;
  margin-top: 80px;
  width: calc(100% - 420px);
  height: 100vh;
`;
function Main() {
  return (
    <StyledMain>
      <MainSection
        img_src_main={content_img01}
        img_src_sub="https://yt3.ggpht.com/1KkbXFZ_37Nzp05IvWgoymyW73B4KXJK4J3DbT2VLBxs5BxIQ4GQgB_zz3eqOJMh7ox1Fihasfc=s68-c-k-c0x00ffffff-no-rj"
        title="프로 선수 출신이 말하는 선수들이 삭발하는 이유&악수 거부를 하는 이유와 삭발이 가져오는 횻과"
        creator="이스타tv"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img02}
        img_src_sub="https://yt3.ggpht.com/ytc/AIdro_kAXUnHu42KVSr6t2gmfstdEmtLqHYTSXeYouIkoHXQb5c=s68-c-k-c0x00ffffff-no-rj"
        title="[4k]볼빨간사춘기 조선대학교 축제 직캠"
        creator="마전이"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img03}
        img_src_sub="https://yt3.ggpht.com/RjzsGfRc5vBFcVgPKN7yi4vDZGSUKL7pWE__oaK4ekF8Hk6a4696mI_ewK0a5DLmXdy3a1yj=s68-c-k-c0x00ffffff-no-rj"
        title="[Playlist] 모르는 사람 없지? 포스트 말론 (Post Malone) 띵곡 모음❤️"
        creator="쩌리뮤직"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img04}
        img_src_sub="https://yt3.ggpht.com/xdwNn5wI-XpaLK5NVvpVk7uqO36xph4xV714vcJ1k354BbxlQL2WO4JeCE_zaBvtbA9C5QKT8A=s68-c-k-c0x00ffffff-no-rj"
        title="억 | DRX vs. EDG 게임2 하이라이트 | Quarter Finals | 10.24 | 2022 월드 챔피언쉽"
        creator="LCK"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img05}
        img_src_sub="https://yt3.ggpht.com/gnbapxR_txm3jiwpcCWU1HHcMPVi2Y1AE2MwwfA-a6Scvaq8U0zMvV_LUGfppuMaUVv-qcJ7mA=s68-c-k-c0x00ffffff-no-rj"
        title="프렙과 선선해진 도시의 밤거리 (playlist)"
        creator="리플레이"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img06}
        img_src_sub="https://yt3.ggpht.com/GZCBsV1QRhy6iaKg88ePIegm39dIZmvYn4SrgFufVLjEWccIhj-GKA5q2nPfgf2lkNDflUwKcQ=s68-c-k-c0x00ffffff-no-rj"
        title="강아지도 무시하는 남자"
        creator="말왕TV"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img07}
        img_src_sub="https://yt3.ggpht.com/ytc/AIdro_nfmXFeu0gY8brXdZw-GF--wpZqd4D-uU-00J61hqyR2w=s88-c-k-c0x00ffffff-no-rj"
        title="NMIXX - Party O'clock 교차편집(stage mix)"
        creator="교차채널"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img08}
        img_src_sub="https://yt3.ggpht.com/i38jXnaE5U7cv0G9NxwIYmMam40c2qmSfwJDjnkLFCh6QFU2hEQg9MBVCemAT8wUEhXzA4tR=s88-c-k-c0x00ffffff-no-nd-rj"
        title="Oasis - Don't Look Back In Anger"
        creator="Oasis"
        views="2.4k"
        time="12시간 전"
      />
      <MainSection
        img_src_main={content_img09}
        img_src_sub="https://yt3.ggpht.com/gnbapxR_txm3jiwpcCWU1HHcMPVi2Y1AE2MwwfA-a6Scvaq8U0zMvV_LUGfppuMaUVv-qcJ7mA=s68-c-k-c0x00ffffff-no-rj"
        title="How to SZA"
        creator="음악은 공튜브"
        views="2.4k"
        time="12시간 전"
      />
    </StyledMain>
  );
}

export default Main;
