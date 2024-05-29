import styled from 'styled-components';
import hamburgerIcon from '../assets/png/002-hamburger.png';
import searchIcon from '../assets/png/026-search-interface-symbol.png';
import voiceIcon from '../assets/png/027-mic.png';
import createIcon from '../assets/png/005-video.png';
import alarmIcon from '../assets/png/028-bell.png';
import accountIcon from '../assets/png/020-youtube-kids.png'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  text-align: center;
  top: 0;
  left: 0;
  background-color: #f8f8f8;

  & #header-container {
    margin: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  & #start {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 180px;
  }

  & #navigator_button {
    width: 25px;
    height: 80%;
  }

  & #main_logo {
    width: 120px;
    height: 80%;
  }

  & #center {
    display: flex;
    align-items: center;
  }

  & #search {
    display: flex;
    align-items: center;
  }

  & #search-form {
    display: flex;
    align-items: center;
  }

  & #search-container {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 1px solid gray;
    border-right: none;
    border-radius: 40px 0 0 40px;
    padding: 0 4px 0 16px;
  }

  & #search-input {
    height: 26px;
    width: 400px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  & #search-icon {
    border: 1px solid #d3d3d3;
    background-color: #f8f8f8;
    border-radius: 0 40px 40px 0;
    cursor: pointer;
    height: 30px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & #search-icon-img {
    width: 20px;
    height: 20px;
  }

  & #voice-search-button-container {
    margin-left: 20px;
  }

  & #voice-search-button {
    border-radius: 20px;
    border: none;
    width: 40px;
    height: 30px;
    cursor: pointer;
  }

  & #voice-icon-img {
    width: 15px;
    height: 15px;
  }

  & #end {
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  & #end-button-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    margin-right: 20px;
  }

  & #create-icon-img {
    width: 30px;
    height: 30px;
  }

  & #alarm-icon-img {
    width: 30px;
    height: 30px;
  }

  & #account-icon-img {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div id="header-container">
        <div id="start">
          <img id="navigator_button" src={hamburgerIcon} alt="navigator" />
          <img
            id="main_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iaDFk0zCE2dTkJGXMp2RmCLz2LgVwGmMAkajE3Xn&s"
            alt="main_logo"
          />
        </div>
        <div id="center">
          <div id="search">
            <form id="search-form" action="/results">
              <div id="search-container">
                <input id="search-input" type="text" placeholder="검색" />
              </div>
              <button id="search-icon" type="submit">
                <img id="search-icon-img" src={searchIcon} alt="검색아이콘" />
              </button>
            </form>
          </div>
          <div id="voice-search-button-container">
            <button id="voice-search-button">
              <img id="voice-icon-img" src={voiceIcon} alt="" />
            </button>
          </div>
        </div>
        <div id="end">
          <div id="end-button-container">
            <div id="end-button">
              <a href="">
                <img id="create-icon-img" src={createIcon} alt="" />
              </a>
            </div>
            <div id="end-button">
              <a href="">
                <img id="alarm-icon-img" src={alarmIcon} alt="" />
              </a>
            </div>
            <div id="end-button">
              <a href="">
                <img id="account-icon-img" src={accountIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
