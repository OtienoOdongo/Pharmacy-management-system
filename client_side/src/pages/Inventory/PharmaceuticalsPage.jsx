import React,  { useState } from 'react'
import './PharmaceuticalsPage.scss'
import AddNewData from '../../components/AddComponent/AddNewData';
import DataTable from '../../components/Tables/DataTable'
import { productRows } from '../../data';

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
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || 'noavatar.png'} alt='' />;
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
    field: 'expirerDate',
    headerName: 'Expirer Date',
    width: 80,
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
  const [open, setOpen] = useState(false)

  const modifiedProductsRows = productRows.map(row => ({
    ...row,
    status: getStatus(row.stock),
  }));

  return (
    <div className='drugs'>
      <div className='drugsinfo'>
        <h1>Pharmaceutical</h1>
        <button className='new-drugs' onClick={() => setOpen(true)}>Add New Pharmaceutical</button>
      </div>
      <DataTable slug='pharmaceuticals' columns={columns} rows={modifiedProductsRows}/>
      {open && <AddNewData slug='Pharmaceutical' columns={columns} setOpen={setOpen}/>}
    </div>
  )

}

export default PharmaceuticalsPage