
import Footer from "./Footer";
import Header from "./Header"
import TablaDentista from "./TablaDentista"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"



const MainDentista = () => {
  return (
    <div>
          <Header/>
          <h2>Dentista</h2>
          <Link to="/agregardentista">
          <Button variant="success">Agregar Dentista</Button>
          </Link>
          <TablaDentista/>
          <Footer/> 

    </div>
  )
}

export default MainDentista