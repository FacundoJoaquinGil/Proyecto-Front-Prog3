

import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import { Footer, Header, TablaTurno } from "../Constants";



export const Turno = () => {
  return (
    <div>
          <Header/>
          <Link to="/agregarturno">
          <Button variant="success">Agregar Turno</Button>
          </Link>
          <h2>Turno</h2>
          <TablaTurno/>
          <Footer/> 

    </div>
  )
}

export default Turno