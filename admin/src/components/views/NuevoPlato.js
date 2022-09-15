import React from 'react'

const NuevoPlato = () => {
  return (
    <>
    <h1 className='text-3xl font-light mb-3'>Agregar nuevo plato</h1>
    <div className='flex justify-center mt-10'>
      <div className=' w-full max-w-3xl'>
          <form>
            <div className='mb-4'>
              <label>Nombre</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default NuevoPlato