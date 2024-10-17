import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'


const ShowCiudades = () => {
    const endpoint = 'http://localhost:8000/api'

    const [ ciudades, setCiudades ] = useState( [] )
        useEffect ( ()=> {
          getAllCiudades()  
        }, [] ) 

    const getAllCiudades = async () => {
    const response = await axios.get(`${endpoint}/ciudades`)
    setCiudades (response.data)
    }

    const deleteCiudades = async (id) => {
    await axios.delete(`${endpoint}/ciudades/${id}`)
    getAllCiudades()
    }

  return (
    
    <><div className='d-grid gap-2'>
      <div class='card text-white bg-dark mb-3'>
      <h3>Ciudades</h3>
         <Link to={'/createCiudad'} className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
      
      <table className='table table-striped'>
              <thead className='bg-primary text-white '>
                <tr>
                    <th>Nombre</th>
                    <th>Provincia</th>
                    <th>Región</th>
                </tr>
              </thead>
              <tbody>

              {ciudades.map((ciudad) => (
                  <tr key={ciudad.id}>
                    <td>{ciudad.Ciudad}</td>
                    <td>{ciudad.Provincia}</td>
                    <td>{ciudad.Region}</td>

                    {/*<td>
                       <Link to={`/EditCiudades/${provincia.id}`} className='btn btn-warning'>Editar</Link> 
                    </td> 
                    */}

                  </tr>

             ))}

              </tbody>
        </table>
        </div>
        </div>
    </>

  )
}

export default ShowCiudades