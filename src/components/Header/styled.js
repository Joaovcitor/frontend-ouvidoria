import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
  position: relative;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px; /* Espaçamento entre ícone e texto */
  color: white;
  z-index: 1100; /* Mantém sempre acima */

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) =>
    open ? "0" : "-100%"}; /* Sai da tela quando fechado */
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9); /* Fundo escuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.3s ease-in-out;
  z-index: 1000; /* Garante que está acima de qualquer outro elemento */
  justify-content: center;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    padding: 15px;
    transition: 0.3s;
  }

  a:hover {
    background: #444;
    border-radius: 5px;
    padding: 15px 20px;
  }
`;
