import React,{useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext} from '../../firebase'


const Menu = () => {
  return (
    <>
      <h1 className='text-3xl font-light text-white'>Menu</h1>
      <Link 
      to='/nuevoplato' 
      className='ml-3 mb-5 p-2 text-white uppercase font-bold bg-pink-600 hover:bg-pink-700 inline-block'
      >Agregar uno platillo</Link>
    </>
  )
}

export default Menu