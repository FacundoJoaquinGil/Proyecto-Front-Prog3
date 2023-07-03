import login from "../assets/logodentista.png"
import "../Styles/Login.css"
import {Link} from "react-router-dom"

const MainLogin = () => {
  return (
    <div className="body">
          <div className="login-box">
            <img src={login} alt="" className="avatar"/>
            <h1>Ingrese su usuario</h1>
            <form action="">
                <label htmlFor="username">Usuario</label>
                <input type="text" placeholder="ingrese su usuario"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder="ingrese su contraseña"/>
                <Link to="/">
                <input type="submit" value="Ingresar"/>
                </Link>
            </form>
          </div>
    </div>
  )
}

export default MainLogin