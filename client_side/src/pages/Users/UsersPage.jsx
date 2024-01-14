import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersPage.scss';
import DataTable from '../../components/Tables/DataTable';
import AddNewData from '../../components/AddComponent/AddNewData';
import withReactContent from 'sweetalert2-react-content'; 
import Swal from 'sweetalert2';




const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  {
    field: 'image',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 170,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    width: 200,
    editable: true,
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 170,
    editable: true,
  },
];


const MySwal = withReactContent(Swal);

const UsersPage = () => {

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  


  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5001/api/users');
      const fetchedUsers = response.data.map((user) => ({ ...user, id: user._id }));
      setUsers(fetchedUsers);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);



  const handleSuccess = (message) => {
    getUsers();
    setOpen(false);
    // Using the showSuccessAlert function from AddNewData component
    showSuccessAlert(message);
  };

  const handleError = (error) => {
    console.error('Error during form submission:', error);
    // Using the showErrorAlert function from AddNewData component
    showErrorAlert(message);
  };


  const handleDeleteRequest = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/users/${id}`);
      const responseData = response.data;
      showSuccessAlert(`${responseData.message}`);
    } catch (error) {
      console.error(`Error deleting a user:`, error);
      showErrorAlert(`${error.message}`);
    }
  };


  
  const showSuccessAlert = (message) => {
    MySwal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      html: `<p>Successfully Deleted a User</p><p>${message}</p>`,
    }).then(() => {
      setOpen(false);
    });
  };


  const showErrorAlert = (message) => {
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      html: `<p>Ooops!!!, an Error occurred while Deleting a user</p><p>${message}</p>`,
    }).then(() => {
      setOpen(false);
    });
  };


  


  return (
    <div className='users'>
      <div className='userinfo'>
        <h1>Users</h1>
        <button className='new-user' onClick={() => setOpen(true)}>
          Add New User
        </button>
      </div>
      {isLoading ? 'Loading...' : (
      <DataTable 
        slug='users' 
        columns={columns} 
        rows={users}
        onDelete={handleDeleteRequest}
      />)}
      {open && (
        <AddNewData
          slug="User"
          columns={columns}
          setOpen={setOpen}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      )}
    </div>
  );
};


export default UsersPage;
