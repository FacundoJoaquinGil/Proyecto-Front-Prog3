import "../Styles/Footer.css"

import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <div className="contenedor_footer">

      <div className="footer">

        <MDBFooter className='text-center text-white'>
        <MDBContainer className=' pb-0'>
          <section className=''>
          </section>
        </MDBContainer>

          <div className='text-center p-3'>
            © 2023 Copyright: <br />
            <a className='text-white'>
            Matias Bordenave , Agustin Tapie , Joaquin Gil
            </a>
          </div>
        </MDBFooter>

      </div>


    </div>
  )
}

export default Footer