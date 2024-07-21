import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Pacientes, Login, EditarPaciente, AgregarPaciente, RegistrarLogin, Home, AgregarDentista, Dentista, EditarDentista, HistorialClinico, AgregarHistorial, EditarHistorial, Turno, AgregarTurno, EditarTurno, MostrarJoins} from "./Constants"


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/registrarLogin" element={<RegistrarLogin/>} />

            <Route  path="/pacientes/" element={<Pacientes/>}/>
            <Route  path="/pacientes/editar/:id" element={<EditarPaciente/>}/>
            <Route  path="/pacientes/agregar" element={<AgregarPaciente/>}/>

            <Route  path="/dentistas" element={<Dentista/>}/>
            <Route  path="/agregarDentista" element={<AgregarDentista/>}/>
            <Route  path="/editardentista/:id" element={<EditarDentista/>}/>
            
            <Route  path="/historialClinico" element={<HistorialClinico/>}/>
            <Route  path="/agregarHistorial" element={<AgregarHistorial/>}/>
            <Route  path="/editarHistorial/:id" element={<EditarHistorial/>}/>

            <Route  path="/Turno" element={<Turno/>}/>
            <Route  path="/agregarTurno" element={<AgregarTurno/>}/>
            <Route  path="/editarTurno/:id" element={<EditarTurno/>}/>

            <Route  path="/mostrarjoins" element={<MostrarJoins/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
