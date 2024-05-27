import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faKeyboard,
  faMagnifyingGlass,
  faMicrophone,
  faVideo,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function HomeHeader() {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderSideContainer>
        <Customicon icon={faBars} />
        <FontAwesomeIcons icon={faYoutube} />
        <PreMium>premium</PreMium>
      </HomeHeaderSideContainer>
      <HomeHeaderInputContainer>
        <SearchBar>
          <SearchBarInput placeholder="검색" />
          <KeyBoard icon={faKeyboard} />
          <SearchIcon icon={faMagnifyingGlass} />
        </SearchBar>
        <Mike icon={faMicrophone} />
      </HomeHeaderInputContainer>
      <HomeHeaderRightSideContainer>
        <Video icon={faVideo} />
        <Bell icon={faBell} />
        <User icon={faUser} />
      </HomeHeaderRightSideContainer>
    </HomeHeaderWrapper>
  );
}

export default HomeHeader;

const HomeHeaderWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 5.6rem;
  padding: 0 4rem;
`;

const HomeHeaderSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  width: 20rem;
  height: 5.6rem;
`;

const Customicon = styled(FontAwesomeIcon)`
  display: flex;
  height: 2.4rem;
  padding: 1rem;
`;

const FontAwesomeIcons = styled(FontAwesomeIcon)`
  display: flex;
  height: 4rem;
  margin-left: 2rem;
  color: red;
`;

const PreMium = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const HomeHeaderInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55rem;

  margin-left: 20rem;
  margin-top: 1.3rem;

  border: 0.1rem solid;
  border-radius: 2rem;
`;

const SearchBarInput = styled.input`
  display: flex;
  align-items: flex-start;

  height: 3.5rem;
  width: 45rem;

  border: none;

  outline: none;
`;

const KeyBoard = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
  padding-left: 2rem;
`;

const Mike = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
  margin-top: 1.3rem;
  padding-left: 3rem;
`;

const HomeHeaderRightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30rem;
`;

const Video = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
  margin-top: 1.3rem;
  padding-left: 3rem;
`;

const Bell = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
  margin-top: 1.3rem;
  padding-left: 3rem;
`;

const User = styled(FontAwesomeIcon)`
  display: flex;
  height: 2rem;
  margin-top: 1.3rem;
  padding-left: 3rem;
`;
