import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

  export const EditarTurno = () => {

    let {id} = useParams()
    let navigate = useNavigate()

    const [idPaciente, setIdPaciente] = useState(0)
    const [fechaTurno, setFechaTurno] = useState("")
    const [numOrden, setNumOrden] = useState("")


    const getTurno = () =>{
        const url = "http://localhost:8000/turno/"
        Axios.get(url+id).then((response) => {
          setIdPaciente(response.data[0].idPaciente)
          setFechaTurno(response.data[0].fechaTurno.slice(0,10))
          setNumOrden(response.data[0].numOrden)
        })
      }

      const handleEditar = () => {
        const url = "http://localhost:8000/turno/editar/"
        Axios.put(url+id,{
          idPaciente: idPaciente,
          fechaTurno: fechaTurno,
          numOrden: numOrden,
         
        }).then(()=>{
          alert("Turno registrado.")
          navigate('/turno',{ replace: true })
        })
      }

        useEffect(() => {
            getTurno()
        }, [])

  return (
    

    <div className="container p-2">
    <>
    <Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control value={idPaciente} placeholder="Apellido" onChange={(e) => setIdPaciente(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fecha De Turno</Form.Label>
          <Form.Control value={fechaTurno} type='text' maxLength={10} placeholder="fechaTurno" onChange={(e) => setFechaTurno(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero De Orden</Form.Label>
          <Form.Control value={numOrden} placeholder="numOrden" onChange={(e) => setNumOrden(e.target.value)}/>
        </Form.Group>
        
          
          <button onClick={handleEditar}>Agregar</button>
          
    </Form.Group>
    </>
    </div>
  );
};

export default EditarTurno;