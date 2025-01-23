import styled from "styled-components";

export const Container = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10; // Caso seja necessário sobrepor elementos
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ isOpen }) => (isOpen ? "#ff5722" : "#333")};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
  }
`;
