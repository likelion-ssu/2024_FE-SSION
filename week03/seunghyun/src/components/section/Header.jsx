import React from 'react';
import '../../assets/style/style.css';
import logo from '../../assets/img/logo.png';

import {LiaBarsSolid} from 'react-icons/lia';
import {LiaHomeSolid} from 'react-icons/lia';
import {LiaFileVideoSolid} from 'react-icons/lia';
import {LiaPlayCircleSolid} from 'react-icons/lia';
import {LiaClock} from 'react-icons/lia';
import {LiaKissWinkHeart} from 'react-icons/lia';

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header__logo">
        <div className="logo-icon">
          <LiaBarsSolid />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" width={100} />
        </div>
      </div>

      <nav className="header__menu">
        <div className="menu__div">
          <ul className="menu">
            <li>
              <a href="/" className="active">
                <LiaHomeSolid /> 홈
              </a>
            </li>
            <li>
              <a href="/">
                <LiaFileVideoSolid />
                쇼츠
              </a>
            </li>
            <li>
              <a href="/">
                <LiaPlayCircleSolid /> 구독
              </a>
            </li>
          </ul>
        </div>

        <div className="menu__div">
          <p className="menu__text">나</p>
          <ul className="menu">
            <li>
              <a href="/">
                <LiaClock /> 시청 기록
              </a>
            </li>
            <li>
              <a href="/">
                <LiaFileVideoSolid /> 재생목록
              </a>
            </li>
            <li>
              <a href="/">
                <LiaClock /> 나중에 볼 동영상
              </a>
            </li>
            <li>
              <a href="/">
                <LiaKissWinkHeart /> 좋아요 표시한 동영상
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
