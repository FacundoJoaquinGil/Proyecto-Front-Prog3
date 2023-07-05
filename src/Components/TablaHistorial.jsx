import axios from "axios";
import Axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export const TablaHistorial = () => {
    const[historial,setHistorial] = useState([])

    const handleEliminar = (id) =>{
      const url = "http://localhost:8000/historial/eliminar/"
    const eliminar =  Axios.delete(url+id)
      if(eliminar){
        Axios.get("http://localhost:8000/historial").then((response) => {
          setHistorial(response.data)
        })
      }
      MostrarHistorial();
    }
  
    const MostrarHistorial =() =>{
      axios.get("http://localhost:8000/historial").then((response) => {
        setHistorial(response.data)
      })
    }
  
    useEffect(()=>{
      MostrarHistorial();
    },[])
    
  return (
    <div>
    <Table striped bordered hover variant="dark" className=''>
    <thead className=''>
      <tr className=''>
        <th>#</th>
        <th>Fecha del turno</th>
        <th>Diagnostico</th>
        <th>Observaciones</th>
        <th>Editar</th>
        <th>Eliminar</th>

      </tr>
    </thead>
    <tbody>
      {
      historial.map((historial)=>{
        return(
      <tr className='' key={historial.id_HistorialClinico}>
        <td>{historial.id_HistorialClinico}</td>
        <td>{historial.fecha.slice(0,10)}</td>
        <td>{historial.diagnostico}</td>
        <td>{historial.observaciones}</td>
        <td>
        <Link to={`/editarhistorial/${historial.id_HistorialClinico}`}>
            <Button variant="warning">Editar</Button>
        </Link>
        </td>
        <td>
            <Button variant="danger" onClick={(()=>{handleEliminar(historial.id_HistorialClinico)})}>Eliminar</Button>{' '}
        </td>
      </tr>)
      })
      }
    </tbody>
  </Table>
</div>
  )
}

export default TablaHistorial