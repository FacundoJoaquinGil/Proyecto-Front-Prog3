import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export const TablaTurno = () => {
  const[turno,setTurno] = useState([])

  const handleEliminar = (id) =>{
    const url = "http://localhost:8000/turno/eliminar/"
  const eliminar =  axios.delete(url+id)
    if(eliminar){
      axios.get("http://localhost:8000/turno").then((response) => {
        setTurno(response.data)
      })
    }
    MostrarTurno();
  }

  const MostrarTurno =() =>{
    axios.get("http://localhost:8000/turno").then((response) => {
      setTurno(response.data)
    })
  }

  useEffect(()=>{
    MostrarTurno();
  },[])

  return (
    <div>
        <Table striped bordered hover variant="dark" className=''>
        <thead className=''>
          <tr className=''>
            <th>Id Paciente</th>
            <th>Fecha Del Turno</th>
            <th>Numero De Turno</th>
            <th>Editar</th>
            <th>Eliminar</th>
   
          </tr>
        </thead>
        <tbody>
          {
          turno.map((turno)=>{
            return(
          <tr className='' key={turno.id_Turnos}>
            <td>{turno.idPaciente}</td>
            <td>{turno.fechaTurno.slice(0,10)}</td>
            <td>{turno.numOrden}</td>
            <td>
             <Link to={`/editarturno/${turno.id_Turnos}`}>
            <Button variant="warning">Editar</Button>
            </Link> 
            </td> 
            <td>
              <Button variant="danger" onClick={(()=>{handleEliminar(turno.id_Turnos)})}>Eliminar</Button>{' '}
            </td> 
          </tr>)
          })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default TablaTurno