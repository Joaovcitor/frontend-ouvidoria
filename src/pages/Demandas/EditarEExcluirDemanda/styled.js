import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.form`
  display: grid;
  justify-content: center;

  nav {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 320x;
    background: white;
    border-radius: 10px;
    transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    flex-direction: column;
    padding: 25px;
    border-radius: 10px;
    margin-top: 50px;
  }

  p {
    color: black;
  }

  textarea {
    width: 350px;
    height: 200px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
  }

  select {
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;

    option {
      /* background-color: black; */
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #032859;
    -webkit-box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 6px 4px 0px rgba(0, 0, 0, 0.75);
    width: 300px;
    margin-top: 60px;
    margin-left: 30px;
    border-radius: 5px;
    padding: 10px;

    h4 {
      color: white;
      font-size: 20px;
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
  background-color: #f24162;
  padding: 7px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  color: white;
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
