import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ManufacturersPage.scss'
import AddNewData from '../../components/AddComponent/AddNewData';
import DataTable from '../../components/Tables/DataTable'



const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'image',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    width: 200,
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
    field: 'active',
    headerName: 'Active',
    width: 150,
    type: 'boolean',
  },
  
];





const ManufacturesPage = () => {
  const [open, setOpen] = useState(false)

  const [manufacturer, setManufacturer] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  const getManufacturers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5001/api/manufacturers');
      const fetchedManufacturers = response.data.map((manufacturer) => ({ 
        ...manufacturer,
        id: manufacturer._id }));
      setManufacturer(fetchedManufacturers);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  
  useEffect(() => {
    getManufacturers();
  }, []);


  const handleSuccess = (message) => {
    getManufacturers();
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
    <div className='suppliers'>
      <div className='suppliersinfo'>
        <h1>Manufacturers</h1>
        <button className='new-supplier' onClick={() => setOpen(true)}>Add New Manufacturers</button>
      </div>
      {isLoading ? 'Loading...' : <DataTable slug='manufacturers' columns={columns} rows={manufacturer} />}
      {open && (
        <AddNewData 
          slug='Manufacturer' 
          columns={columns} 
          setOpen={setOpen}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      )}
    </div>
  )
}

export default ManufacturesPage;