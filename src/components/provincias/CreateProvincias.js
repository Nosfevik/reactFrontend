import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/provincias'
const CreateProvincias = () => {

    const [name, setName] = useState('')
    const [region_id, setRegion_id] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
       await axios.post(endpoint, {name: name, region_id: region_id})
       navigate('/')
    }
  return (
    <div>
       <h3>Crear Provincia</h3>
       <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    type='text'
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

export default CreateProvincias