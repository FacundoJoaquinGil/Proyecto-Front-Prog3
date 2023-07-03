import React, { useState } from 'react'

export const Panel = ({handlerAgregar, handlerEditar, handlerEliminar, handlerMostrar}) => {

    

  return (
    <div className='div_Panel'>
        <ul>
            <li><button className='btn' onClick={handlerAgregar}>Agregar</button></li>
            <li><button className='btn' onClick={handlerMostrar}>Mostrar</button></li>
            <li><button className='btn' onClick={handlerEliminar}>Eliminar</button></li>
            <li><button className='btn' onClick={handlerEditar}>Editar</button></li>
        </ul>
    </div>
  )
}

export default Panel