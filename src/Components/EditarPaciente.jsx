import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

export const EditarPaciente = () => {

    let  {id} = useParams()
    let navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState(0)
    const [sexo, setSexo] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [edad, setEdad] = useState("")
    const [idHistorialClinico, setIdHistorialClinico] = useState(0)
    // const [pacientes, setPacientes] = useState([])

    const getPaciente = () =>{
        const url = "http://localhost:8000/pacientes/"
        Axios.get(url+id).then((response) => {
          setNombre(response.data[0].nombre)
          setApellido(response.data[0].apellido)
          setDni(response.data[0].dni)
          setSexo(response.data[0].sexo)
          setDomicilio(response.data[0].domicilio)
          setFechaNacimiento(response.data[0].fechaNacimiento.slice(0,10))
          setEdad(response.data[0].edad)
          setIdHistorialClinico(response.data[0].idHistorialClinico)
        })
      }


    const handleEditar = () => {
        const url = "http://localhost:8000/pacientes/editar/"
        Axios.put(url+id,{
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          sexo: sexo,
          domicilio: domicilio,
          fechaNacimiento: fechaNacimiento,
          edad: edad,
          idHistorialClinico: idHistorialClinico
        }).then(()=>{
          alert("Paciente registrado.")
          navigate('/pacientes',{ replace: true })
        })
      }

        useEffect(() => {
            getPaciente()
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
          <Form.Label>Domicilio</Form.Label>
          <Form.Control value={domicilio} placeholder="Domicilio" onChange={(e) => setDomicilio(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control value={edad} type="number" placeholder="Edad" onChange={(e) => setEdad(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control value={fechaNacimiento} maxLength={10} type="text" placeholder="Fecha de nacimiento" onChange={(e) => setFechaNacimiento(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select onChange={(e) => setSexo(e.target.value)}>
            <option value={sexo} disabled> {sexo} </option>
            <option value="Mujer"> Mujer </option>
            <option value="Hombre"> Hombre </option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Historial Clinico</Form.Label>
            <Form.Control value={idHistorialClinico} placeholder="Historial Clinico" onChange={(e) => setIdHistorialClinico(e.target.value)}/>
          </Form.Group>
          <button onClick={handleEditar}>Guardar</button>
        </Form.Group>
    </div>
  )
}

export default EditarPaciente