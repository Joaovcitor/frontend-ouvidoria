import React from "react";
import { Div, Organizador, Links } from "./styled";
import { MdDiversity3 } from "react-icons/md";
export default function HomeLideranca() {
  return (
    <Organizador>
      <Div>
        <nav>
          <h4>
            Reclamações<span></span>
          </h4>
          <Links to={"/minhas-reclamacoes"}>Acessar Reclamações</Links>
          <Links to={"/cadastrar-reclamacao"}>Cadastrar Reclamações</Links>
        </nav>
      </Div>
      <Div>
        <nav>
          <h4>
            Dúvidas<span></span>
          </h4>
          <Links to={"/minhas-duvidas"}>Acessar Dúvidas</Links>
          <Links to={"/cadastrar-duvida"}>Cadastrar Dúvidas</Links>
        </nav>
      </Div>
    </Organizador>
  );
}
