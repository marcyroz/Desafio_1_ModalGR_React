import { useState } from 'react';
import { Container, Form, Footer} from './styles';
import logo from '../assets/images/logo-azul-branco-modalgr.svg';
import selo1 from '../assets/images/selo_1.png'
import selo2 from '../assets/images/selo_2.svg'

export default function App() {
  // const [Guest, useGuest] = useState([]);

  // useEffect(() => {
  //   fetchHomeData();
  // }, []);


  return (
      <Container>
        <h1>FEIRA DE TECNOLOGIA 2024</h1>
        <img src={logo} alt="logo da ModalGR" width={200} height={200} />
        <p>A ModalGR te convida para atender à próxima feira de tecnologia de 2024 como nosso(a) Colaborador(a)! Insira seu nome e crie seu crachá de idetificação :)</p>

        <h2>Colaborador(a)</h2>

        <Form>
          <input type="text" placeholder="Digite seu nome aqui..." />
          <button type=''>Atualizar</button>
        </Form>

        <Footer>
          <img src={selo1} alt='certificado gret place to work with'/>
          <img src={selo2}></img>
        </Footer>
      </Container>
  );
}

