import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'



const ShowProvincias = () => {
    const endpoint = 'http://localhost:8000/api'

    const [ provincias, setProvincias ] = useState( [] )
        useEffect ( ()=> {
          getAllProvincias()  
        }, [] ) 

    const getAllProvincias = async () => {
    const response = await axios.get(`${endpoint}/provincias`)
    setProvincias (response.data)
    }

    const deleteProvincia = async (id) => {
    await axios.delete(`${endpoint}/provincias/${id}`)
    getAllProvincias()
    }

  return (
    
    <><div className='d-grid gap-2'>
      <div class='card text-white bg-dark mb-3'>
      <h3>Provincias</h3>
         <Link to="/createProv" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
      
      <table className='table table-striped'>
              <thead className='bg-primary text-white '>
                <tr>
                    <th>Nombre</th>
                    <th>Región</th>
                    <th>Acción</th>
                </tr>
              </thead>
              <tbody>

              {provincias.map((provincia) => (
                  <tr key={provincia.id}>
                    <td>{provincia.Provincia}</td>
                    <td>{provincia.Region}</td>

                    <td>
                      <Link to={`/EditProvincia/${provincia.id}`} className='btn btn-warning'>Editar</Link>
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

export default ShowProvincias