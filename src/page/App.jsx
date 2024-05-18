import { useState } from 'react';
import { Container, Form, Footer} from './styles';
import logo from '../assets/images/logo-azul-branco-modalgr.svg';
import selo1 from '../assets/images/selo_1.png'
import selo2 from '../assets/images/selo_2.svg'

export default function App() {

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [formattedName, setFormattedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setFormattedName(formatName(name));

  }

  const formatName = (name) => {
    const ignoredWords = ['de', 'da', 'das', 'do', 'dos', 'e'];
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length === 0) return '';
    const lastName = nameParts.pop().toUpperCase();
    const initials = nameParts
      .filter(part => !ignoredWords.includes(part.toLowerCase()))
      .map(part => part[0].toUpperCase())
      .join('. ') + '.';
    return `${lastName}, ${initials}`;

  };

  return (
      <Container>
        <h1>FEIRA DE TECNOLOGIA 2024</h1>
        <img src={logo} alt="logo da ModalGR" width={200} height={200} />
        {formattedName ? (
          <>
          <h2>Colaborador(a)</h2>
        <div className='guest-name'>
          <strong><span>{formattedName}</span></strong>
        </div>
        </>
      ) : (
        <>
        <p>A ModalGR te convida para atender à próxima feira de tecnologia de 2024 como nosso(a) Colaborador(a)! Insira seu nome e crie seu crachá de idetificação :)</p>

        <h2>Colaborador(a)</h2>

        <Form onSubmit={handleSubmit}>
          <input type="text" value={name} placeholder="Digite seu nome aqui..." onChange={(e) => setName(e.target.value)} />
          <button type='submit'>Atualizar</button>
        </Form>
        </>
        )}

        <Footer>
          <img src={selo1} alt='certificado great place to work with'/>
          <img src={selo2} alt= 'desenvolvimento sustentável ODS 2030'/>
          <div className='contact-info'>
          <span>MATRIZ SANTOS / SP</span>
          <span>+55 13 4101-0010</span><br/>
          <span>comunicacao@modalgr.io</span>
          <span>comercial@modalgr.io</span>
          </div>
        </Footer>
      </Container>
  );
}

