import React from 'react'
import { useCalendarStore, useUIStore } from '../../hooks'
import Swal from 'sweetalert2';

export const FabDelete = () => {

  const { isDateModalOpen } = useUIStore();
  const { startDeletingEvent, hasEventSelected, activeEvent } = useCalendarStore();

  const handleClickNew = (e) => { 
    e.preventDefault();

    Swal.fire({
      title: '¿Seguro que quieres eliminar la tarea?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        startDeletingEvent();
      }
    })
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
