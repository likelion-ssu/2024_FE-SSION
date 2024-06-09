import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMagnifyingGlass,
  faVideo,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import choonsikProfile from "../../assets/img/choonsikProfile.png";
import logo from "../../assets/img/logo.png";
function Header() {
  return (
    <HeaderWrap>
      <Logo img src={logo} alt="프로필이미지" />
      <Search>
        <SearchBar placeholder="검색" />
        <SearchBtn>
          <SearchIcon icon={faMagnifyingGlass} />
        </SearchBtn>
        <Mic>
          <SearchIcon icon={faMicrophone} />
        </Mic>
      </Search>
      <Profile>
        <ProfileIcon icon={faVideo} />
        <ProfileIcon icon={faBell} />
        <ProfileImg img src={choonsikProfile} alt="프로필이미지" />
      </Profile>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 98vw;
  background-color: #fff;
  position: fixed;
  top: 0px;
  padding-top: 5px;
`;

const Search = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 550px;
  height: 40px;
  border-radius: 40px 0px 0px 40px;
  border: 1px solid gray;
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 42px;
  border-radius: 0px 40px 40px 0px;
  border: 1px solid gray;
  background-color: #dfdfdf;
`;
const Mic = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #dfdfdf;
  font-size: 25px;
  margin-left: 20px;
  border: none;
  display: flex;
  align-items: center;
`;

const Profile = styled.section`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 140px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
`;
const Logo = styled.img`
  width: 120px;
  height: auto;
`;
const SearchIcon = styled(FontAwesomeIcon)`
  display: flex;
  font-size: 25px;
`;
const ProfileIcon = styled(FontAwesomeIcon)`
  display: flex;
  font-size: 25px;
`;
