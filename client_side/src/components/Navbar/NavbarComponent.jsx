import React from 'react'
import './NavbarComponent.scss'



const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="Logo.svg" alt="app logo" />
        <span>Lotus Medical Center</span>
      </div>
      <div className='icons'>
        <img src="search.png" className='icon' />
        <img src="settings.png" className='icon' />
        <img src="application.png" className='icon' />
        <div clasName='notification'>
          <img src="notification.png" alt="notification Bell" />
          <span>1</span>
        </div>
        <div className='userProfile'></div>
          <img src="avatar.png" alt="user profile" />
          <span>Rodgers</span>
      </div>

    </div>
    

   
  )
}


export default Navbar