import React,{ useState } from 'react'
import './UsersPage.scss'
import DataTable from '../../components/Tables/DataTable'
import { userRows } from '../../data';
import AddNewUser from '../../components/AddUser/AddNewUser';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 120,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 120,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 120,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 100,
  },

  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
  
];



const UsersPage = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
      <div className='userinfo'>
        <h1>Users</h1>
        <button className='new-user' onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows}/>
      {open && <AddNewUser slug='user' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default UsersPage