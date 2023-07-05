
import axios from "axios";
import Axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export const TablaDentista = () => {
  const[dentista,setDentista] = useState([])

  const handleEliminar = (id) =>{
    const url = "http://localhost:8000/dentista/eliminar/"
  const eliminar =  Axios.delete(url+id)
    if(eliminar){
      Axios.get("http://localhost:8000/dentista").then((response) => {
        setDentista(response.data)
      })
    }
    MostrarDentistas();
  }

  const MostrarDentistas =() =>{
    Axios.get("http://localhost:8000/dentista").then((response) => {
      setDentista(response.data)
    })
  }

  useEffect(()=>{
    MostrarDentistas();
  },[])

  return (
    <div>
        <Table striped bordered hover variant="dark" className=''>
        <thead className=''>
          <tr className=''>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Dni</th>
            <th>Sexo</th>
            <th>Turno</th>
            <th>N° Matricula</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
          dentista.map((dentista)=>{
            return(
          <tr className='' key={dentista.id_Dentista}>
            <td>{dentista.id_Dentista}</td>
            <td>{dentista.nombre}</td>
            <td>{dentista.apellido}</td>
            <td>{dentista.dni}</td>
            <td>{dentista.sexo}</td>
            <td>{dentista.turno}</td>
            <td>{dentista.matricula}</td>
            
            <td>
            <Link to={`/editardentista/${dentista.id_Dentista}`}>
            <Button variant="warning">Editar</Button>
            </Link>
            </td>
            <td>
              <Button variant="danger" onClick={(()=>{handleEliminar(dentista.id_Dentista)})}>Eliminar</Button>{' '}
            </td>
          </tr>)
          })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default TablaDentista