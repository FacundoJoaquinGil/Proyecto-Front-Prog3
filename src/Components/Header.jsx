import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <div className="linea">
      <header className="header_prinpipal">
        <div className="Logo_header">
          <a href="/">
          <img src={logo} alt="" className="img_logo" />
          </a>
          
        </div>

        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/dentistas" className="link">
            Dentista
          </Link>
          <Link to="/pacientes" className="link">
            Paciente
          </Link>
          <Link to="/historialClinico" className="link">
            Historial clinico
          </Link>
          <Link to="/turno" className="link">
            Turnos
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
