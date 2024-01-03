import React from 'react';
import './CalendarPage.scss';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  Inject,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { calendarData } from '../../data';

const CalendarPage = () => {
  return (
    <div className='calendar'>
      <h1>Calendar</h1>
      <ScheduleComponent
        height='1100px'
        eventSettings={{ dataSource: calendarData }}
        selectedDate={new Date(2024, 0, 9)}
      >
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default CalendarPage;
