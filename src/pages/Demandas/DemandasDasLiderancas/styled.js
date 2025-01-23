import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 290px;
    padding: 20px 1px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    cursor: pointer;
    box-shadow:
      0 10px 15px -3px rgba(33, 150, 243, 0.4),
      0 4px 6px -4px rgba(33, 150, 243, 0.4);
    border-radius: 10px;
    background-color: #6b6ecc;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);

    p {
      /* margin-top: 20px; */
      padding: 10px;
      font-weight: bolder;
      color: white;
      text-align: center;
    }

    h4 {
      color: white;
    }
  }
`;

export const Div = styled.div`
  align-items: center;
  text-align: center;
  margin: 0 auto;

  div {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .filtro {
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: 18px;
    }

    input {
      margin-top: 20px;
    }

    button {
      width: 200px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
`;

export const Links = styled(Link)`
  background-color: #034aa6;
  padding: 7px;
  border-radius: 4px;
  color: white;
  width: 120px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 40px;

  div {
    margin-left: 20px;
    background-color: #011126;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    -webkit-box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);

    p {
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
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
