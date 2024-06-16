import { styled } from "styled-components";

function Title() {
  return <TitleFont>Todo List</TitleFont>;
}

export default Title;

const TitleFont = styled.p`
  display: flex;
  font-size: 5rem;
  font-weight: 900;
`;
