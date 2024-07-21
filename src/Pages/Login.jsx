import axios from "axios";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export const Login = () => {
  let navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleIngresar = () => {
    axios
      .post("http://localhost:8000/login/login", {
        usuario: usuario,
        contraseña: contraseña,
      })
      .then(() => {
        navigate("/Home", { replace: true });
        alert("Bienvenido.");
      })
      .catch(() => {
        alert("Usuario o contraseña incorrecta");
      });
  };

  return (
    <div>
      <div className="body">
        <div className="login-box">
          <img
            src={logo}
            alt=""
            className="avatar"
          />
          <h1>Ingrese su usuario</h1>
          <form action="">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              placeholder="ingrese su usuario"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="ingrese su contraseña"
              onChange={(e) => setContraseña(e.target.value)}
            />
            <Link to="/">
              <input type="submit" value="Ingresar" onClick={handleIngresar} />
            </Link>
            <Link to="/registrarLogin">
              <button id="registrarse-boton">Registrarse</button>
            </Link>
            <Link to="/">
              <button id="volver-boton">volver</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
