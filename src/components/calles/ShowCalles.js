import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const ShowCalles = () => {
    const endpoint = 'http://localhost:8000/api'

    const [ calles, setCalles ] = useState( [] )
        useEffect ( ()=> {
        getAllCalles()  
    }, [] ) 

    const getAllCalles = async () => {
    const response = await axios.get(`${endpoint}/calles`)
    setCalles (response.data)

    }

    const deleteCalle = async (id) => {
    await axios.delete(`${endpoint}/calles/${id}`)
    getAllCalles()
    }

  return (
    
    <><div className='d-grid gap-2'>
      <div class='card text-white bg-dark mb-3'>
      <h3>Calles</h3>
         <Link to="/createCalle" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nueva Calle</Link>
      
      <table className='table table-striped'>
              <thead className='bg-primary text-white '>
                <tr>
                    <th>Calle</th>
                    <th>Ciudad</th>
                    <th>Provincia</th>
                    <th>Región</th>
                    <th>Acción</th>
                </tr>
              </thead>
              <tbody>

              {calles.map((calle) => (
                  <tr key={calle.id}>
                    <td>{calle.descripcion}</td>
                    <td>{calle.Ciudad}</td>
                    <td>{calle.Provincia}</td>
                    <td>{calle.Region}</td>

                    <td>
                      <Link to={`/EditCalles/${calle.id}`} className='btn btn-warning'>Editar</Link>
                      <button onClick={ ()=>deleteCalle(calle.id) } className='btn btn-danger m-1'>Eliminar</button>
                    </td> 

                  </tr>

             ))}

              </tbody>
        </table>
        </div>
        </div>
    </>

  )
}

export default ShowCalles