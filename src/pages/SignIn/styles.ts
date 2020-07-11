import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /*Forma de forçar que o container assum sempre o tamanho total
  da tela do usuário */

  display: flex;

  align-items: stretch; /* Vai Fazer com que os itens dentro de Container
  também tenham teamanho total da página */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* Pega todo o conteúdo e põe no centro. */
  /* O place-content: center substitui:
    - justify-content: center;
    - align-itens: center;
  */

  width: 100%; /* Para ocupar o máximo do espaço possível */
  max-width: 700px; /* Nunca passar de 700px */
`;

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-50px);
  }
  to{
    opacity:1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;

      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    text-decoration: none;

    align-items: center;
    transition: color 0.2s;
    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /* Para ocupar todo os espaço, exceto os 700px do Content */
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
