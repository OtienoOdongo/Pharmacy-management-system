import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './PatientsPage.scss'
import AddNewData from '../../components/AddComponent/AddNewData';
import DataTable from '../../components/Tables/DataTable'
import { patientRows } from '../../data';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'image',
    headerName: 'Avatar',
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.image || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'patientName',
    headerName: 'Patient Name',
    width: 150,
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
    width: 150,
    editable: true,
  },
  {
    field: 'items',
    headerName: 'Items',
    width: 150,
    editable: true,
  },
  {
    field: 'quantities',
    headerName: 'Quantities',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Total Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'purchaseDate',
    headerName: 'Purchase Date',
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
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const getPatients = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5001/api/patients');
      const fetchedPatients = response.data.map((patient) => ({ ...patient, id: patient._id }));
      setPatients(fetchedPatients);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getPatients();
  }, []);


  const handleSuccess = (message) => {
    getPatients();
    setOpen(false);
    // Using the showSuccessAlert function from AddNewData component
    showSuccessAlert(message);
  };

  const handleError = (error) => {
    console.error('Error during form submission:', error);
    // Using the showErrorAlert function from AddNewData component
    showErrorAlert(message);
  };
   

  return (
    <div className='patients'>
      <div className='patientsinfo'>
        <h1>Patients</h1>
        <button className='new-patient' onClick={() => setOpen(true)}>Add New Patient</button>
      </div>
      {isLoading ? 'Loading...' : <DataTable slug='patients' columns={columns} rows={patients}/>}
      {open && (
        <AddNewData 
          slug='Patient' 
          columns={columns} 
          setOpen={setOpen}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      ) }
    </div>
  )
}

export default PatientsPage