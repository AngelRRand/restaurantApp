import React from 'react'
import {useFormik} from 'formik'


const NuevoPlato = () => {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categorias: '',
      imagen: '',
      description: '',
    },
    onSubmit:value=>{

    }
  })


  return (
    <>
    <h1 className='text-3xl font-light mb-3'>Agregar nuevo plato</h1>
    <div className='flex justify-center mt-10'>
      <div className=' w-full max-w-3xl'>
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='nombre'>Nombre</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='nombre'
                type='text'
                placeholder='Pizza Napolitana'
                value={formik.values.nombre}
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
                value={formik.values.precio}
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

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='imagen'>Imagen</label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='imagen'
                type='file'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='descripcion'>Descripcion</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40' 
                id='descripcion'
                placeholder='Pizza Napolitana'
              />
            </div>

            <input
              type='submit'
              className='ml-3 mb-5 p-2 text-white uppercase font-bold bg-orange-600 hover:bg-orange-700 inline-block'
              value='Agregar platillo'
            />
          </form>
      </div>
    </div>
    </>
  )
}

export default NuevoPlato