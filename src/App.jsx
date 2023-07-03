import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Pacientes, Login} from "./Constants"
import MainHome from "./Components/MainHome"
import Dentista from "../src/Components/MainDentista"
import MainDentista from "../src/Components/MainDentista"
import Agregardentista from "./Components/Agregardentista"
import EditarDentista from "./Components/EditarDentista"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<MainHome/>} />
            <Route  path="/pacientes" element={<Pacientes/>}/>
            <Route  path="/dentistas" element={<Dentista/>}/>
            <Route  path="/agregardentista" element={<Agregardentista/>}/>
            <Route  path="/maindentista" element={<MainDentista/>}/>
            <Route  path="/editardentista/:id" element={<EditarDentista/>}/>
          

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
