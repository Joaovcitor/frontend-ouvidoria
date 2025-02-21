import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const StyledWrapper = styled.div`
  .card {
    --border-radius: 0.75rem;
    --primary-color: #7257fa;
    /* --secondary-color: #3c3852; */
    width: 210px;
    font-family: "Arial";
    padding: 1rem;
    cursor: pointer;
    border-radius: var(--border-radius);
    background: #f1f1f3;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
    position: relative;
  }

  .card > * + * {
    margin-top: 1.1em;
  }

  .card .card__content {
    color: var(--secondary-color);
    font-size: 0.86rem;
  }

  .card .card__title {
    padding: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .card .card__date {
    color: #6e6b80;
    font-size: 0.8rem;
  }

  .card .card__arrow {
    position: absolute;
    background: var(--primary-color);
    padding: 0.4rem;
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    bottom: 0;
    right: 0;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card svg {
    transition: 0.2s;
  }

  /* hover */
  .card:hover .card__title {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .card:hover .card__arrow {
    background: #111;
  }

  .card:hover .card__arrow svg {
    transform: translateX(3px);
  }
`;
