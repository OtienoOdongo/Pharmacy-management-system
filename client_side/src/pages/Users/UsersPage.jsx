import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './UsersPage.scss'
import DataTable from '../../components/Tables/DataTable'
import AddNewUser from '../../components/AddUser/AddNewUser';


const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    width: 120,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    width: 150,
    editable: true,
  },
  
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 150,
  },
  {
    field: 'updatedAt',
    headerName: 'UpdatedAt',
    width: 150,
  },
  
];



const UsersPage = () => {

  const [open, setOpen] = useState(false)

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // const getUsers = async () => {
  //   try {

  //     setIsLoading(true)
  //     const response = await axios.get('/api/users')
  //     console.log('Response from server:', response.data);
  //     const users = response.data.map(user => ({ ...user, id: user._id }));
  //     setUsers(users);
  //     setIsLoading(false); // Set loading to false when data is received

  //   } catch (error) {
  //     console.log(error)
  //     setIsLoading(false); // Set loading to false in case of an error
  //   }
  // }
  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/users');
      if (Array.isArray(response.data)) {
        const users = response.data.map(user => ({ ...user, id: user._id }));
        setUsers(users);
      } else {
        console.error('Invalid response format. Expected an array.');
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
    }
  };
  


  useEffect(() => {
    getUsers() // Fetching users only when the component mounts
  }, [])


  return (
    <div className='users'>
      <div className='userinfo'>
        <h1>Users</h1>
        <button className='new-user' onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        'Loading...'
      ): <DataTable slug='users' columns={columns} rows={users}/>
      }
      {open && <AddNewUser slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default UsersPage