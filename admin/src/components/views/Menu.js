import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <div>Menu</div>
      <Link to='/nuevoplato' className='ml-3 mb-5 p-2 text-white uppercase font-bold bg-blue-800 hover:bg-blue-900, inline-block'>Agregar uno platillo</Link>
    </>
  )
}

export default Menu