import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const endpoint = 'http://localhost:8000/api/'

const EditCalle = () => {
    
    const [descripcion, setName] = useState('')
    const [region_id, setRegion_id] = useState('')
    const [provincia_id, setProvincia_id] = useState('')
    const [ciudad_id, setCiudad_id] = useState('')

    const navigate = useNavigate()
    const{id} = useParams()

    const [ regions, setRegions ] = useState( [] )
            useEffect ( ()=> {
            getAllRegions()  
    }, [] ) 

    const [ provincias, setProvincias ] = useState( [] )
        useEffect ( ()=> {
           getAllProvincias()  
    }, [] ) 

    const [ ciudades, setCiudades ] = useState( [] )
        useEffect ( ()=> { 
    }, [] ) 

   
    const getAllRegions = async () => {
        const response = await axios.get(`${endpoint}regions/`)
        setRegions (response.data.data)
      }  

      const getAllProvincias = async () => {
        console.log("getAllProvincias:")
        //const response = await axios.get(`${endpoint2}/buscar/${region_id}`)
        const response = await axios.get(`${endpoint}provincias`)
        setProvincias (response.data)
      } 

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}calles/${id}`, {
            descripcion: descripcion,
            region_id: region_id,
            provincia_id: provincia_id,
            ciudad_id: ciudad_id
        })
        navigate('/calles')
    
    }
        useEffect( () =>{

            const getProductById = async () => {
                const response = await axios.get(`${endpoint}calles/${id}`) 
                setName(response.data.descripcion)
                setRegion_id(response.data.region_id)
                setProvincia_id(response.data.provincia_id)
                setCiudad_id(response.data.ciudad_id)
            }
            getProductById() 
        }, [] ) 

        const clickHandler = async (e) => {
            setRegion_id(e.target.value)
            const response = await axios.get(`${endpoint}buscar/${e.target.value}`)
            setProvincias (response.data)
          }; 

          const clickHandler2 = async (e) => {
            setProvincia_id(e.target.value)
            const response = await axios.get(`${endpoint}buscarciudad/${e.target.value}`)
            setCiudades (response.data)
          };


    return ( 
        <div>
        <h3>Editar Calle</h3>
            <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input 
                            value={descripcion}
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    

                    <label className='form-label'>Region</label>
                    <Form.Select value={region_id} aria-label="Default select example"
                        onChange={clickHandler}
                        >
                            <option>--- Seleccione región ---</option>
                        {regions.map((region) => (
                            <option key={region.id} value={region.id}>{region.name}</option>
                        ))}
                    </Form.Select>

                    <label className='form-label'>Provincia</label>
                    <Form.Select value={provincia_id} aria-label="Default select example"
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
                        <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div> 
    )
}


export default EditCalle