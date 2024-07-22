import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../Constants'
import { Table } from 'react-bootstrap'
import axios from 'axios'


export const MostrarJoins = () => {
    const [array, setArray] = useState([])

    const getJoin = () =>{
        axios.get("http://localhost:8000/join").then((resp)=>{
            setArray(resp.data)
            console.log(array)
        })
    }
    

    useEffect(() => {
        getJoin()

    }, [])
    
  return (
    <>
        <Header/>
        <Table striped bordered hover variant="dark" className=''>
    <thead className=''>
      <tr className=''>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Dni</th>
        <th>Fecha del turno</th>
        <th>Diagnostico</th>
        <th>Observaciones</th>
      </tr>
    </thead>
    <tbody>
      {
      array.map((item)=>{
        return(
      <tr className='' key={item.id_Pacientes}>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.dni}</td>
        <td>{item.fecha.slice(0,10)}</td>
        <td>{item.diagnostico}</td>
        <td>{item.observaciones}</td>
        
      </tr>)
      })
      }
    </tbody>
  </Table>
        <Footer/>
    </>
  )
}

export default MostrarJoins