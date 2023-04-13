import React from 'react'
import { useCalendarStore, useUIStore } from '../../hooks'

export const FabDelete = () => {

  const { isDateModalOpen } = useUIStore();
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleClickNew = () => { 
    startDeletingEvent();
  }

  return (
    <button 
      className='btn btn-danger fab-danger'
      onClick={handleClickNew}
      style={{
        display: hasEventSelected && !isDateModalOpen ? '' : 'none',
      }}
    >
        <i className='fas fa-trash-alt'></i>
    </button>
  )
}
