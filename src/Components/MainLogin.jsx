import axios from "axios"
import login from "../assets/logodentista.png"
import "../Styles/Login.css"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"


export const MainLogin = () => {

  let navigate = useNavigate()
  const [usuario, setUsuario] = useState("")
  const [contraseña, setContraseña] = useState("")
  
  const handleIngresar = () =>{
      axios.post("http://localhost:8000/login/login",{
        usuario: usuario,
        contraseña: contraseña
    }).then(()=>{
        navigate('/Home',{ replace: true })
        alert("Bienvenido.")
      }).catch(()=>{
       alert("Usuario o contraseña incorrecta")
    })
  }


  return (
    <div className="body">
      <Link to="/registrarLogin">
        <button>Registarse</button>
      </Link>
          <div className="login-box">
            <img src={login} alt="" className="avatar"/>
            <h1>Ingrese su usuario</h1>
            <form action="">
                <label htmlFor="username">Usuario</label>
                <input type="text" placeholder="ingrese su usuario" onChange={(e)=> setUsuario(e.target.value)}/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder="ingrese su contraseña" onChange={(e)=> setContraseña(e.target.value)}/>
                <Link to="/">
                      <input type="submit" value="Ingresar" onClick={handleIngresar}/>
                </Link>
            </form>
          </div>
    </div>
  )
}

export default MainLogin