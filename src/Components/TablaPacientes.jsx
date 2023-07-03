import  Axios  from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

export const TablaPacientes = ({ btn }) => {
  const [pacientes, setPacientes] = useState([])

  useEffect(()=>{
    const MostrarPacientes = () =>{
      Axios.get("http://localhost:8000/pacientes").then((response) => {
        setPacientes(response.data)
      })
    }
    MostrarPacientes();
  },[])

  return (
    <div>
        <Table striped bordered hover variant="dark" className=''>
        <thead className=''>
          <tr className=''>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
            <th>Sexo</th>
            <th>Domiciolio</th>
            <th>Fecha de Nacimiento</th>
            <th>Edad</th>
            <th>Numero Historial Clinico</th>
            <th>Boton</th>
          </tr>
        </thead>
        <tbody>
          {
          pacientes.map((paciente)=>{
            return(
          <tr className='' key="paciente.id">
            <td>{paciente.id_Pacientes}</td>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellido}</td>
            <td>{paciente.dni}</td>
            <td>{paciente.sexo}</td>
            <td>{paciente.domicilio}</td>
            <td>{paciente.fechaNacimiento}</td>
            <td>{paciente.edad}</td>
            <td>{paciente.idHistorialClinico}</td>
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

export default TablaPacientes