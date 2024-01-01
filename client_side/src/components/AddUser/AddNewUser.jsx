import React from 'react';
import './AddNewUser.scss';

const AddNewUser = ({ setOpen, slug, columns }) => {


    const formSubmit = (e) => {
        e.preventDefault()
        //add new item
        // use axios.post(`//api/${slug}s`, {pass any data})
    }
  return (
    <div className='add-user'>
      <div className='models'>
        <span className='close-button' onClick={() => setOpen(false)}>
          <img src='close-button.png' alt='Close button' />
          <h1>Add New {slug}</h1>
          <form onSubmit={formSubmit}>
            {columns
              .filter((item) => item.field !== 'id' && item.field !== 'img')
              .map((column) => (
                <div className='item' key={column.field}>
                  <label>{column.headerName}</label>
                  <input type='text' placeholder={`${column.headerName}`} />
                </div>
              ))}
            <button type='submit'>Submit</button>
          </form>
        </span>
      </div>
    </div>
  );
};

export default AddNewUser;
