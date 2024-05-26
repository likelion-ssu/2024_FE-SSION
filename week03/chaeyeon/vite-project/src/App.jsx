import React from 'react'
import Navbar  from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import './index.css';

export const App = () => {
  return (
    <div>
      <div className="app-navbar">
        <Navbar/>
      </div>
      <div className='sidebar-main-wrapper'>
        <div className="app-sidebar">
          <Sidebar/>
        </div>
        <Main/>
      </div>
    </div>
  )
}

export default App