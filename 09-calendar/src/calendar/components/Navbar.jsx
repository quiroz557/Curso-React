import React from 'react'
import { useAuthStore } from '../../hooks';

export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <div className='navbar nabvar-dark bg-dark mb-4 px-4'>
        <span className='navbar-brand' style={{color:'white'}}>
            <i className='fas fa-calendar-alt'></i>
            &nbsp;
            {user.name}
        </span>

        <button 
          className='btn btn-danger'
          onClick={startLogout}
        >
            <i className='fas fa-sign-out-alt'></i>
            Salir
        </button>
    </div>
  )
}
