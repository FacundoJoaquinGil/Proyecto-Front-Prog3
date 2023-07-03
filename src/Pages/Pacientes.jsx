import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { MainPacientes } from '../Constants';
import "../Styles/Pacientes.css"



export const Pacientes = () => {


  return (
    <div>
      <Header/>
      <MainPacientes/>
      <Footer/>
    </div>
  );
}

export default Pacientes