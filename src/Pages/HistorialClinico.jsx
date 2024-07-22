import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header, TablaHistorial } from "../Constants";
import "../Styles/Historial.css";

export const HistorialClinico = () => {
  return (
    <>
      <div className="contenedor-historial">
        <Header />
        <div>
          <Link to="/agregarhistorial">
            <button className="boton-agregar">Agregar Historial</button>
          </Link>
          <h2>Historial Clinico</h2>
          <TablaHistorial />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default HistorialClinico;
