import styled from "styled-components";

import HomeHeader from "../components/HomeHeader";
import HomeHeaderBottom from "../components/HomeHeaderBottom";
import HomeNav from "../components/HomeNav";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeContainer>
        <HomeNav />
        <HomeHeaderBottom />
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
