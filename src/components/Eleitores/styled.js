import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    background-color: #ffff;
    box-shadow:
      20px 20px 60px #bebebe,
      -20px -20px 60px #ffffff;
    width: 90%;
    border-radius: 4px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;

    h3 {
      grid-column: 1 / -1; /* Faz o h3 ocupar a largura total da grid */
      justify-self: center; /* Centraliza o h3 */
      margin-bottom: 10px;
      font-size: 1.5rem;
    }

    nav {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 15px;
      width: 250px;
      height: 300px;
      background: #07182e;
      position: relative;
      place-content: center;
      place-items: center;
      overflow: hidden;
      border-radius: 20px;
      margin: 0 auto;

      p {
        margin-top: 20px;
        font-weight: bolder;
        color: white;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 130px;
    margin: 0 auto;
    grid-column: 1 / -1;

    button {
      font-weight: bolder;
    }
  }
`;

export const Links = styled(Link)`
  background-color: #034aa6;
  padding: 7px;
  border-radius: 4px;
  color: white;
  width: 140px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: bolder;
`;
