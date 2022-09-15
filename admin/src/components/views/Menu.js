import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <Link to='/nuevoplato' 
      className='ml-3 mb-5 p-2 text-white uppercase font-bold bg-orange-600 hover:bg-orange-700 inline-block'
      >Agregar uno platillo</Link>
    </>
  )
}

export default Menu