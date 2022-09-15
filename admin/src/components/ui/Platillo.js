import React from 'react'

const Platillo = ({ platillo }) => {

    const { nombre, precio, categoria, imagen, description } = platillo

    return (
        <div className='w-full px-3 mb-4'>
            <div className='p-5 shadow-md bg-gray-800'>
                <div className='lg:flex'>
                    <div className='lg:w-5/12 xl:w-3/12'>
                        <img src={imagen} alt='plato' />
                    </div>
                    <div className='lg:w-5/12 xl:w-8/12 pl-5'>
                        <p className='font-bold text-4xl text-pink-400 mb-4'>{nombre}</p>
                        <p className=' text-gray-300 mb-4'> Categoria: {''}
                            <span className='font-bold  text-gray-400'>{categoria.toUpperCase()}</span>
                        </p>
                        <p className=' text-gray-300 mb-4'> Precio: {''}
                            <span className=' text-gray-400'>{precio}</span>
                        </p>
                        <p className=' text-gray-300 mb-4'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platillo