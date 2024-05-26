import styled from "styled-components";

import HomeHeader from "../components/Header/HomeHeader";
import HomeHeaderBottom from "../components/Header/HomeHeaderBottom";
import HomeNav from "../components/aside/HomeNav";
import HomeMainSection from "../components/Main/HomeMainSection";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeContainer>
        <HomeNav />
        <HomeDiv>
          <HomeHeaderBottom />
          <HomeMainSection />
        </HomeDiv>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
