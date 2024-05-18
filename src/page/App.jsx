import { useState } from 'react';
import { Container, Form, Footer } from './styles';
import logo from '../assets/images/logo-azul-branco-modalgr.svg';
import selo1 from '../assets/images/selo_1.png';
import selo2 from '../assets/images/selo_2.svg';

export default function App() {
  //criando os estados que vão receber o nome pelo input e depois atualizá-lo
  const [name, setName] = useState('');
  //criando os estados que vão fazer a formatação do nome
  const [formattedName, setFormattedName] = useState('');

  //função que irá tratar o evento de submit do form
  const handleSubmit = (event) => {
    //previnir que a página atualize (que é o comportamento padrão de um formulário html)
    event.preventDefault();
    //quando o botão é acionado, o estado que criamos é atualizado, e já com a formatação desejada junto
    setFormattedName(formatName(name));
  };

  //função que ira formatar o nome no padrão desejado
  const formatName = (name) => {
    //array com as palavras que devem ser ignoradas
    const ignoredWords = ['de', 'da', 'das', 'do', 'dos', 'e'];
    //"/\s+/"double slash; regex (regular expression), separa as palavras baseado no espaço;
    //a função trim vai ignorar os espaços e logo após a função split vai separar as palavras
    //aqui, estamos criando um array com as palavras do nome cada uma ocupando certa posição
    const nameParts = name.trim().split(/\s+/);
    //se o campo estiver vazio, será retornado um espaço vazio também
    if (nameParts.length === 0) return '';
    //criando uma constante pra armazenar o sobrenome, onde a função pop elimina o último item do array (nesse caso, o último sobrenome), o coloca EM LETRA NAIÚSCULA e o armazena na constante.
    const lastName = nameParts.pop().toUpperCase();
    // criando uma constante pra armazenar as iniciais
    const initials =
      //selecionando as partes divididas para serem filtradas de forma que, as palavras que estiverem no elemento "namePart" serão eliminadas pois também estão na array "ignoreWords", e logo depois colocando todas as letras em minúsculo
      nameParts
        .filter((part) => !ignoredWords.includes(part.toLowerCase()))
        //mapeando as palavras selecionadas e colocando apenas a primeira letra em MAIÚSCULO
        .map((part) => part[0].toUpperCase())
        // juntando as iniciais com um ponto final e espaço, e logo apó colocando mais um ponto final (se não a última letra ficaria sem)
        .join('. ') + '.';
    //retornando o último sobrenome, depois uma vírgula, e as iniciais logo após
    return `${lastName}, ${initials}`;
  };

  return (
    <Container>
      <h1>FEIRA DE TECNOLOGIA 2024</h1>
      <img src={logo} alt="logo da ModalGR" width={200} height={200} />
      {/* teste lógico: se formattedName for true (diferente de zero, ou seja, ja tiver um valor contido em si), o condicional retorna o crachá com o nome do colaborador, sem o input e o texto de boas vindas, apenas o título, imagem, o próprio nome e o footer */}
      {formattedName ? (
        //fragmento (elementos html filhos precisam de um elemento pai, o fragmento faz esse trabalho)
        <>
          <h2>Colaborador(a)</h2>
          <div className="guest-name">
            {/* nome do colaborador em negrito */}
            <strong>
              <span>{formattedName}</span>
            </strong>
          </div>
        </>
      ) : (
        // condicional caso formattedName seja false (ou seja, igual a zero)
        <>
          <p>
            A ModalGR te convida para atender à próxima feira de tecnologia de
            2024 como nosso(a) Colaborador(a)! Insira seu nome e crie seu crachá
            de identificação :)
          </p>

          <h2>Colaborador(a)</h2>
          {/* função no form para indicar o que irá acontecer após o envio */}
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Digite seu nome aqui..."
              //quando o nome for inserido dentro do input, a prop onchange já vai mudar o estado do nome e armazená-lo na constante "name" declarada no ínicio do escopo, após declarar o value como name também (callback)
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Atualizar</button>
          </Form>
        </>
      )}

      <Footer>
        <img src={selo1} alt="certificado great place to work with" />
        <img src={selo2} alt="desenvolvimento sustentável ODS 2030" />
        <div className="contact-info">
          <span>MATRIZ SANTOS / SP</span>
          <span>+55 13 4101-0010</span>
          <br />
          <span>comunicacao@modalgr.io</span>
          <span>comercial@modalgr.io</span>
        </div>
      </Footer>
    </Container>
  );
}
