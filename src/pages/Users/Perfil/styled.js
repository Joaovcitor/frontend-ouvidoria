import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Organizador = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  span {
    color: #6fd904;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 310px;
    padding: 20px;
    margin: 10px 0;
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
      margin-top: 20px;
      font-weight: bolder;
      color: white;
      text-align: center;
    }

    h4 {
      color: white;
    }

    .nomeEleitor {
      color: #6fd904;
    }
  }

  input {
    width: 100%;
    max-width: 220px;
    height: 45px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
  }

  input:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }

  input:active {
    transform: scale(0.95);
  }

  input:focus {
    border: 2px solid grey;
  }
`;

export const FormEmailSubmit = styled.form`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;

  input {
    width: 100%;
    max-width: 220px;
    height: 30px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
  }

  input:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }

  input:active {
    transform: scale(0.95);
  }

  input:focus {
    border: 2px solid grey;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0.125em solid #1a1a1a;
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: #3b3b3b;
    cursor: pointer;
    display: inline-block;
    font-family:
      Roobert,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 1em;
    min-width: 0;
    outline: none;
    /* padding: 1em 2.3em; */
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    width: 120px;
    margin: 0 auto;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
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
  flex-direction: column;
  align-items: center;
  text-align: center;
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
