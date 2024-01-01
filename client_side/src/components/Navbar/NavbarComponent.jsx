import React from 'react';
import './NavbarComponent.scss';

const Navbar = () => {
  return (
    <div className='dashboard-navbar'>
      <div className='logo'>
        <img src="Logo.svg" alt="app logo" />
        <span>Lotus Medical Center</span>
      </div>
      <div className='dashboard-icons'>
        <img src="search.png" className='icon' alt="search" />
        <img src="settings.png" className='icon' alt="settings" />
        <img src="application.png" className='icon' alt="application" />
        <div className='notification'>
          <img src="notification.png" alt="notification Bell" />
          <span>1</span>
        </div>
        <div className='user-profile'>
          <img src="profile-image.jpg" alt="user profile" />
          <span>Milly</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


