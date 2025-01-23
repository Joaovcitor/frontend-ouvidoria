import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem a linha quando necessário */
  gap: 20px; /* Espaçamento entre os elementos */
  padding: 30px;
  margin: 20px;

  .lideranca {
    width: 150px;
  }

  h2 {
    width: 100%; /* O título ocupa toda a largura */
    text-align: center;
  }

  label {
    flex: 1 1 calc(33.33% - 20px); /* Cada label ocupa 1/3 da largura disponível, menos o espaçamento */
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  input,
  select {
    margin-top: 5px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%; /* Botão ocupa toda a largura */
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px; /* Espaçamento acima do botão */
  }

  button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 1050px) {
    label {
      flex: 1 1 calc(50% - 20px); /* Em telas menores, dois elementos por linha */
    }
  }

  @media (max-width: 520px) {
    label {
      flex: 1 1 100%; /* Em telas muito pequenas, cada label ocupa toda a largura */
    }

    button {
      margin-top: 10px; /* Ajusta o espaçamento do botão em telas menores */
    }
  }
`;
