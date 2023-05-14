import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar nabvar-dark bg-dark mb-4 px-4'>
        <span className='navbar-brand' style={{color:'white'}}>
            <i className='fas fa-calendar-alt'></i>
            &nbsp;
            Fernando
        </span>

        <button className='btn btn-danger'>
            <i className='fas fa-sign-out-alt'></i>
            Salir
        </button>
    </div>
  )
}
