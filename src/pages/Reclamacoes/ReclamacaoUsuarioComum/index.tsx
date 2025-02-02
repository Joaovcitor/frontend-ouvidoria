import React, { useEffect, useState } from "react";
import { Organizador, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { Reclamacao, Fotos } from "../../../types/api";
import { get } from "lodash";
import { FaUserCircle } from "react-icons/fa";

export default function ReclamacoesUsuarioComum() {
  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{
          reclamacoes: Reclamacao[];
        }>("/reclamacoes/minhas-reclamacoes");

        console.log(response.data);
        setReclamacoes(response.data.reclamacoes);
      } catch (e) {
        console.log(e);
        toast.error("Erro ao buscar as reclamações");
      }
    }
    getData();
  }, []);

  console.log(reclamacoes.map((demanda) => console.log(demanda)));

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
              <p>Descrição:</p>
              <p>{demanda.descricao}</p>
              <p>Resposta:</p>
              <p>
                {demanda.resposta ? demanda.resposta : "Aguardando resposta"}
              </p>
              <p>Status: {demanda.status}</p>
              {demanda.Fotos &&
              demanda.Fotos.length > 0 &&
              demanda.Fotos[0].url ? (
                <img src={demanda.Fotos[0].url} alt="Foto da reclamação" />
              ) : (
                <FaUserCircle size={36} />
              )}
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
          <p>Nenhuma Reclamação em análise.</p>
        )}
      </Organizador>

      <h2>Agendas aceitas {reclamacoesAceitas.length}</h2>
      <Organizador>
        {reclamacoesAceitas.length > 0 ? (
          reclamacoesAceitas.map((demanda) => (
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
          <p>Nenhuma Reclamação resolvida.</p>
        )}
      </Organizador>
    </div>
  );
}
