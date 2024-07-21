import "../Styles/MainHome.css";
import Button from "react-bootstrap/Button";
import icono2 from "../assets/icon2.png";
import icono3 from "../assets/icon3.png";
import icono4 from "../assets/icon4.png";
import icono5 from "../assets/icon5.png";
import { Link } from "react-router-dom";
import { Footer } from "../Constants";

export const Home = () => {
  return (
    <div className="fondo">
      <div className="contenedor-home">
        <Link to="/login" className="contenedor-login">
          <button className="boton-login">Iniciar Sesión</button>
        </Link>
        <header>
          <h2 className="h2_main_header">Panel de control</h2>
          <br />
          <h3 className="h2_main_header">Consultorio Dentista</h3>
          <div className="contenedor-boton-login"></div>
        </header>

        <div className="contenedor_button1">
          <Link to="/dentistas" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono5} alt="" />
              <h4>Ir a Seccion Dentista</h4>
            </Button>
          </Link>

          <Link to="/pacientes" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono2} alt="" />
              <h4>Ir a Seccion Paciente</h4>
            </Button>
          </Link>
        </div>

        <div className="contenedor_button2">
          <Link to="/historialclinico" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono3} alt="" className="icono3" />
              <h4>Ir a Seccion Historial Clinico</h4>
            </Button>
          </Link>

          <Link to="/turno" className="link-button">
            <Button className="buton1" variant="primary">
              <img src={icono4} alt="" className="icono3" />
              <h4>Ir a Seccion Turnos</h4>
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
