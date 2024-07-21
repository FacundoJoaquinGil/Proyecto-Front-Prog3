import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

export const AgregarHistorial = () => {
  let navigate = useNavigate();

  const [fecha, setFecha] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [observaciones, setObservaciones] = useState();

  const handleAgregar = () => {
    Axios.post("http://localhost:8000/historial/registrar", {
      fecha: fecha,
      diagnostico: diagnostico,
      observaciones: observaciones,
    }).then(() => {
      alert("Historial registrado.");
      navigate("/historialclinico", { replace: true });
    });
  };

  return (
    <div className="contenedor-ad">
      <div id="container-ad" className="container p-5">
        <Form.Group className="mb-">
          <Form.Label></Form.Label>

          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>diagnostico</Form.Label>
          <Form.Control
            placeholder="diagnostico"
            onChange={(e) => setDiagnostico(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>observaciones</Form.Label>
          <Form.Control
            placeholder="Observaciones"
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="success fw-bold" onClick={handleAgregar}>
            Agregar
          </Button>
          <Link to="/historialclinico" className="link-button">
          <Button variant="btn btn-primary m-2 fw-bold">
            volver
          </Button>
          </Link>
        </Form.Group>
      </div>
    </div>
  );
};

export default AgregarHistorial;
