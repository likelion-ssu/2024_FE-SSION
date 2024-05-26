import React from "react";
import styled from "styled-components";

const HorizonLine = () => {
  return (
    <HorizonContainer>
      <Line />
    </HorizonContainer>
  );
};

export default HorizonLine;

const HorizonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 3rem;
  padding-top: 2rem;
`;

const Line = styled.div`
  flex: 1;
  border-bottom: 0.1rem solid #aaa;
`;
