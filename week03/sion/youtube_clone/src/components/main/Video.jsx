/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import styled from "styled-components";
import choonsikProfile from "../../assets/img/choonsikProfile.png";
import cover1 from "../../assets/img/cover1.png";
import cover2 from "../../assets/img/cover2.png";
import cover3 from "../../assets/img/cover3.png";
import cover4 from "../../assets/img/cover4.png";
import cover5 from "../../assets/img/cover5.png";
import cover6 from "../../assets/img/cover6.png";

function Video() {
  return (
    <>
      <VideoSection>
        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover1} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>[KPOP Playlist] 요즘 듣는 케이팝 노동요</VideoName>

                <VideoInfoMini>
                  <VideoProfile>김로라</VideoProfile>
                  <VideoTime>조회수 31만회 ・ 9일 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>

        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover2} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>Playlist 기분 좋은 하루의 시작</VideoName>

                <VideoInfoMini>
                  <VideoProfile>기분 재생목록</VideoProfile>
                  <VideoTime>조회수 27만회 ・ 3개월 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>

        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover3} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>
                  [Playlist] 기분 좋은 청량함이 가득한 J-POP🌊
                </VideoName>

                <VideoInfoMini>
                  <VideoProfile>채널 이름</VideoProfile>
                  <VideoTime>조회수 274만회 ・ 3년 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>

        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover4} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>
                  [Playlist] 팝송이지만 대한민국에서 떼창 가능🔥
                </VideoName>

                <VideoInfoMini>
                  <VideoProfile>무지개RAINBOW</VideoProfile>
                  <VideoTime>조회수 19만회 ・ 3개월 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>

        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover5} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>
                  [Playlist] 청량함을 가득 담은 여름의 멜로디🌊
                </VideoName>

                <VideoInfoMini>
                  <VideoProfile>섭씨</VideoProfile>
                  <VideoTime>조회수 5.3만회 ・ 2주 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>

        <VideoWrap>
          <VideoContainer>
            <VideoCover src={cover6} alt="영상 커버" />

            <VideoInfo>
              <VideoProfileImg src={choonsikProfile} alt="프로필 이미지" />

              <VideoInfoSection>
                <VideoName>
                  Playlist😎 활기찬 아침에 듣기 좋은 신나는 팝송 모음
                </VideoName>

                <VideoInfoMini>
                  <VideoProfile>피스</VideoProfile>
                  <VideoTime>조회수 34만회 ・ 4개월 전</VideoTime>
                </VideoInfoMini>
              </VideoInfoSection>
            </VideoInfo>
          </VideoContainer>
        </VideoWrap>
      </VideoSection>
    </>
  );
}

export default Video;

const VideoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 120px;
  left: 270px;
`;
const VideoWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 400px;
  margin: 5px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoInfo = styled.section`
  display: flex;
`;

const VideoInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const VideoName = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

const VideoInfoMini = styled.div`
  font-size: 13px;
  gap: -5px;
  display: flex;
  flex-direction: column;
`;

const VideoProfile = styled.div`
  font-size: 15px;
`;

const VideoTime = styled.p`
  font-size: 13px;
`;

const VideoProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
`;

const VideoCover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;
