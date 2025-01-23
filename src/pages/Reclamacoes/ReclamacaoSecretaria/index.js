import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";

import { toast } from "react-toastify";

export default function ReclamacoesSecretaria() {
  const [agendas, setReclamacoes] = useState([]);
  const [reclamacaoSemSecretaria, setReclamacoesSemSecretaria] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/reclamacoes/reclamacoes-secretaria");
        console.log(response.data);
        setReclamacoes(response.data.reclamacoes);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "/reclamacoes/reclamacoes-sem-secretaria"
        );
        console.log(response.data);
        setReclamacoesSemSecretaria(response.data.reclamacoes);
      } catch (e) {
        console.log(e);
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
    <Div>
      <h2>Reclamações sem secretaria {reclamacaoSemSecretaria.length}</h2>
      <Organizador>
        {reclamacaoSemSecretaria.length > 0 ? (
          reclamacaoSemSecretaria.map((reclamacao) => (
            <nav key={reclamacao.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(reclamacao.createdAt, "dd/MM/yyyy")}
              </p>
              <h4>Descrição:</h4>
              <p>{reclamacao.descricao}</p>
              <p>Status: {reclamacao.status}</p>
              <Links to={`/reclamacoes/editar/${reclamacao.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>
      <h2>Reclamações pendentes {reclamacoesPendentes.length}</h2>
      <Organizador>
        {reclamacoesPendentes.length > 0 ? (
          reclamacoesPendentes.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <h4>Descrição:</h4>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/reclamacoes/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>
      <h2>Reclamações Em analise {reclamacoesEmAnalise.length}</h2>
      <Organizador>
        {reclamacoesEmAnalise.length > 0 ? (
          reclamacoesEmAnalise.map((reclamacao) => (
            <nav key={reclamacao.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(reclamacao.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{reclamacao.descricao}</p>
              <p>Status: {reclamacao.status}</p>
              <Links to={`/reclamacoes/editar/${reclamacao.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação em Analise.</p>
        )}
      </Organizador>
      <h2>Reclamações resolvidas {agendasAceitas.length}</h2>
      <Organizador>
        {agendasAceitas.length > 0 ? (
          agendasAceitas.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/reclamacoes/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Reclamação pendente.</p>
        )}
      </Organizador>
    </Div>
  );
}
