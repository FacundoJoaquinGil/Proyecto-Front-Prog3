import icono6 from "../assets/icono6.png"
import {Link} from "react-router-dom"
import "../Styles/Header.css"


export const Header = () => {


  return (
    
      
       <div className="linea">
               <header className="header_prinpipal">
                       <div className="Logo_header">
                                       <img src={icono6} alt="" className='img_logo' />
                                      <h2 className="h2_header">Consultorio Dentista</h2>
                       </div>
  
                       <nav>
                                     <Link to="/Home" className='link'>Home</Link>
                                       <Link to="/dentistas" className='link'>Dentista</Link>
                                       <Link to="/pacientes" className='link'>Paciente</Link>
                                       <Link to="/historialClinico" className='link'>Historial clinico</Link>
                                       <Link to="/turno" className='link'>Turnos</Link>
                                      
                      </nav>
                      
                   </header>     
       </div>
    
  )
}

export default Header