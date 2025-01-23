import React, { useState } from "react";
import { Bar, Container } from "./styled";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </Container>
  );
};

export default Hamburger;
