import React from "react";
import { Div, Organizador, Links } from "./styled";
import { MdDiversity3, MdOutlineReceiptLong } from "react-icons/md";

export default function HomeLideranca() {
  return (
    <Organizador>
      <Div>
        <nav>
          <MdDiversity3 size={40}></MdDiversity3>
          <h4>
            Reclamações <span></span>
          </h4>
          <Links to={"/minhas-reclamacoes"}>Acessar</Links>
          <Links to={"/cadastrar-reclamacao"}>Cadastrar</Links>
        </nav>
      </Div>
    </Organizador>
  );
}
