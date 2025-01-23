import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.705);

  width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 420px) {
    width: 340px;
  }

  h2 {
    margin-bottom: 5px;
    text-align: center;
    color: black;
    font-weight: bolder;
  }

  textarea {
    width: 350px;
    height: 200px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.705);
    margin-top: 20px;

    @media (max-width: 420px) {
      width: 300px;
    }
  }

  select {
    padding: 5px;
    border: none;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    background-color: transparent;
    color: black;
    border: 1px black solid;

    option {
      /* background-color: black; */
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: black;
    font-weight: bolder;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #0d0d0d;
    padding: 0 10px;
    border-radius: 4px;
    &:focus {
      border: 1px solid red;
    }
  }
`;
