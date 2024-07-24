import { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Styles/Agregar.css";
import { Link } from "react-router-dom";

export const AgregarPaciente = () => {
  let navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState(0);
  const [sexo, setSexo] = useState(""); // Inicialmente vacío
  const [domicilio, setDomicilio] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [edad, setEdad] = useState("");
  const [idHistorialClinico, setIdHistorialClinico] = useState(0);

  const handleAgregar = () => {
    Axios.post("http://localhost:8000/pacientes/registrar", {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      sexo: sexo,
      domicilio: domicilio,
      fechaNacimiento: fechaNacimiento,
      edad: edad,
      idHistorialClinico: idHistorialClinico,
    }).then(() => {
      alert("Paciente registrado.");
      navigate("/pacientes", { replace: true });
    });
  };

  return (
    <>
      <div className="contenedor-ad">
        <div id="container-ad" className="container p-2">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              placeholder="DNI"
              onChange={(e) => setDni(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              placeholder="Domicilio"
              onChange={(e) => setDomicilio(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Edad"
              onChange={(e) => setEdad(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sexo</Form.Label>
            <Form.Select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="" disabled>
                Selecciona una opcion
              </option>
              <option value="Mujer">Mujer</option>
              <option value="Hombre">Hombre</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Historial Clinico</Form.Label>
            <Form.Control
              placeholder="Historial Clinico"
              onChange={(e) => setIdHistorialClinico(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Button variant="success fw-bold" onClick={handleAgregar}>
              Agregar
            </Button>
            <Link to="/pacientes" className="link-button">
              <Button variant="btn btn-primary m-2 fw-bold">Volver</Button>
            </Link>
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default AgregarPaciente;
