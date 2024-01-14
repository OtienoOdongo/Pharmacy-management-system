import React from 'react';
import './SingleComponent.scss';





const SingleComponent = () => {


  return (
    <div className='single'>
      <div className='box-1'>
        <div className='left-info'>
          <img src='https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
          <h1>Donald Kiprop</h1>
        </div>
      </div>
      <div className='box-2'>
        <div className='mini-box-1'>
          <h1>Personal Information</h1>
          <h3>Basic User Information</h3>
        </div>
        <div>
          <form>
            <div className='form-div-1'>
              <div>
                <label className='text-1'>
                  <h2>Full Name</h2>
                  <input
                    type='text'
                    name='fullName'
                    value=''
                    placeholder='Enter Full Name'
                    className='input-1'
                  />
                </label>
              </div>
            </div>
            <div className='form-div-1'>
              <div>
                <label className='text-1'>
                  <h2>Phone Number</h2>
                  <input
                    type='number'
                    name='phoneNumber'
                    value=''
                    placeholder='Enter Phone Number'
                    className='input-1'
                  />
                </label>
              </div>
            </div>
            <div className='form-div-1'>
              <div>
                <label className='text-1'>
                  <h2>Email Address</h2>
                  <input
                    type='text'
                    name='email'
                    value=''
                    placeholder='Enter Email Address'
                    className='input-1'
                  />
                </label>
              </div>
            </div>
            <div className='form-div-1'>
              <div>
                <label className='text-1'>
                  <h2>Designation</h2>
                  <input
                    type='text'
                    name='designation'
                    value=''
                    placeholder='Enter Designation'
                    className='input-1'
                  />
                </label>
              </div>
            </div>
            <div className='button-container'>
              <button type='submit' className='update-btn'>
                <h2>Update</h2>
              </button>
              <button type='submit' className='cancel-btn'>
                <h2>Cancel</h2>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export default SingleComponent;

