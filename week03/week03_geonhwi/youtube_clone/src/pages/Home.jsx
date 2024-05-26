import styled from "styled-components";

import HomeHeader from "../components/HomeHeader";
import HomeHeaderBottom from "../components/HomeHeaderBottom";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeHeaderBottom />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
