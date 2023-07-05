import React from 'react'
import  Axios  from 'axios'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export const EditarDentista = () => {

    let {id} = useParams()
    let navigate = useNavigate()
  
    
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [dni,setDni] = useState()
    const [matricula,setMatricula] = useState ()
    const [sexo, setSexo] = useState ("")
    const [turno, setTurno] = useState ("")
    
  
    const getdentista = () =>{
      const url = "http://localhost:8000/dentista/"
      Axios.get(url+id).then((response) => {
        setNombre(response.data[0].nombre)
        setApellido(response.data[0].apellido)
        setDni(response.data[0].dni)
        setMatricula(response.data[0].matricula)
        setSexo(response.data[0].sexo)
        setTurno(response.data[0].turno)
      })
    }
  
    const handleEditar = () => {
      const url = "http://localhost:8000/dentista/editar/"
      Axios.put(url+id,{
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        matricula: matricula,
        sexo: sexo,
        turno:turno
      }).then(()=>{
        alert("dentista registrado.")
        navigate ('/dentistas', { replace: true })
        
      })
      
    }
  
      useEffect(() => {
          getdentista()
      }, [])
  
  
    return (
      <div className='container'>
            <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control value={nombre} placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control value={apellido} placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control value={dni} placeholder="DNI" onChange={(e) => setDni(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Matricula</Form.Label>
            <Form.Control value={matricula} placeholder="N° Matricula" onChange={(e) => setMatricula(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select onChange={(e) => setSexo(e.target.value)}>
              <option value={sexo} disabled> {sexo} </option>
              <option value="Mujer"> Mujer </option>
              <option value="Hombre"> Hombre </option>
            </Form.Select>
           
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Turno</Form.Label>
            <Form.Select onChange={(e) => setSexo(e.target.value)}>
              <option value="elegir una opcion" >Elija un turno</option>
              <option value="mañana"> Mañana </option>
              <option value="tarde"> Tarde </option>
              <option value="noche"> Noche </option>
            </Form.Select>
          </Form.Group>
          <Button variant="success" onClick={handleEditar}>Guardar</Button>
      </div>
  )
}

export default EditarDentista