import Axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/RegistrarseLogin.css";

export const RegistrarLogin = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  let navigate = useNavigate();

  const handleRegistrar = () => {
    Axios.post("http://localhost:8000/login/registrar", {
      usuario: usuario,
      contraseña: contraseña,
    }).then(() => {
      alert("Usuario registrado.");
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="contenedor-centrador">
      <div className="register-container">
        <Form.Group className="mb-3 form-content">
          <h2 className="form-title">Registrar Usuario</h2>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            placeholder="Ingrese su usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setContraseña(e.target.value)}
          />
          <button id="registrarse-boton" onClick={handleRegistrar}>
            Registrar
          </button>
          <Link to="/login">
            <button id="volver-boton">volver</button>
          </Link>
        </Form.Group>
      </div>
    </div>
  );
};

export default RegistrarLogin;
