import React, { useState } from 'react';
import axios from 'axios';
import './AddNewData.scss';



const AddNewData = ({ setOpen, slug, columns, onSubmit, showSuccessMessage}) => {

  const [inputData, setInputData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const performApiRequest = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/api/${slug}s`, data);
      const responseData = response.data;
      console.log('respose data', responseData)
      showSuccessMessage(`Successfully added ${slug}: ${responseData.fullName}`);
      return responseData;
    } catch (error) {
      console.error(`Error adding new ${slug}:`, error);
      setErrorMessage(`Error adding new ${slug}: ${error.message}`);
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await performApiRequest(inputData);
      onSubmit(responseData);
      setOpen(false);
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  const handleFormChange = (field, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="add-data">
      <div className="models">
        <span className="close-button">
          <img src="close-button.png" alt="Close button" onClick={() => setOpen(false)} />
          <h1>Add New {slug}</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={formSubmit}>
            {columns
              .filter((item) => item.field !== 'id' && item.field !== 'image')
              .map((column) => (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                  <input
                    type="text"
                    placeholder={`${column.headerName}`}
                    value={inputData[column.field] || ''}
                    onChange={(e) => handleFormChange(column.field, e.target.value)}
                  />
                </div>
              ))}
            <button type="submit">Submit</button>
          </form>
        </span>
      </div>
    </div>
  );
};

export default AddNewData;
