import React, {useState} from 'react'
import './PatientsPage.scss'
import AddNewUser from '../../components/AddUser/AddNewUser';
import DataTable from '../../components/Tables/DataTable'
import { patientRows } from '../../data';


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
    field: 'patientName',
    headerName: 'Patient Name',
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
    field: 'purchaseDetails',
    headerName: 'Purchase Details',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Active',
    width: 150,
    type: 'boolean',
  },
  
]

const PatientsPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='patients'>
      <div className='patientsinfo'>
        <h1>Patients</h1>
        <button className='new-patient' onClick={() => setOpen(true)}>Add New Patient</button>
      </div>
      <DataTable slug='suppliers' columns={columns} rows={patientRows}/>
      {open && <AddNewUser slug='supplier' columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default PatientsPage