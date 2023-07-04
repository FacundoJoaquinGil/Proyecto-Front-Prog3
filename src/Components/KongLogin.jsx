import React from 'react'
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import {useState} from 'react'
  import fotoVent from '../assets/imgLogin.jpg'
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import '../Css/login.css'
  import axios from 'axios';
  import {useNavigate} from 'react-router-dom'
  import withReactContent from 'sweetalert2-react-content'
  import Swal from 'sweetalert2'
  import Button from 'react-bootstrap/Button';




const MainLogin = () => {
    const noti = withReactContent(Swal)

  const [body, setBody] = useState({Documento:'', Clave:''})

  const navigate = useNavigate()
  const inputChange= ({target}) => {
    const {name,value} = target
    setBody({
      ...body,
      [name]:value
    })
  }


  const onSubmit =() =>{
    axios.post('http://localhost:3001/clientes/login',body)
    .then(({data})=>{
      localStorage.setItem('login',"si")
      localStorage.setItem('usuario',data.idCliente)
      localStorage.setItem('direccion',data.Direccion)
      localStorage.setItem('nombre',data.Nombre)
      data.Documento === '43226633'? localStorage.setItem('admin',"yes") : localStorage.setItem('admin',"no") 
       navigate('/Inicio',{replace:true})
    })
    .catch (()=>{
      noti.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡No se encontró el usuario!',
        footer: 'Intente nuevamente, o contáctese con un administrador.'
      }) 
    })
  }

  return (
   <MDBContainer  fluid className='my-5 contain' >

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Inicio de sesión</h2>

              <MDBInput name='Documento' onChange={inputChange} value={body.Documento} wrapperClass='mb-4' label='Documento' id='form3' type='user'/>
              <MDBInput name='Clave' onChange={inputChange} value={body.Clave} wrapperClass='mb-4' label='Contraseña' id='form4' type='password'/>

              <Button onClick={onSubmit} className='w-100 mb-4' variant="danger" >Ingresar</Button>
              <p className='ms-5'>¿No tiene una cuenta? <a href="/Registro" class="link-info">Registrese aquí</a></p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src={fotoVent} className="rounded-4 shadow-4 imglog"
            alt="FotoVenta"/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

export default MainLogin
