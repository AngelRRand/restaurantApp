import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const urlActual = location.pathname 

  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-900">
      <div className='p-6'>
        <p className='uppercase text-4xl tracking-wide text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400'>
          Nanaka Ramen Comer
        </p>
        <p className='mt-3 text-gray-600'>Administra tu restaurante, explora y expande tu negocio</p>
        <nav>
          <NavLink className={
            `${urlActual === '/' ? 'text-red-400' : 'text-gray-400'} p-1 block hover:text-red-200`}
            to="/">Ordenes</NavLink>
          <NavLink className={
            `${urlActual === '/menu' ? 'text-red-400' : 'text-gray-400'} p-1 block hover:text-red-200`}
            to="/menu">Menu</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar