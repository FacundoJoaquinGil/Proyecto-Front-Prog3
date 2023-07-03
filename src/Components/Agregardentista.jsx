import { useState } from "react"
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import Axios from "axios"




const Agregardentista = () => {
  const [id_dentista,setId_dentista] = useState()
  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")
  const [dni,setDni] = useState()
  const [matricula,setMatricula] = useState ()
  const [sexo, setSexo] = useState ("")
  const [turno, setTurno] = useState ("")
  const [iduser, setIduser] = useState ()
 

  const handleAgregar =()=>{
    Axios.post("http://localhost:8000/dentista/registrar",{
      id_dentista: id_dentista,
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      matricula: matricula,
      sexo: sexo,
      turno:turno,
      iduser: iduser

    }).then(()=>{
      alert("Dentista agregado")
    })
  }
 

  return (

    <>  
      
      <div className="container p-5">
          
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
              <Form.Label>N° Matricula</Form.Label>
              <Form.Control placeholder="Ingrese su n° de Matricula" onChange={(e) => setMatricula(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select onChange={(e) => setSexo(e.target.value)}>
                <option value="seleccion"> seleccione un campo </option>
                <option value="Hombre"> Hombre </option>
                <option value="Mujer">Mujer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Turno</Form.Label>
              <Form.Select onChange={(e) => setTurno(e.target.value)}>
                <option value="Mañana"> Mañana </option>
                <option value="Tarde"> Tarde </option>
                <option value="Noche"> Noche </option>
              </Form.Select>
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Link to="/maindentista">
            <Button variant="success" onClick={handleAgregar}>Agregar</Button>
              </Link>
            </Form.Group>
            
          
          
          
      </div>
    </>

  )
}

export default Agregardentista