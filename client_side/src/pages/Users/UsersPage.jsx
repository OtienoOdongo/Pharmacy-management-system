import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './UsersPage.scss'
import DataTable from '../../components/Tables/DataTable'
import AddNewData from '../../components/AddComponent/AddNewData';


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



const UsersPage = () => {

  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(null);
 

  const getUsers = async () => {
    try {

      setIsLoading(true)
      const response = await axios.get('http://localhost:5001/api/users')
      const fetchedUsers = response.data.map((user) => ({ ...user, id: user._id }));
      console.log(fetchedUsers)
      setUsers(fetchedUsers);
      setIsLoading(false); // Set loading to false when data is received

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getUsers() // Fetching users only when the component mounts
  }, [])

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    getUsers(); // Refresh users after successful submission
    setOpen(false); // Close the form
    setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
  };


  return (
    <div className='users'>
      <div className='userinfo'>
        <h1>Users</h1>
        <button className='new-user' onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        'Loading...'
      ): <DataTable slug='users' columns={columns} rows={users} />
      }
      {successMessage && <p className="success-message">{successMessage}</p>}
      {open && (
        <AddNewData
          slug="User"
          columns={columns}
          setOpen={setOpen}
          showSuccessMessage={showSuccessMessage}
        />
      )}
    </div>
  )
}


export default UsersPage




