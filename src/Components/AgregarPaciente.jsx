import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const AgregarPaciente = () => {

  let navigate = useNavigate()

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [dni, setDni] = useState(0)
  const [sexo, setSexo] = useState("")
  const [domicilio, setDomicilio] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [edad, setEdad] = useState("")
  const [idHistorialClinico, setIdHistorialClinico] = useState(0)


  const handleAgregar = () => {
    Axios.post("http://localhost:8000/pacientes/registrar",{
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

  return (

    <>
    <Header/>
      <div className="container p-2">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control placeholder="Apellido" onChange={(e) => setApellido(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control placeholder="DNI" onChange={(e) => setDni(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control placeholder="Domicilio" onChange={(e) => setDomicilio(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="Edad" onChange={(e) => setEdad(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" placeholder="Fecha de nacimiento" onChange={(e) => setFechaNacimiento(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select onChange={(e) => setSexo(e.target.value)}>
            <option selected disabled> Selecciona una opcion </option>
            <option value="Mujer"> Mujer </option>
            <option value="Hombre"> Hombre </option>
          </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>Historial Clinico</Form.Label>
            <Form.Control placeholder="Historial Clinico" onChange={(e) => setIdHistorialClinico(e.target.value)}/>
          </Form.Group>
          <button onClick={handleAgregar}>Agregar</button>
        </Form.Group>
      </div>
      <Footer/>
    </>
  );
};

export default AgregarPaciente;
