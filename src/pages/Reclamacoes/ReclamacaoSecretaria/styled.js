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
    /* justify-content: center; */
    /* text-align: center; */
    background-color: #011526;
    flex-direction: column;
    padding: 25px;
    width: 300px;
    margin: 0 auto;
    background: rgb(236, 236, 236);
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    p {
      margin-top: 20px;
      font-weight: bolder;
      color: black;
      text-align: center;
    }

    h4 {
      color: black;
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
