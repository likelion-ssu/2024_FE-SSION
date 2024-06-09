import styled from "styled-components";

function Nav() {
  return (
    <NavWrap>
      <NavSection>
        <NavList>홈</NavList>
        <NavList>shorts</NavList>
        <NavList>구독</NavList>
        <NavList>YouTube Music</NavList>
      </NavSection>
      <HoLine />
      <NavSection>
        <NavList>나</NavList>
        <NavList>내 채널</NavList>
        <NavList>시청기록</NavList>
        <NavList>재생목록</NavList>
        <NavList>내 동영상</NavList>
        <NavList>나중에 볼 동영상</NavList>
        <NavList>좋아요 표시한 동영상</NavList>
        <NavList>오프라인 저장 동영상</NavList>
      </NavSection>
      <HoLine />

      <NavSection>
        <NavListName>구독</NavListName>
        <NavList>런닝맨</NavList>
        <NavList>침착맨</NavList>
        <NavList>나니와단시</NavList>
        <NavList>TWS</NavList>
        <NavList>더보기</NavList>
      </NavSection>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  width: 250px;
  top: 50px;
`;

const NavSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 250px;
  margin: 20px;
`;

const NavList = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 200px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  &:hover {
    background-color: #bbbbbb;
  }
`;
const NavListName = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 200px;
  height: 30px;
  border: none;
  border-radius: 10px;
`;

const HoLine = styled.div`
  width: 250px;
  height: 2px;
  border-bottom: 1px solid #bbbbbb;
`;
