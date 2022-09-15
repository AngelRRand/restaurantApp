import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const NuevoPlato = () => {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categorias: '',
      imagen: '',
      description: '',
    },
    validationSchema: Yup.object({
      nombre: Yub
      .string()
      .min(3, 'Los platos deben tener 3 caracteres')
      .required('El nombre del platillo es obligatorio'),
      precio: Yub
      .number()
      .min(1, 'Debes añadir un numero')
      .required('El precio del platillo es obligatorio'),
      categorias: Yub
      .required('La categoria es obligatorio para crear u nuevo plato'),
      description: Yub
      .string()
      .min(10, 'La description debe tener almenos 10 caracteres')
      .required('La categoria es obligatorio para crearlo'),
    }),
    onSubmit : data =>{
      console.log(data)
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='categoria'>Categoria</label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id='categoria'
                name='categoria'
                value={formik.values.categoria}
                onChange={formik.handleChange}
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
                value={formik.values.imagen}
                onChange={formik.handleChange}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='descripcion'>Descripcion</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40' 
                id='descripcion'
                placeholder='Pizza Napolitana'
                value={formik.values.description}
                onChange={formik.handleChange}
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