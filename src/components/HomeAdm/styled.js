import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
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
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px; /* largura fixada */
    box-sizing: border-box;
    height: 220px;
    background: url("./images/Brasao_quixada.png") center center no-repeat;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    border-radius: 50%;
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
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  width: 145px;
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
  flex-wrap: wrap; /* Permite que os itens se quebrem para uma nova linha quando necessário */
  gap: 20px; /* Adiciona espaçamento entre os itens */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  margin: 0 auto;
  div {
    width: 50vh;
    text-align: center;
  }

  .dados-eleitores {
    width: 175px;
    height: 150px;
    background: rgb(17, 4, 134);
    border-radius: 25%;
    /* box-shadow:
      rgb(0, 0, 0, 0.7) 5px 10px 50px,
      rgb(0, 0, 0, 0.7) -5px 0px 250px; */
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    margin-bottom: 5px;
    align-items: center;
    margin-top: 20px;
    h4 {
      color: white;
    }
  }

  /* nav {
    width: 290px;
    height: 120px;
    background: rgb(17, 4, 134);
    border-radius: 15px;
    box-shadow:
      rgb(0, 0, 0, 0.7) 5px 10px 50px,
      rgb(0, 0, 0, 0.7) -5px 0px 250px;
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    margin-bottom: 30px;
    h4 {
      color: white;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    div {
      width: 30vh;
    }
  } */
`;

export const DemandasDe7Dias = styled.section`
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
    width: 350px;
    /* height: 120px; */
    background: rgb(17, 4, 134);
    border-radius: 15px;
    /* box-shadow:
      rgb(0, 0, 0, 0.7) 5px 10px 50px,
      rgb(0, 0, 0, 0.7) -5px 0px 250px; */
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    margin-bottom: 30px;
    padding: 25px;
    h4 {
      color: white;
    }

    div {
      flex-direction: column;
      display: inline-block;
      margin: 0 auto;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: #fff;
      width: 300px;
      background-color: #4aa2d9;
      border: 2px solid #000;
      border-radius: 10px;
      box-shadow: 5px 5px 0px #000;
      transition: all 0.3s ease;
      cursor: pointer;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    div {
      width: 30vh;
    }
  }
`;

export const Aniversariantes = styled.section`
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
    width: 290px;
    /* height: 120px; */
    background: rgb(17, 4, 134);
    border-radius: 15px;
    /* box-shadow:
      rgb(0, 0, 0, 0.7) 5px 10px 50px,
      rgb(0, 0, 0, 0.7) -5px 0px 250px; */
    display: flex;
    color: white;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-align: center;
    margin-bottom: 30px;
    padding: 25px;
    h4 {
      color: white;
    }

    div {
      flex-direction: column;
      .parabens {
        display: inline-block;
        margin: 0 auto;
        padding: 10px 20px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        color: #fff;
        width: 140px;
        background-color: #4aa2d9;
        border: 2px solid #000;
        border-radius: 10px;
        box-shadow: 5px 5px 0px #000;
        transition: all 0.3s ease;
        cursor: pointer;
        margin-bottom: 10px;
      }
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
