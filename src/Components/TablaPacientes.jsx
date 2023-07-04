import  Axios  from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export const TablaPacientes = () => {
  const [pacientes, setPacientes] = useState([])

  const handleEliminar = (id) =>{
    const url = "http://localhost:8000/pacientes/eliminar/"
    const eliminar =  Axios.delete(url+id)
    if(eliminar){
      Axios.get("http://localhost:8000/pacientes").then((response) => {
        setPacientes(response.data)
      })
    }
    MostrarPacientes();
  }

  const MostrarPacientes = () =>{
    Axios.get("http://localhost:8000/pacientes").then((response) => {
      setPacientes(response.data)
    })
  }

  useEffect(()=>{
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
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
          pacientes.map((paciente)=>{
            return(
          <tr className='' key={paciente.id_Pacientes}>
            <td>{paciente.id_Pacientes}</td>
            <td>{paciente.nombre}</td>
            <td>{paciente.apellido}</td>
            <td>{paciente.dni}</td>
            <td>{paciente.sexo}</td>
            <td>{paciente.domicilio}</td>
            <td>{paciente.fechaNacimiento.slice(0,10)}</td>
            <td>{paciente.edad}</td>
            <td>{paciente.idHistorialClinico}</td>
            <td>
                <Link to={`/pacientes/editar/${paciente.id_Pacientes}`}>
                    <button>Editar</button>
                </Link>
            </td>
            <td>
              <button onClick={(()=>{handleEliminar(paciente.id_Pacientes)})}>Eliminar</button>
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