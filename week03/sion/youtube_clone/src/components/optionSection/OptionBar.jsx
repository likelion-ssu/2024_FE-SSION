import styled from "styled-components";

function Option() {
  return (
    <OptionWrap>
      <OptionBtn>전체</OptionBtn>
      <OptionBtn>음악</OptionBtn>
      <OptionBtn>믹스</OptionBtn>
      <OptionBtn>라이브</OptionBtn>
      <OptionBtn>게임</OptionBtn>
      <OptionBtn>랩</OptionBtn>
      <OptionBtn>최근에 업로드된 동영상</OptionBtn>
      <OptionBtn>감상한 동영상</OptionBtn>
      <OptionBtn>새로운 맞춤 동영상</OptionBtn>
    </OptionWrap>
  );
}

export default Option;

const OptionWrap = styled.section`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 18%;
  top: 7%;
  background-color: #fff;
  margin-top: 10px;
  padding: 5px;
`;

const OptionBtn = styled.button`
  height: 30px;
  padding: 0px 10px;
  border-radius: 10px;
  margin-right: 10px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #dfdfdf;

  &:hover {
    background-color: #bbbbbb;
  }
`;
