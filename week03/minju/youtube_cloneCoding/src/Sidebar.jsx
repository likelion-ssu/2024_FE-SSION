import React from "react";
import "./styles/Sidebar.css";
import header_1 from "./assets/header_1.png";
import header_2 from "./assets/header_2.png";
import menu_home from "./assets/menu_home.png";
import menu_shorts from "./assets/menu_shorts.png";
import menu_subscript from "./assets/menu_subscript.png";
import menu_music from "./assets/menu_youtubeMusic.png";
import myMenu_download from "./assets/myMenu_download.png";
import myMenu_history from "./assets/myMenu_history.png";
import myMenu_later from "./assets/myMenu_later.png";
import myMenu_liked from "./assets/myMenu_liked.png";
import myMenu_myChannel from "./assets/myMenu_myChannel.png";
import myMenu_myList from "./assets/myMenu_myList.png";
import myMenu_myVideo from "./assets/myMenu_myVideo.png";
import subscriptActive from "./assets/header_subscriptActive.png";
import subscriptImg from "./assets/header_subscriptImg.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img className="sidebar_img" src={header_1}></img>
        <img className="sidebar_img" src={header_2}></img>
      </div>
      <ul className="sidebar_nav_menu">
        <li id="sidebar_home_selected" className="menu_menuWrapper">
          <img className="myMenu_icon" src={menu_home}></img>
          <div sidebar_home_selectedclassName="myMenu_text">{"홈"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img className="myMenu_icon" src={menu_shorts}></img>
          <div className="myMenu_text">{"Shorts"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img className="myMenu_icon" src={menu_subscript}></img>
          <div className="myMenu_text">{"구독"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img className="myMenu_icon" src={menu_music}></img>
          <div className="myMenu_text">{"Youtube Music"}</div>
        </li>
      </ul>
      <ul className="sidebar_nav_myMenu">
        <div className="sidebar_header">{"나 >"}</div>
        <li className="menu_menuWrapper">
          <img src={myMenu_myChannel} className="myMenu_icon"></img>
          <div className="myMenu_text">{"내 채널"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_history} className="myMenu_icon"></img>
          <div className="myMenu_text">{"시청 기록"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_myList} className="myMenu_icon"></img>
          <div className="myMenu_text">{"재생목록"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_myVideo} className="myMenu_icon"></img>
          <div className="myMenu_text">{"내 동영상"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_later} className="myMenu_icon"></img>
          <div className="myMenu_text">{"나중에 볼 동영상"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_liked} className="myMenu_icon"></img>
          <div className="myMenu_text">{"좋아요 표시한 영상"}</div>
        </li>
        <li className="menu_menuWrapper">
          <img src={myMenu_download} className="myMenu_icon"></img>
          <div className="myMenu_text">{"오프라인 저장 동영상"}</div>
        </li>
      </ul>
      <ul className="sidebar_subscription">
        <div className="sidebar_header">{"구독"}</div>
        <li className="menu_subWrapper">
          <img src={subscriptImg} className="myMenu_subscriptIcon"></img>
          <div className="subscript_channel">{"구독 채널"}</div>
          <img src={subscriptActive} className="myMenu_icon"></img>
        </li>
        <li className="menu_subWrapper">
          <img src={subscriptImg} className="myMenu_subscriptIcon"></img>
          <div className="subscript_channel">{"구독 채널"}</div>
          <img src={subscriptActive} className="myMenu_icon"></img>
        </li>
        <li className="menu_subWrapper">
          <img src={subscriptImg} className="myMenu_subscriptIcon"></img>
          <div className="subscript_channel">{"구독 채널"}</div>
          <img src={subscriptActive} className="myMenu_icon"></img>
        </li>
        <li className="menu_subWrapper">
          <img src={subscriptImg} className="myMenu_subscriptIcon"></img>
          <div className="subscript_channel">{"구독 채널"}</div>
          <img src={subscriptActive} className="myMenu_icon"></img>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
