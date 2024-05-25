import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/user_profile.jpg"

export const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <i className="fa-solid fa-bars menu-icon"></i>
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="nav-middle flex-div">
            <input type='text' placeholder='Search'></input>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='nav-right flex-div'>
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification_icon} alt="" />
            <img src={profile_icon} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Navbar