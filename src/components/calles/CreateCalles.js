import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';

//const endpoint = 'http://localhost:8000/api/calles'
const endpoint = 'http://localhost:8000/api'


const CreateCalles = () => {
    
    const [descripcion, setDescripcion] = useState('')
    const [region_id, setRegion_id] = useState("");
    const [provincia_id, setProvincia_id] = useState('')
    const [ciudad_id, setCiudad_id] = useState('')
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const{id} = useParams()

    
    const [ regions, setRegions ] = useState( [] )
            useEffect ( ()=> {
            getAllRegions()  
    }, [] ) 

    const [ provincias, setProvincias ] = useState( [] )
        useEffect ( ()=> {
           //getAllProvincias()  
    }, [] ) 
   
    const [ ciudades, setCiudades ] = useState( [] )
        useEffect ( ()=> { 
    }, [] ) 

    const getAllRegions = async () => {
        const response = await axios.get(`${endpoint}/regions`)
        setRegions (response.data.data)
      }  

      /* const getAllProvincias = async () => {
        console.log("getAllProvincias:")
        //const response = await axios.get(`${endpoint2}/buscar/${region_id}`)
        const response = await axios.get(`${endpoint}/provincias`)
        setProvincias (response.data)
      }  */ 

       const clickHandler = async (e) => {
        setRegion_id(e.target.value)
        //console.log(e.target.value)
        const response = await axios.get(`${endpoint}/buscar/${e.target.value}`)
        setProvincias (response.data)
      }; 

      const clickHandler2 = async (e) => {
        setProvincia_id(e.target.value)
        console.log(e.target.value)
        const response = await axios.get(`${endpoint}/buscarciudad/${e.target.value}`)
        setCiudades (response.data)
      }; 

      
    const store = async (e) => {
        e.preventDefault()
        
         await axios.post(`${endpoint}/calles`, {
            descripcion: descripcion, 
            region_id: region_id,
            provincia_id: provincia_id,
            ciudad_id: ciudad_id
        })
       navigate('/calles')
    }

  return (
    <div>
       <h3>Crear Calle</h3>
       <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
                <label className='form-label'>Region</label>
                <Form.Select aria-label="Default select example"
                    onChange={clickHandler}
                    >
                        <option>--- Seleccione región ---</option>
                    {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                </Form.Select>
                <label className='form-label'>Provincia</label>
                <Form.Select aria-label="Default select example"
                onChange={clickHandler2}
                    >
                        <option>--- Seleccione provincia ---</option>
                    {provincias.map((provincia) => (
                        <option key={provincia.id} value={provincia.id}>{provincia.name}</option>
                    ))}
                </Form.Select>

                <label className='form-label'>Ciudad</label>
                <Form.Select aria-label="Default select example"
                  onChange={ (e) => setCiudad_id(e.target.value)}
                    >
                        <option>--- Seleccione ciudad ---</option>
                    {ciudades.map((ciudad) => (
                        <option key={ciudad.id} value={ciudad.id}>{ciudad.name}</option>
                    ))}
                </Form.Select>

            </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
       </form>
    </div>

  )
}

export default CreateCalles