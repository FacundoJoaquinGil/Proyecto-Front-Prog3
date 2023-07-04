import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Pacientes, Login, EditarPaciente, AgregarPaciente, RegistrarLogin, Home, AgregarDentista, Dentista, EditarDentista} from "./Constants"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/registrarLogin" element={<RegistrarLogin/>} />
            <Route  path="/pacientes/" element={<Pacientes/>}/>
            <Route  path="/pacientes/editar/:id" element={<EditarPaciente/>}/>
            <Route  path="/pacientes/agregar" element={<AgregarPaciente/>}/>
            <Route  path="/dentistas" element={<Dentista/>}/>
            <Route  path="/agregarDentista" element={<AgregarDentista/>}/>
            <Route  path="/editardentista/:id" element={<EditarDentista/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
