import React, { useState } from 'react';
import Search from './Search';
import Card from './Card';

const Main = () => {

  return (
    <main id="main" role="main">
      <Search />
      <Card/>
    </main>
  );
};

export default Main;
