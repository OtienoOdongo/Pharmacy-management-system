import React from 'react';
import './ChartBoxGrid.scss';
import { NavLink } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const ChartBoxGrid = (props) => {
  return (
    <div className='chart-box'>
      <div className='gridinfo'>
        <div className='title'>
          <img src={props.icon} alt='title image' />
          <span>{props.title}</span>
        </div>
        <h1 className='header'>KES {props.number}</h1>
        <NavLink to='/salesreport' className='otherinfo' style={{ color: props.color }}>
          View Report
        </NavLink>
      </div>
      <div className='chartinfo'>
        <div className='charts'>
          <ResponsiveContainer width='70%' height='60%'>
            <LineChart data={props.chartdata}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='text'>
          <span className='percentage' style={{ color: props.percentage < 0 ? 'tomato' : 'green' }}>
            {props.percentage}%
          </span>
          <span className='duration'>This Month</span>
          <div className='image'>
            <img src={props.imageSrc} alt='image' /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBoxGrid;
