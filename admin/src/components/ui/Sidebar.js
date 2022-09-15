import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-900">
      <div className='p-6'>
        <p className='text-white uppercase text-3xl tracking-wide text-center font-bold'>
          RestaurantApp
        </p>
        <p className='mt-3 text-gray-600'>Administra tu restaurante, explora y expande tu negocio</p>
        <nav>
          <NavLink activeClassName="" to='/'>Ordenes</NavLink>
          <NavLink activeClassName="" to='/menu'>Menu</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar