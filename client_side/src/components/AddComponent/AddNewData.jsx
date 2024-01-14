// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content'; 
// import './AddNewData.scss';




// const MySwal = withReactContent(Swal); // Creating an instance of SweetAlert2 with React support


// const AddNewData = ({ setOpen, slug, columns, onSubmit }) => {
//   const [inputData, setInputData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);



//   const performApiRequest = async (data) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.post(`http://localhost:5001/api/${slug}s`, data);
//       const responseData = response.data;
//       showSuccessAlert(`${responseData.message}`);
//       return responseData;
//     } catch (error) {
//       console.error(`Error adding new ${slug}:`, error);
//       showErrorAlert(`${error.message}`);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };



//   const formSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const responseData = await performApiRequest(inputData);
//       onSubmit(responseData);
//       setOpen(false);
//     } catch (error) {
//       console.error('Error during form submission:', error);
//     }
//   };


//   const handleFormChange = (field, value) => {
//     setInputData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
    
//   };


 

//   const showSuccessAlert = (message) => {
//     MySwal.fire({
//       icon: 'success',
//       title: 'Success',
//       text: message,
//       html: `<p>Succefully added a New ${slug}:</p><p>${message}</p>`,
//     }).then(() => {
//       setOpen(false);
//     });
//   };


//   const showErrorAlert = (message) => {
//     MySwal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: message,
//       html: `<p>Sorry, all the fields must be entered while adding a New ${slug}:</p><p>${message}</p>`,
//     }).then(() => {
//       setOpen(false);
//     });
//   };



//   return (
//     <div className="add-data">
//       <div className="models">
//         <span className="close-button">
//           <img src="close-button.png" alt="Close button" onClick={() => setOpen(false)} />
//           <h1>Add New {slug}</h1>
//           <form onSubmit={formSubmit}>
//             {columns
//               .filter((item) => item.field !== 'id' && item.field !== 'image' && item.field !== 'purchaseDate') 
//               .map((column) => (
//                 <div className="item" key={column.field}>
//                   <label>{column.headerName}</label>
//                   <input
//                     type="text"
//                     placeholder={`${column.headerName}`}
//                     value={inputData[column.field] || ''}
//                     onChange={(e) => handleFormChange(column.field, e.target.value)}
//                   />
//                 </div>
//               ))}
//             <button type="submit" disabled={isLoading}>
//               {isLoading ? 'Submitting...' : 'Submit'}
//             </button>
//           </form>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default AddNewData;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './AddNewData.scss';

const MySwal = withReactContent(Swal);

const AddNewData = ({ setOpen, slug, columns, onSubmit, existingData }) => {
  const [inputData, setInputData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If existingData is provided, use it to pre-fill the form fields
    if (existingData) {
      setInputData(existingData);
    }
  }, [existingData]); // Add any dependencies if needed





  const performApiRequest = async (data) => {
    try {
      setIsLoading(true);
      const requestMethod = inputData.id ? 'patch' : 'post';
      const url = inputData.id
        ? `http://localhost:5001/api/${slug}s/${inputData.id}`
        : `http://localhost:5001/api/${slug}s`;
  
      const response = await axios[requestMethod](url, data);
  
      const responseData = response.data;
      showSuccessAlert(`${responseData.message}`, inputData.id ? true : false);
      return responseData;
    } catch (error) {
      console.error(`Error adding/updating ${slug}:`, error);
      console.error('Server Response:', error.response); 
      showErrorAlert(`${error.message}`, inputData.id ? true : false);
      throw error;
    } finally {
      setIsLoading(false);
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

  const showSuccessAlert = (message, isUpdate) => {
    const actionText = isUpdate ? 'Updated' : 'Added';
    MySwal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      html: `<p>Successfully ${actionText} a ${slug}:</p><p>${message}</p>`,
    }).then(() => {
      setOpen(false);
    });
  };
  
  const showErrorAlert = (message, isUpdate) => {
    const actionText = isUpdate ? 'Updating' : 'Adding';
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      html: `<p>Oooops!!!, an Error occurred while ${actionText} a ${slug}:</p><p>${message}</p>`,
    }).then(() => {
      setOpen(false);
    });
  };
  
  return (
    <div className="add-data">
      <div className="models">
        <span className="close-button">
          <img src="close-button.png" alt="Close button" onClick={() => setOpen(false)} />
          <h1>{inputData.id ? 'Update' : 'Add New'} {slug}</h1>
          <form onSubmit={formSubmit}>
            {columns
              .filter((item) => item.field !== 'id' && item.field !== 'image' && item.field !== 'purchaseDate')
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
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </span>
      </div>
    </div>
  );
};

export default AddNewData;




