import React, { useState} from 'react'
import './InvoicesPage.scss'
import AddNewUser from '../../components/AddUser/AddNewUser'
import DataTable from '../../components/Tables/DataTable'
import { invoiceRows } from '../../data';


const columns = [
  { field: 'id', headerName: 'Order ID', width: 100 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'amount',
    headerName: 'Amount',
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
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true
  },
  
];

const InvoicesPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='invoices'>
      <div className='invoicesinfo'>
        <h1>Invoices</h1>
        <button className='new-invoice' onClick={() => setOpen(true)}>Add New Manufacturers</button>
      </div>
      <DataTable slug='invoices' columns={columns} rows={invoiceRows}/>
      {open && <AddNewUser slug='invoice' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default InvoicesPage