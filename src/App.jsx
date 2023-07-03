import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Pacientes, Login, EditarPaciente, AgregarPaciente} from "./Constants"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route  path="/pacientes/" element={<Pacientes/>}/>
            <Route  path="/pacientes/editar/:id" element={<EditarPaciente/>}/>
            <Route  path="/pacientes/agregar" element={<AgregarPaciente/>}/>
            

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
