import styled from "styled-components";

export const Div = styled.div`
  font-family: Montserrat, sans-serif;
  width: 300px;
  height: 250px;
  translate: -6px -6px;
  background: #5fcdd9;
  border: 3px solid #000000;
  box-shadow: 12px 12px 0 #000000;
  overflow: hidden;
  transition: all 0.3s ease;
  margin: 0 auto;
  margin-top: 30px;

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 900;
    width: 100%;
    height: 32px;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
  }

  .content {
    padding: 8px 12px;
    font-size: 18px;
    font-weight: 600;
  }

  /* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
`;

export const Organizador = styled.section`
  display: flex;
  flex-wrap: wrap; /* Permite que os elementos "quebrem" para a próxima linha */
  justify-content: center;
  gap: 20px; /* Espaçamento entre os itens */
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os itens verticalmente em telas menores */
    gap: 15px;
  }
`;
