import "../Styles/MainHome.css"
import Button from 'react-bootstrap/Button'
import icono2 from "../assets/icon2.png"
import icono3 from "../assets/icon3.png"
import icono4 from "../assets/icon4.png"
import icono5 from "../assets/icon5.png"
import imagenFondo from "../assets/imagenFondo.jpg"
import {Link} from "react-router-dom"
import Footer from "./Footer"


export const MainHome = () => {
  return (
    <div className="fondo"  style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <header> 
                        <h2 className="h2_main_header" >Panel de control </h2>
                        <br />
                        <h3 className="h2_main_header">Consultorio Dentista</h3>
                </header>

            <div className="contenedor_button1" >
            <Button className="buton1"  variant="primary">
                    <Link to="/dentistas">
                    <img src={icono5} alt="" />
                    </Link>
                    <h4>Ir a Seccion Dentista</h4>
            </Button>
           

            <Button className="buton1"  variant="primary">
                    <Link to="/pacientes">
                    <img src={icono2} alt="" />
                    </Link>
                    <h4>Ir a Seccion Paciente</h4>
            </Button>
            </div>
            
            
            <div className="contenedor_button2">

            <Button className="buton1"  variant="primary">
                    <Link to="MainHistorialClinico">
                    <img src={icono3} alt="" className="icono3"/>
                    </Link>
                    <h4>Ir a Seccion Historial Clinico</h4>
            </Button>
            


            <Button className="buton1"  variant="primary">
                    <Link to="MainAgendaYTurno">
                    <img src={icono4} alt="" className="icono3"/>
                    </Link>
                    <h4>Ir a Seccion Agenda y turnos</h4>
            </Button>
            
            </div>


            <Footer/>


    </div>
  )
}

export default MainHome