import { Link } from "react-router-dom";
import { Footer, Header, TablaTurno } from "../Constants";
import "../Styles/Turnos.css";

export const Turno = () => {
  return (
    <div className="contenedor-turno">
      <Header />
      <Link to="/agregarturno">
        <button className="boton-agregar">Agregar Turno</button>
      </Link>
      <h2>Turno</h2>
      <TablaTurno />
      <Footer />
    </div>
  );
};

export default Turno;
