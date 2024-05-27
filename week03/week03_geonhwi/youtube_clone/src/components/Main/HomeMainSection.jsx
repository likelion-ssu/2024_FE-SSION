import React from "react";
import styled from "styled-components";
import { mainConstants } from "../constants/mainConstants";

function HomeMainSection() {
  return (
    <HomeMainWrapper>
      <HomeMainContainer>
        {mainConstants.map((item) => (
          <Card key={item.id}>
            <img src={item.imgSrc} alt={`img-${item.id}`} />
            <CardContent>
              <Title>{item.title}</Title>
              <Place>{item.place}</Place>
              <EndTime>{item.endTime}</EndTime>
            </CardContent>
          </Card>
        ))}
      </HomeMainContainer>
    </HomeMainWrapper>
  );
}

export default HomeMainSection;

const HomeMainWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  width: 100%;
  height: 100%;
`;

const HomeMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 95%;
  height: 105%;
  margin-top: 8rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const Place = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin: 0.5rem 0 0 0;
`;

const EndTime = styled.p`
  font-size: 0.75rem;
  color: #999;
  margin: 0.5rem 0 0 0;
`;
