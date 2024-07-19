import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const ShowRegions = () => {
const endpoint = 'http://localhost:8000/api'

     const [ regions, setRegions ] = useState( [] )
        useEffect ( ()=> {
         getAllRegions()  
    }, [] ) 

     const getAllRegions = async () => {
       const response = await axios.get(`${endpoint}/regions`)
       setRegions (response.data.data)
     }   
       

      /*  const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/regions");
          setRegions (response)
          console.log(response);
        } catch (error) {
          // Handle error
        }
      };

      fetchData(); */

     const deleteRegion = async (id) => {
      await axios.delete(`${endpoint}/regions/${id}`)
      getAllRegions()
    }

  return (
    <><div className='d-grid gap-2'>
      <div class='card text-white bg-dark mb-3'>
      <h3>Regiones</h3>
         <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
      
      <table className='table table-striped'>
              <thead className='bg-primary text-white '>
                <tr>
                    <th>Nombre</th>
                    <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                 { regions.map( (region) => (
                    <tr key={region.id}>
                        <td>{region.name}</td>
                        <td>
                            <Link to={`/edit/${region.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=>deleteRegion(region.id) } className='btn btn-danger m-1'>Eliminar</button>
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

export default ShowRegions