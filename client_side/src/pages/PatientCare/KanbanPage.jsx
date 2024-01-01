import React from 'react'
import './KanbanPage.scss'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../../data';

const KanbanPage = () => {
  return (
    <div className='kanban'>
      {/* <h1>Kanban</h1>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
      </KanbanComponent> */}
    </div>
  )
}

export default KanbanPage