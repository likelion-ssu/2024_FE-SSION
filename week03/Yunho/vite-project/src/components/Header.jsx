function Header() {
  return (
    <header>
      <div id="header-container">
        <div id="start">
          <img src="" alt="" />
          <div id="main_logo">
            <img src="" alt="" />
          </div>
        </div>
        <div id="center">
          <div id="search">
            
            <form id="search-form" action="/results">
              <div id="container"></div>
              <div id="search-container"></div>
            </form>
            <button id="search-icon-legacy"></button>
          </div>
          <div id="voice-search-button-container">
            <button id="voice-search-button"></button>
          </div>

        </div>
        <div id="end">
          <div id="end-button-container">
            <div id="end-button">
              <a href=""></a>
            </div>
            <div id="end-button">
              <a href=""></a>
            </div>
            <div id="end-button">
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
