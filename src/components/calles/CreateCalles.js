import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';

const endpoint = 'http://localhost:8000/api/calles'
const endpoint2 = 'http://localhost:8000/api'

const CreateCalles = () => {
    
    const [descripcion, setDescripcion] = useState('')
    const [region_id, setRegion_id] = useState('')
    const [provincia_id, setProvincia_id] = useState('')
    const [ciudad_id, setCiudad_id] = useState('')
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const{id} = useParams()

        function clickHandler(e){
            e.preventDefault();
            
            setRegion_id(e.target.value)
            //console.log(e.target.value)
            getAllProvincias()
          }

    const [ regions, setRegions ] = useState( [] )
        useEffect ( ()=> {
            getAllRegions()  
            
    }, [] ) 


    const [ provincias, setProvincias ] = useState( [] )
        useEffect ( ()=> {
            //getAllProvincias()  
    }, [] ) 
    

    const getAllRegions = async () => {
        const response = await axios.get(`${endpoint2}/regions`)
        setRegions (response.data.data)
      }  

       const getAllProvincias = async () => {
        //console.log("getAllProvincias:" . region_id)
        const response = await axios.get(`${endpoint2}/buscar/1`)
        //const response = await axios.get(`${endpoint2}/buscar/${region_id}`)
        setProvincias (response.data)
      } 
      

      /* const handleChange = (event) => {
        setProvincias(event.target.value);
      }; */

    const store = async (e) => {
        e.preventDefault()
        alert('Guardar calle no funcional')
       /* await axios.post(endpoint, {
            descripcion: descripcion, 
            region_id: region_id,
            provincia_id: provincia_id,
            ciudad_id: ciudad_id
        }) */
       navigate('/calles')
    }

    

  return (
    <div>
       <h3>Crear Calle</h3>
       {/* <form onSubmit={store}> */}
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
                    //onChange={ (e) => {setRegion_id(e.target.value)}}
                    //onChange={ (e) => getAllProvincias(e.target.value)}
                    onChange={clickHandler}
                    >
                        <option>--- Seleccione región ---</option>
                    {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                    
                </Form.Select>
               
                <label className='form-label'>Provincia</label>
                <Form.Select aria-label="Default select example"
                    //onChange={ (e) => setProvincia_id(e.target.value)}
                    >
                        <option>--- Seleccione provincia ---</option>
                    {provincias.map((provincia) => (
                        <option key={provincia.id} value={provincia.id}>{provincia.name}</option>
                    ))}
                </Form.Select>

                <label className='form-label'>Provincia</label>
                <Form.Select aria-label="Default select example"
                    onChange={ (e) => setCiudad_id(e.target.value)}
                    >
                        <option>--- Seleccione ciudad ---</option>
                    
                </Form.Select>

            </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
       </form>
    </div>

  )
}

export default CreateCalles