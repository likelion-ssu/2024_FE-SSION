import React from 'react';

import Header from './components/section/Header';
import Main from './components/section/Main';
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
