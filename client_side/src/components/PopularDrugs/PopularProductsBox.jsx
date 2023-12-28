import React from 'react';
import './PopularProductsBox.scss';
import { mostPopularDrugs } from '../../data.jsx';

const PopularProductsBox = () => {
  return (
    <div className='popular'>
      <h1>Most Popular Pharmaceutical Products</h1>
      <div className='list'>
        {mostPopularDrugs.map((drugs) => (
          <div className='itemlist' key={drugs.id}>
            <div className='drugs'>
              <img src={drugs.img} alt={drugs.ProductName} />
              <div className='drugstext'>
                <p>Manufacturer: {drugs.Manufacturer}</p>
                <p>Product Name: {drugs.ProductName}</p>
                <p >Generic Name: {drugs.GenericName}</p>
              </div>   
            </div>
            <span className='amount'>KES {drugs.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProductsBox;
