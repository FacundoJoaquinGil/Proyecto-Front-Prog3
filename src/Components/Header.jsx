import icono6 from "../assets/icono6.png";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <div className="linea">
      <header className="header_prinpipal">
        <div className="Logo_header">
          <a href="/Home">
          <img src="https://media.istockphoto.com/id/1290057260/es/vector/dientes-coraz%C3%B3n-dentro-icono-ilustraci%C3%B3n-de-stock-indonesia-logotipo-salud-dental-dentista.jpg?s=612x612&w=0&k=20&c=0FwVFhWHHrpnv90zIOCUNMirqYWMB14uLOrEbTXiXLY=" alt="" className="img_logo" />
          </a>
          
        </div>

        <nav>
          <Link to="/Home" className="link">
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
