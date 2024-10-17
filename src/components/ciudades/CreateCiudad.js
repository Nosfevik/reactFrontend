import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/ciudades'
const CreateCiudad = () => {

    const [name, setName] = useState('')
    const [provincia_id, setProvincia_id] = useState('')
    const [region_id, setRegion_id] = useState('')
    
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
       await axios.post(endpoint, {name: name, provincia_id: provincia_id, region_id: region_id})
       navigate('/')
    }
  return (
    <div>
       <h3>Crear Ciudad</h3>
       <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
                <label className='form-label'>Provincia</label>
                <input 
                    value={provincia_id}
                    onChange={ (e) => setProvincia_id(e.target.value)}
                    type='number'
                    className='form-control'
                />
                <label className='form-label'>Region</label>
                <input 
                    value={region_id}
                    onChange={ (e) => setRegion_id(e.target.value)}
                    type='number'
                    className='form-control'
                />
                
            </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
       </form>
    </div>

  )
}

export default CreateCiudad