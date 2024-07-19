import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const AgregarTurno = () => {
  let navigate = useNavigate();

  const [idPaciente, setIdPaciente] = useState(0);
  const [fechaTurno, setfechaTurno] = useState("");
  const [numOrden, setnumOrden] = useState("");
  // const [pacientes, setPacientes] = useState([])

  const handleAgregar = () => {
    Axios.post("http://localhost:8000/turno/registrar", {
      idPaciente: idPaciente,
      fechaTurno: fechaTurno,
      numOrden: numOrden,
    }).then(() => {
      alert("Turno registrado.");
      navigate("/turno", { replace: true });
    });
  };

  return (
    <>
      <div className="contenedor-ad">
        <div id="container-ad" className="container p-2">
          <Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Id Paciente</Form.Label>
              <Form.Control
                placeholder="Id del paciente"
                onChange={(e) => setIdPaciente(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha De Turno</Form.Label>
              <Form.Control
                type="date"
                placeholder="fechaTurno"
                onChange={(e) => setfechaTurno(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero De Orden</Form.Label>
              <Form.Control
                placeholder="numOrden"
                onChange={(e) => setnumOrden(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Button variant="success" onClick={handleAgregar}>
                Agregar
              </Button>
            </Form.Group>
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default AgregarTurno;
