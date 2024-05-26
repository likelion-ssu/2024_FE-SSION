import styled from "styled-components";
import HorizonLine from "./common/HorizonLine";

function HomeNav() {
  return (
    <HomeNavWrapper>
      <HomeNavContainer>
        <HomeNavList>홈</HomeNavList>
        <HomeNavList>shorts</HomeNavList>
        <HomeNavList>구독</HomeNavList>
        <HomeNavList>YouTube Music</HomeNavList>
      </HomeNavContainer>
      <HorizonLine />
      <HomeNavContainer>
        <HomeNavList>나</HomeNavList>
        <HomeNavList>내 채널</HomeNavList>
        <HomeNavList>시청기록</HomeNavList>
        <HomeNavList>재생목록</HomeNavList>
        <HomeNavList>내 동영상</HomeNavList>
        <HomeNavList>나중에 볼 동영상</HomeNavList>
        <HomeNavList>좋아요 표시한 동영상</HomeNavList>
        <HomeNavList>오프라인 저장 동영상</HomeNavList>
      </HomeNavContainer>
      <HorizonLine />
      <HomeNavContainer>
        <HomeNavList>구독</HomeNavList>
      </HomeNavContainer>
    </HomeNavWrapper>
  );
}

export default HomeNav;

const HomeNavWrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
`;

const HomeNavContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;

  padding-top: 3rem;
  padding-left: 3rem;
`;

const HomeNavList = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 20rem;
  height: 3rem;

  border: none;

  border-radius: 1rem;

  &:hover {
    background-color: lightgray;
  }
`;
