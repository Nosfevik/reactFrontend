import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/regions/'

const EditRegion = () => {
    
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const{id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name: name
        })
        navigate('/regions')
    
    }
        useEffect( () =>{

            const getProductById = async () => {
                const response = await axios.get(`${endpoint}${id}`)
                setName(response.data.name)
            }
            getProductById() 
        }, [] ) 

    return ( 
        <div>
        <h3>Editar Region</h3>
            <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                        <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div> 
    )
}


export default EditRegion