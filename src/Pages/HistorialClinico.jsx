import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Footer, Header, TablaHistorial } from '../Constants'



export const HistorialClinico = () => {
  return (
        <>
        <Header/>
        
          <div>
        
        <Link to="/agregarhistorial">
        <Button variant="success">Agregar Historial</Button>
        </Link>
        <h2>Historial Clinico</h2>
        <TablaHistorial/>
        
          </div> 

        <Footer/>
        </>
  )
}
export default HistorialClinico;