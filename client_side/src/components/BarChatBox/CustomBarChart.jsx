import React from 'react';
import './CustomBarChart.scss';
import { 
  ResponsiveContainer, 
  BarChart,
  Bar,
  Tooltip 
  } from 'recharts';

const CustomBarChart = (props) => {
  const { title, chartdata, dataKey, color } = props;

  return (
    <div className='barchart'>
      <h1>{title}</h1>
      <div className='chart'>
        <ResponsiveContainer width="99%" height="87%">
          <BarChart  data={chartdata}>
            <Tooltip
              contentStyle={{ background: 'darkblue', borderRadius: "5px"}}
              labelStyle={{display: 'none'}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChart;
