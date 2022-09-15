import React from 'react'

const NuevoPlato = () => {
  return (
    <>
    <h1 className='text-3xl font-light mb-3'>Agregar nuevo plato</h1>
    <div className='flex justify-center mt-10'>
      <div className=' w-full max-w-3xl'>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='nombre'>Nombre</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='nombre'
                type='text'
                placeholder='Pizza Napolitana'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='precio'>Precio</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='precio'
                type='number'
                placeholder='$100'
                min='0'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='categoria'>Categoria</label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='categoria'
                name='categoria'
              >
                <option value=''>-- Seleccione --</option>
                <option value='Desayuno'> Desayuno </option>
                <option value='Comida'> Comida </option>
                <option value='Cena'> Cena </option>
                <option value='Bebida'> Bebida </option>
                <option value='Postre'> Postre </option>
                <option value='Ensalada'> Ensalada </option>
              </select>
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default NuevoPlato