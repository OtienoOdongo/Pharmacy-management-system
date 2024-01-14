import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import './PharmaceuticalsPage.scss'
import AddNewData from '../../components/AddComponent/AddNewData';
import DataTable from '../../components/Tables/DataTable'


const getStatus = (stock) => {
  if (stock > 5) {
    return 'Available';
  } else if (stock > 0) {
    return 'Low';
  } else {
    return 'Out of Stock';
  }
};

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'image',
    headerName: 'Avatar',
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.image || 'noavatar.png'} alt='' />;
    },
  },
  {
    field: 'productName',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
  {
    field: 'genericName',
    headerName: 'Generic Name',
    width: 150,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    width: 100,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 100,
    editable: true,
  },
  {
    field: 'manufacturer',
    headerName: 'Manufacturer',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: ' Price',
    width: 100,
    editable: true,
  },
  {
    field: 'manufacturerPrice',
    headerName: 'Manufacturer Price',
    width: 150,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 100,
    editable: true,
  },
  {
    field: 'expireryDate',
    headerName: 'Expirer Date',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    renderCell: (params) => {
      const statusLabel = getStatus(params.row.stock);
      return <span>{statusLabel}</span>;
    },
  },
  
];




const PharmaceuticalsPage = () => {
  
  // State variables
  const [open, setOpen] = useState(false);
  const [pharmaceuticals, setPharmaceuticals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  


  // A function that fetches pharmaceutical data
  const getPharmaceuticals = async () => {
    try {
      setIsLoading(true);
      // Making an HTTP GET request to fetch pharmaceutical data
      const response = await axios.get('http://localhost:5001/api/pharmaceuticals');
      // Mapping the response data and adding an 'id' field
      const fetchedPharmaceutical = response.data.map((pharmaceutical) => ({
        ...pharmaceutical,
        id: pharmaceutical._id,
      }));
      // Updating state with the fetched data
      setPharmaceuticals(fetchedPharmaceutical);
      setIsLoading(false); // Set loading to false when data is received
    } catch (error) {
      console.log('Error when retrieving all Pharmaceuticals Products:', error);
      
    }
  };



  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getPharmaceuticals();
  }, []); // The empty dependency array ensures that the effect runs only once on mount



  const handleSuccess = (message) => {
    getPharmaceuticals();
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
    <div className='drugs'>
      <div className='drugsinfo'>
        <h1>Pharmaceutical</h1>
        <button className='new-drugs' onClick={() => setOpen(true)}>
          Add New Pharmaceutical
        </button>
      </div>
      {isLoading ? (
        'Loading...' 
      ) : (
      <DataTable slug='pharmaceuticals' columns={columns} rows={pharmaceuticals} />
      )}                  
      {open && (
        <AddNewData 
          slug='Pharmaceutical' 
          columns={columns} 
          setOpen={setOpen} 
          onSuccess={handleSuccess}
          onError={handleError}
        />
        )}
    </div>
  );
};



export default PharmaceuticalsPage;


