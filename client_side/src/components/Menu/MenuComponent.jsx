import React from 'react';
import './MenuComponent.scss';
import { NavLink } from 'react-router-dom';
import { sidebarMenu } from '../../data';

const MenuComponent = () => {
  return (
    <div className='menu'>
      {sidebarMenu.map((section) => (
        <div key={section.id} className='item'>
          <span className='title'>{section.title}</span>
          {section.listItems.map((item) => (
            <NavLink key={item.id} to={item.url} className="main-item">
              <img src={item.icon} alt={`${item.title} image`} />
              <span className='Item-title'>{item.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
