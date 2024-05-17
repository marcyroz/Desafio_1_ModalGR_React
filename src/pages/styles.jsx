import styled from 'styled-components';
import  background  from '../assets/images/background.jpg';

export const Container = styled.div`
  width: 500px;
  max-height: 600px;
  background: #9f9ff1 url(${background}) no-repeat;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  /* o auto deixa o elemento sempre centralizado na tela */
  margin: 80px auto;

  h1 {
    font-size: 19px;
    display: flex;
    flex-direction: row;
    /* deixa os itens dentro do h1 alinhados e na mesma altura */
    align-items: center;
  }
`;
