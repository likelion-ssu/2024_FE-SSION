import React from "react";
import "./styles/Header.css";
import search_voice from "./assets/search_voice.png";
import myLogo from "./assets/profile_my.png";
import newVideo from "./assets/profile_newVideo.png";
import notify from "./assets/profile_notify.png";

function Header() {
  return (
    <div className="header">
      <div className="searchWrapper"></div>
      <input type="text" placeholder="검색" className="header__search" />
      <img className="search_voice" src={search_voice}></img>
      <div className="header__icons">
        <img className="header__icon" src={newVideo}></img>
        <img className="header__icon" src={notify}></img>
        <img className="header__icon" src={myLogo}></img>
      </div>
    </div>
  );
}

export default Header;
