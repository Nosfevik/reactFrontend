import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/regions'
const CreateRegions = () => {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
       await axios.post(endpoint, {name: name})
       navigate('/Regions')
    }
  return (
    <div>
       <h3>Crear Region</h3>
       <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
       </form>
    </div>

  )
}

export default CreateRegions