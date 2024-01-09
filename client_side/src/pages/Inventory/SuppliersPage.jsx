import React, { useState } from 'react'
import './SuppliersPage.scss'
import AddNewData from '../../components/AddComponent/AddNewData';
import DataTable from '../../components/Tables/DataTable'
import { supplierRows } from '../../data';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
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
    field: 'email',
    headerName: 'Email Address',
    width: 150,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Active',
    width: 150,
    type: 'boolean',
  },
  
];


const SuppliersPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='suppliers'>
      <div className='suppliersinfo'>
        <h1>Manufacturers</h1>
        <button className='new-supplier' onClick={() => setOpen(true)}>Add New Manufacturers</button>
      </div>
      <DataTable slug='suppliers' columns={columns} rows={supplierRows}/>
      {open && <AddNewData slug='supplier' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default SuppliersPage