
import { Link } from 'react-router-dom'
import {  TablaPacientes } from '../Constants'


export const MainPacientes = () => {
   
   
   

  
  

  return (
    <div>
        <Link to="/pacientes/agregar">
            <button>Agregar Paciente</button>
        </Link>
        <h2>Pacientes</h2>
            <TablaPacientes/>
    </div>
  )
}

export default MainPacientes