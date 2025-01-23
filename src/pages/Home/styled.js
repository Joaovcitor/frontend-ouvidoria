import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 470px) {
    flex-direction: column;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 254px;
    background: url("./images/Brasao_quixada.png") center center no-repeat;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    margin-top: 60px;
    margin-left: 30px;
    border-radius: 50%;
    padding: 10px;

    h4 {
      color: black;
      font-size: 20px;
      margin-bottom: 50px;
      text-shadow:
        1px 1px 2px white,
        -1px -1px 2px white,
        1px -1px 2px white,
        -1px 1px 2px white;
    }
  }

  p {
    font-size: 18px;
    /* margin-left: 15px; */
    color: black;
  }

  input {
    border: none;
    border-bottom: solid 1px black;
    background-color: transparent;
    color: white;
    text-align: center;
    font-size: 18px;
  }
`;

export const Links = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
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
