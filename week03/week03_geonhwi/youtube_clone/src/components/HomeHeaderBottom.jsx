import styled from "styled-components";

function HomeHeaderBottom() {
  return (
    <HomeHeaderBottomWrapper>
      <HomeHeaderBottomBtn>전체</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtn>게임</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtn>음악</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtn>믹스</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtn>라이브</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtn>야구</HomeHeaderBottomBtn>
      <HomeHeaderBottomBtnLong>최근에 업로드된 동영상</HomeHeaderBottomBtnLong>
      <HomeHeaderBottomBtnMiddle>감상한 동영상</HomeHeaderBottomBtnMiddle>
      <HomeHeaderBottomBtnMiddle>새로운 맞춤 동영상</HomeHeaderBottomBtnMiddle>
    </HomeHeaderBottomWrapper>
  );
}

export default HomeHeaderBottom;

const HomeHeaderBottomWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92rem;
  height: 5.6rem;
  gap: 1rem;
`;

const HomeHeaderBottomBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #dedede;

  border-radius: 1rem;

  border: none;
`;

const HomeHeaderBottomBtnLong = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #dedede;

  border-radius: 1rem;

  border: none;
`;

const HomeHeaderBottomBtnMiddle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #dedede;

  border-radius: 1rem;

  border: none;
`;
