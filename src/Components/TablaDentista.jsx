import  Axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

const TablaDentista = () => {
  const[dentistas,setDentistas] = useState([])

  useEffect (()=>{
    const MostrarDentistas = ()=>{

      setDentistas(Response.data)
    }
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
          </tr>
        </thead>
        <tbody>
          {
          dentistas.map((dentistas)=>{
            return(
          <tr className='' key="Dentista.id">
            <td>{dentistas.id_Dentista}</td>
            <td>{dentistas.nombre}</td>
            <td>{dentistas.apellido}</td>
            <td>{dentistas.dni}</td>
            <td>{dentistas.sexo}</td>
            <td>{dentistas.turno}</td>
            <td>{dentistas.matricula}</td>
            
            <td>
              { btn && <button> {btn} </button>}
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