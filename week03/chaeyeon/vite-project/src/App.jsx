import React from 'react'
import Navbar  from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import './index.css';

export const App = () => {
  return (
    <div>
      <div className="app-navbar">
        <Navbar/>
      </div>
      <div className="app-sidebar">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App