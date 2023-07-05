import  Axios  from 'axios'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export const EditarHistorial = () => {

    let {id} = useParams()
    let navigate = useNavigate()



    const [fecha,setFecha] = useState("")
    const [diagnostico,setDiagnostico] = useState("")
    const [observaciones,setObservaciones] = useState()

    const gethistorial = () =>{
        const url = "http://localhost:8000/historial/"
        Axios.get(url+id).then((response) => {
          setFecha(response.data[0].fecha.slice(0,10))
          setDiagnostico(response.data[0].diagnostico)
          setObservaciones(response.data[0].observaciones)
        })
      }

      const handleEditar = () => {
        const url = "http://localhost:8000/historial/editar/"
        Axios.put(url+id,{
            fecha: fecha,
            diagnostico: diagnostico,
            observaciones: observaciones,
        }).then(()=>{
          alert("Historial editado.")
          navigate ('/historialClinico', { replace: true })

        })


      }

        useEffect(() => {
            gethistorial()
        }, [])


  return (
    <div className="container p-5">
          <Form.Group className="mb-3">
          <Form.Label >Fecha</Form.Label>
          <Form.Control value={fecha} onChange={(e) => setFecha(e.target.value)} type='text'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>diagnositico</Form.Label>
          <Form.Control value={diagnostico}  onChange={(e) => setDiagnostico(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control value={observaciones}  onChange={(e) => setObservaciones(e.target.value)}/>
        </Form.Group>

        <Button variant="success" onClick={handleEditar}>Guardar</Button>
    </div>
  )
}

export default EditarHistorial