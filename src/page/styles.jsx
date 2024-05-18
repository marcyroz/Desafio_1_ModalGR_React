import styled from 'styled-components';
import background from '../assets/images/background.jpg';

export const Container = styled.div`
  max-width: 500px;
  background: url(${background}) no-repeat;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;
  text-align: center;

  .guest-name {
    max-height: 100px;
    max-width: 400px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 80px auto;
    padding: 60px;
    text-align: center;
    background-color: #ffff;

    span {
      font-size: 40px;
      color: #f58220;
      font-family: 'Plus Jakarta Sans';
    }
  }
  h1 {
    font-size: 40px;
    color: #ffff;
    font-family: 'Plus Jakarta Sans';
  }

  h2 {
    font-size: 30px;
    color: #ffff;
    font-family: 'Plus Jakarta Sans';
  }

  p {
    color: #00153d;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Plus Jakarta Sans';
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  /* garante que o input e o botão fiuem sempre um ao lado do outro */
  flex-direction: row;

  input {
    /* faz com que ele ocupe todo o espaço possível */
    flex: 1;
    border: 1px solid #eee;
    /* 10px em cima e em baixo e 15 na esquerda e na direita */
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    font-family: 'Plus Jakarta Sans';
  }

  button {
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    color: #eee;
    cursor: pointer;
    background-color: #f58220;
    border-radius: 4px;
    border-style: none;
  }
`;
export const Footer = styled.footer`
  display: flex;
  margin-top: 30px;

  img {
    padding: 10px;
    margin-right: 10px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    span {
      font-family: 'Plus Jakarta Sans';
      font-size: 15px;
      color: #00153d;
    }
  }
`;
