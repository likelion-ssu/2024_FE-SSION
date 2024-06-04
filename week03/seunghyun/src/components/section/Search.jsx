import React from 'react';
import search from '../../assets/img/icon/search.svg';

const Search = () => {
  return (
    <div id="search">
      <div className="search__inner">
        <div className="search__bar">
          <input placeholder='검색'></input>
          <img src={search} alt="search" width="24"/>
        </div>
      </div>
      <div className='btn__inner'>
      <button className="search-btn btn-active" type='button'>전체</button>
      <button className="search-btn" type='button'>음악</button>
      <button className="search-btn" type='button'>게임</button>
      <button className="search-btn" type='button'>ASAMR</button>
      <button className="search-btn" type='button'>라이브</button>
      <button className="search-btn" type='button'>만화 영화</button>
      <button className="search-btn" type='button'>액션 어드벤처 게임</button>
      <button className="search-btn" type='button'>최근 업로드된 영상</button>
      <button className="search-btn" type='button'>새로운 맞춤 동영상</button>
      </div>
    </div>


  );
};
export default Search;
