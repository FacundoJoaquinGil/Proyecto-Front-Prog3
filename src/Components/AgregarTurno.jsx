import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios"
import { useNavigate } from "react-router-dom";



export const AgregarTurno = () => {

  let navigate = useNavigate()

  const [idPaciente, setIdPaciente] = useState(0)
  const [fechaTurno, setfechaTurno] = useState("")
  const [numOrden, setnumOrden] = useState("")
  // const [pacientes, setPacientes] = useState([])

  const handleAgregar = () => {
    Axios.post("http://localhost:8000/turno/registrar",{
      idPaciente: idPaciente,
      fechaTurno: fechaTurno,
      numOrden: numOrden
    }).then(()=>{
      alert("Turno registrado.")
      navigate('/turno',{ replace: true })
    })
  }

  return (
    

    <div className="container p-2">
    <>
    <Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Id Paciente</Form.Label>
          <Form.Control placeholder="Id del paciente" onChange={(e) => setIdPaciente(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha De Turno</Form.Label>
          <Form.Control type="date" placeholder="fechaTurno" onChange={(e) => setfechaTurno(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero De Orden</Form.Label>
          <Form.Control placeholder="numOrden" onChange={(e) => setnumOrden(e.target.value)}/>
        </Form.Group>
        
          
          <button onClick={handleAgregar}>Agregar</button>
          
    </Form.Group>
    </>
    </div>
  );
};

export default AgregarTurno;
