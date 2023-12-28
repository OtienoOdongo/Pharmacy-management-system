import React from 'react';
import './DashboardPage.scss';
import PopularProductsBox from '../../components/PopularDrugs/PopularProductsBox';
import ChartBoxGrid from '../../components/ChartBox/ChartBoxGrid';
import CustomBarChart from '../../components/BarChatBox/CustomBarChart'; 
import { 
  ChartBoxGridSales, 
  ChartBoxGridInventory, 
  ChartBoxGridRevenue, 
  ChartBoxGridConversion,
  BarChartBoxProfit
} from '../../data';
import RevenueChart from '../../components/RevenueChartBox/RevenueChart';

const DashboardPage = () => {
  return (
    <div className='dashboard'>
      <div className='box box-1'>
        <PopularProductsBox />
      </div>
      <div className='box box-2'>
        <ChartBoxGrid {...ChartBoxGridSales} />
      </div>
      <div className='box box-3'>
        <ChartBoxGrid {...ChartBoxGridInventory} />
      </div>
      <div className='box box-4'>
        <ChartBoxGrid {...ChartBoxGridRevenue} />
      </div>
      <div className='box box-5'>
        <ChartBoxGrid {...ChartBoxGridConversion} />
      </div>
      <div className='box box-6'>
       <RevenueChart />
      </div>
      <div className='box box-7'>
        <CustomBarChart {...BarChartBoxProfit} />   
      </div>
    </div>
  );
};

export default DashboardPage;
