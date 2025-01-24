import React, { useEffect, useState } from "react";
import { Organizador, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { Duvidas } from "../../../types/api";

export default function DuvidasUsuarioComum() {
  const [agendas, setReclamacoes] = useState<Duvidas[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{
          duvidas: Duvidas[];
        }>("/duvidas/minhas-duvidas");

        console.log(response.data);
        setReclamacoes(response.data.duvidas);
      } catch (e) {
        console.log(e);
        toast.error("Erro ao buscar as reclamações");
      }
    }
    getData();
  }, []);

  const reclamacoesPendentes = agendas.filter(
    (agenda) => agenda.status === "pendente"
  );

  const reclamacoesEmAnalise = agendas.filter(
    (agenda) => agenda.status === "em analise"
  );

  const agendasAceitas = agendas.filter(
    (agenda) => agenda.status === "resolvida"
  );

  return (
    <div>
      <h2>Reclamações pendentes {reclamacoesPendentes.length}</h2>
      <Organizador>
        {reclamacoesPendentes.length > 0 ? (
          reclamacoesPendentes.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(new Date(demanda.createdAt), "dd/MM/yyyy")}
              </p>
              <h4>Descrição:</h4>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>

      <h2>Reclamações Em análise {reclamacoesEmAnalise.length}</h2>
      <Organizador>
        {reclamacoesEmAnalise.length > 0 ? (
          reclamacoesEmAnalise.map((reclamacao) => (
            <nav key={reclamacao.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(new Date(reclamacao.createdAt), "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{reclamacao.descricao}</p>
              <p>Status: {reclamacao.status}</p>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>

      <h2>Agendas aceitas {agendasAceitas.length}</h2>
      <Organizador>
        {agendasAceitas.length > 0 ? (
          agendasAceitas.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(new Date(demanda.createdAt), "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>
    </div>
  );
}
