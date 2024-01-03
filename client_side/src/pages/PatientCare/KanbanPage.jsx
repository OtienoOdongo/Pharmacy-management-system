import React from 'react'
import './KanbanPage.scss'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../../data';

const KanbanPage = () => {
  return (
    <div className='kanban'>
      <h1>Kanban</h1>
      {/* <KanbanComponent>
        <ColumnsDirective>
        <ColumnDirective headerText='To Do' keyField='Open'></ColumnDirective>
        <ColumnDirective headerText='In Progress' keyField='In Progress'></ColumnDirective>
        <ColumnDirective headerText='Review' keyField='Review'></ColumnDirective>
        <ColumnDirective headerText='Testing' keyField='Testing'></ColumnDirective>
        <ColumnDirective headerText='Close' keyField='Close'></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent> */}
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'ID'}}
        keyField='Status'
        width='100%' height='500%' swimlaneSettings={{ keyField: 'Assignee'}}
        enableTooltip={true}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default KanbanPage