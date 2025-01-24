import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: flex;
  flex-wrap: wrap; /* Permite que os elementos "quebrem" para a próxima linha */
  justify-content: center;
  gap: 20px; /* Espaçamento entre os itens */
  text-align: center;
  padding: 20px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se quebrem para uma nova linha quando necessário */
  gap: 20px; /* Adiciona espaçamento entre os itens */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  margin: 0 auto;

  nav {
    @media (max-width: 470px) {
      margin: 0 auto;
      margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px; /* largura fixada */
    box-sizing: border-box;
    height: 220px;
    background: url("./images/Brasao_quixada.png") center center no-repeat;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border-radius: 5%;
    padding: 10px;
    margin: 10px; /* Remover margens fixas excessivas */

    h4 {
      color: black;
      font-size: 20px;
      margin-bottom: 20px;
      text-align: center;
      text-shadow:
        1px 1px 2px white,
        -1px -1px 2px white,
        1px -1px 2px white,
        -1px 1px 2px white;
    }
  }
`;

export const Links = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  width: 155px;
  background-color: #4aa2d9;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  div {
    width: 50vh;
    text-align: center;
  }

  nav {
    text-align: center;
    background-color: #4aa2d9;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 5px 5px 0px #000;
    margin-bottom: 20px;
    h4 {
      color: white;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    div {
      width: 30vh;
    }
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    &:focus {
      border: 1px solid #05f2c7;
    }
  }
`;
