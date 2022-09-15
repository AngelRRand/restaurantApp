import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {FirebaseContext} from '../../firebase';
import FileUploader from 'react-firebase-file-uploader'



const NuevoPlato = () => {


  const navigate = useNavigate();

  //Firebase context
  const { firebase } = useContext(FirebaseContext)
  console.log(firebase)

  //Validacion
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      description: '',
    },
    validationSchema: Yup.object({
      nombre: Yup
        .string()
        .min(3, 'Los platos deben tener 3 caracteres')
        .required('El nombre del platillo es obligatorio'),
      precio: Yup
        .number()
        .min(1, 'Debes añadir un numero')
        .required('El precio del platillo es obligatorio'),
      categoria: Yup
        .string()
        .required('La categoria es obligatorio para crear u nuevo plato'),
      description: Yup
        .string()
        .min(10, 'La descripcion debe tener almenos 10 caracteres')
        .required('La descripcion es obligatorio para crearlo'),
    }),
    onSubmit: data => {
      try {
        NuevoPlato.existencia = true
        firebase.db.collection('productos').add(data)

        navigate('/menu')
      } catch (error) {
        console.log(error)
      }
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
                onBlur={formik.handleBlur}
              />
            </div>
            {
              formik.touched.nombre && formik.errors.nombre ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-7 mb-3' role='alert'>
                  <p className='font-bold'>Hubo un error:</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null
            }
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
                onBlur={formik.handleBlur}
              />
            </div>

            {
              formik.touched.precio && formik.errors.precio ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-7 mb-3' role='alert'>
                  <p className='font-bold'>Hubo un error:</p>
                  <p>{formik.errors.precio}</p>
                </div>
              ) : null
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='categoria'>Categoria</label>
              <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='categoria'
                name='categoria'
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

            {
              formik.touched.categorias && formik.errors.categorias ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-7 mb-3' role='alert'>
                  <p className='font-bold'>Hubo un error:</p>
                  <p>{formik.errors.categorias}</p>
                </div>
              ) : null
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='description'>Descripcion</label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
                id='description'
                placeholder='Pizza Napolitana'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {
              formik.touched.description && formik.errors.description ? (
                <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-7 mb-3' role='alert'>
                  <p className='font-bold'>Hubo un error:</p>
                  <p>{formik.errors.description}</p>
                </div>
              ) : null
            }

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-blod mb-2' htmlFor='imagen'>Imagen</label>
              <FileUploader
                accept='image/*'
                id='imagen'
                name='imagen'
                randomizeFilename
                storageRef={firebase.storage.ref('productos')}
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadStart}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
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