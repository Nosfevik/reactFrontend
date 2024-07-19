import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/provincias/'

const EditProvincia = () => {
    
    const [name, setName] = useState('')
    const [region_id, setRegion_id] = useState('')
    const navigate = useNavigate()
    const{id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name: name,
            region_id: region_id
        })
        navigate('/')
    
    }
        useEffect( () =>{

            const getProductById = async () => {
                const response = await axios.get(`${endpoint}${id}`)
                setName(response.data.name)
                setRegion_id(response.data.region_id)
            }
            getProductById() 
        }, [] ) 

    return ( 
        <div>
        <h3>Editar Provincia</h3>
            <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div> 
    )
}


export default EditProvincia