import icono6 from "../assets/icono6.png"
import {Link} from "react-router-dom"
import "../Styles/Header.css"


const Header = () => {
  return (

    
      
      // <div className="linea">
      //         <header className="header_prinpipal">
      //                 <div className="Logo_header">
      //                                 <img src={icono6} alt="" className='img_logo' />
      //                                 <h2 className="h2_header">Consultorio Dentista</h2>
      //                  </div>
  
      //                  <nav>
      //                                 <Link to="/" className='link'>Home</Link>
      //                                 <Link to="/dentista" className='link'>Dentista</Link>
      //                                 <Link to="/pacientes" className='link'>Paciente</Link>
      //                                 <Link to="/MainHistorialClinico" className='link'>Historial clinico</Link>
      //                                 <Link to="/MainAgendaYTurno" className='link'>Agenda y turnos</Link>
                                      
      //                 </nav>
                      
      //             </header>     
      // </div>
      <div>
            <nav className="navbar">
              <img src={icono6} alt="" />
              <input type="checkbox" className="toggler"/>
              <label htmlFor="toggler" className=""></label>
              <div className="menu">
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                    <li><Link></Link></li>
                </ul>

              </div>

            </nav>
      </div>
    
  )
}

export default Header