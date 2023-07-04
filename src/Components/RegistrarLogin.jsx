import  Axios  from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'

export const RegistrarLogin = () => {
  const [usuario, setUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")

  let navigate = useNavigate()

  const handleRegistrar = () =>{
    Axios.post("http://localhost:8000/login/registrar",{
      usuario: usuario,
      contraseña: contraseña
    }).then(()=>{
      alert("Usuario registrado.")
      navigate('/',{ replace: true })
    })
  }

  return (
    <div>
        <Form.Group className="mb-3 container">
          <Form.Label>Usuario</Form.Label>
          <Form.Control placeholder="Ingrese su usuario" onChange={(e) => setUsuario(e.target.value)}/>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control placeholder="Ingrese su contraseña" onChange={(e) => setContraseña(e.target.value)}/>
          <button onClick={handleRegistrar}>Registrar</button>
        </Form.Group>
       
    </div>
  )
}

export default RegistrarLogin