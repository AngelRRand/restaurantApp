import React from 'react'

const Platillo = ({platillo}) => {

    const {nombre, precio, categoria, imagen, description} = platillo

  return (
    <div className='w-full px-3 mb-4'>
        <div className='p-5 shadow-md bg-gray-800'>
            <div className='lg:flex'>
                <div className='lg:w-5/12 xl:w-3/12'>
                    <img src={imagen} alt='plato'/>
                </div>
                <div className='lg:w-5/12'>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Platillo