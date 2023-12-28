import React from 'react'
import './DashboardPage.scss'
import PopularDrugsBox from '../../components/PopularDrugs/PopularDrugsBox'

const DashboardPage = () => {
  return (
    <div className='dashboard'>
        <div className='box box-1'>
          <PopularDrugsBox />
        </div>
        <div className='box box-2'>BOX 2</div>
        <div className='box box-3'>BOX 3</div>
        <div className='box box-4'>BOX 4</div>
        <div className='box box-5'>BOX 5</div>
        <div className='box box-6'>BOX 6</div>
        <div className='box box-7'>BOX 7</div>
        

    </div>
  )
}

export default DashboardPage