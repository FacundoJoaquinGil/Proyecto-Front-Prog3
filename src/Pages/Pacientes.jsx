import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { TablaPacientes } from "../Constants";
import "../Styles/Pacientes.css";

export const Pacientes = () => {
  return (
    <div className="contenedor-pacientes">
      <Header />
      <Link to="/pacientes/agregar">
        <button className="boton-agregar">Agregar Paciente</button>
      </Link>
      <h2>Pacientes</h2>
      <TablaPacientes />
      <Footer />
    </div>
  );
};

export default Pacientes;
