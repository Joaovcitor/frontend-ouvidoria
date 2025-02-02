import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";
import { FcSupport } from "react-icons/fc";

export default function DuvidasSecretaria() {
  const [duvidas, setDuvidas] = useState([]);
  const [reclamacaoSemSecretaria, setReclamacoesSemSecretaria] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/duvidas/duvidas-secretaria");
        setDuvidas(response.data.duvidas);
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

  const duvidasPendentes = duvidas.filter(
    (agenda) => agenda.status === "pendente"
  );

  const duvidasEmAnalise = duvidas.filter(
    (agenda) => agenda.status === "em analise"
  );

  const duvidasResolvidas = duvidas.filter(
    (agenda) => agenda.status === "resolvida"
  );
  return (
    <Div>
      <h2>Dúvidas sem secretaria {reclamacaoSemSecretaria.length}</h2>
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
      <h2>Dúvidas pendentes {duvidasPendentes.length}</h2>
      <Organizador>
        {duvidasPendentes.length > 0 ? (
          duvidasPendentes.map((demanda) => (
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
      <h2>Dúvidas Em analise {duvidasEmAnalise.length}</h2>
      <Organizador>
        {duvidasEmAnalise.length > 0 ? (
          duvidasEmAnalise.map((reclamacao) => (
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
      <h2>Dúvidas resolvidas {duvidasResolvidas.length}</h2>
      <Organizador>
        {duvidasResolvidas.length > 0 ? (
          duvidasResolvidas.map((demanda) => (
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
