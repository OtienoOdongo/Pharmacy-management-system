import React, { useState } from 'react';
import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink } from 'react-router-dom';

const DataTable = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (id) => {
    // Delete the API via API call
    // axios.delete(`/api/${props.slug}/${id}`)
    console.log(id + ' has been deleted');
    
  };

  const actionColumns = {
    field: 'action',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div className='actions'>
        <NavLink to={`/${props.slug}/${params.row.id}`}>
          <button className='view'>
            <img src='view.png' alt='' />
          </button>
        </NavLink>
        <button className='delete' onClick={() => handleDelete(params.row.id)}>
          <img src='delete.png' alt='' />
        </button>
      </div>
    ),
  };

  const filterRows = () => {
    if (!searchQuery) {
      return props.rows;
    }

    return props.rows.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div className='data-table'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='grid-container'>
        <DataGrid
          className='data-grid'
          rows={filterRows()}
          rowHeight={35}
          columns={[...props.columns, actionColumns]}
          pageSize={100}
          checkboxSelection
          disableRowSelectionOnClick
          
        />
      </div>
    </div>
  );
};

export default DataTable;








