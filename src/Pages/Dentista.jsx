import { Footer, Header, TablaDentista } from "../Constants"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



export const Dentista = () => {
  return (
    <div>
        <Header/>
        <Link to="/agregardentista">
        <Button variant="success">Agregar Dentista</Button>
      </Link>
      <h2>Dentista</h2>
      <TablaDentista />
        <Footer/>
    </div>
  )
}

export default Dentista