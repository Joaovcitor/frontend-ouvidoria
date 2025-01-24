import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";
import { FcSupport } from "react-icons/fc";

export default function DuvidasSecretaria() {
  const [reclamacoes, setReclamacoes] = useState([]);
  const [reclamacaoSemSecretaria, setReclamacoesSemSecretaria] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/duvidas/duvidas-secretaria");
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

  const reclamacoesPendentes = reclamacoes.filter(
    (agenda) => agenda.status === "pendente"
  );

  const reclamacoesEmAnalise = reclamacoes.filter(
    (agenda) => agenda.status === "em analise"
  );

  const reclamacoesAceitas = reclamacoes.filter(
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
              <Links to={`/reclamacoes/editar/${reclamacao.id}`}>
                Editar <FcSupport size={20} color=""></FcSupport>
              </Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Dúvida pendente.</p>
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
              <Links to={`/reclamacoes/editar/${demanda.id}`}>
                Editar <FcSupport size={20} color=""></FcSupport>
              </Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Dúvida pendente.</p>
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
              <Links to={`/reclamacoes/editar/${reclamacao.id}`}>
                Editar <FcSupport size={20} color=""></FcSupport>
              </Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Dúvida em Analise.</p>
        )}
      </Organizador>
      <h2>Reclamações resolvidas {reclamacoesAceitas.length}</h2>
      <Organizador>
        {reclamacoesAceitas.length > 0 ? (
          reclamacoesAceitas.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/reclamacoes/editar/${demanda.id}`}>
                Editar <FcSupport size={20} color=""></FcSupport>
              </Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Dúvida Resolvida.</p>
        )}
      </Organizador>
    </Div>
  );
}
