import { Link } from "react-router-dom";
import TablaDentista from "./TablaDentista";
import { Button } from "react-bootstrap";

export const MainDentista = () => {
  return (
    <div>
      <Link to="/agregardentista">
        <Button variant="success">Agregar Dentista</Button>
      </Link>
      <h2>Dentista</h2>
      <TablaDentista />
    </div>
  );
};

export default MainDentista;
