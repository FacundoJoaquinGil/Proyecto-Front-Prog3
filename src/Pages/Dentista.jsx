import { Footer, Header, TablaDentista } from "../Constants";
import { Link } from "react-router-dom";
import "../Styles/Dentista.css";

export const Dentista = () => {
  return (
    <div className="contenedor-dentista">
      <Header />
      <Link to="/agregardentista">
        <button className="boton-agregar"> Agregar Dentista</button>
      </Link>
      <h2>Dentista</h2>
      <TablaDentista />
      <Footer />
    </div>
  );
};

export default Dentista;
