import { useState } from 'react';
import { Container, Form} from './styles';
import logo from '../assets/images/logo-azul-branco-modalgr.svg';

export default function App() {
  // const [Guest, useGuest] = useState([]);

  // useEffect(() => {
  //   fetchHomeData();
  // }, []);


  return (
      <Container>
        <h1>FEIRA DE TECNOLOGIA 2024</h1>
        <img src={logo} alt="logo da ModalGR" width={200} height={200} />

        <Form>
          <label>Nome</label>
          <input type="text" placeholder="Digite aui..." />
          <button type=''>Atualizar</button>
        </Form>
      </Container>
  );
}

