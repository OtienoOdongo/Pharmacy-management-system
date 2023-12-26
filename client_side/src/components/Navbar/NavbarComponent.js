import React from 'react'
import Logo from '../../assets/Logo.svg';
import search from '../../assets/search.png';
import settings from '../../assets/settings.png';
import bell from '../../assets/bell.png';
import application from '../../assets/application.png';


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={Logo} alt="app logo" />
        <span>Lotus Medical Center</span>
      </div>
      <div className='icons'>
        <img src={search} className='icon' />
        <img src={settings} className='icon' />
        <img src={bell} className='icon' />
        <img src={application} className='icon' />
      </div>

    </div>

   
  )
}


export default Navbar