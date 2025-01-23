/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";

import { toast } from "react-toastify";

export default function AgendaDosEleitores({ match }) {
  const { id } = match.params;
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/agenda/agendas-eleitor/${id}`);
        if (response.data.length === 0) {
          setAgendas([]);
        } else {
          setAgendas(response.data.agendas);
        }
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, []);

  const agendasPendentes = agendas.filter(
    (agenda) => agenda.status === "pendente"
  );

  const agendasEmAnalise = agendas.filter(
    (agenda) => agenda.status === "em analise"
  );

  const agendasAceitas = agendas.filter((agenda) => agenda.status === "aceita");
  return (
    <Div>
      <h2>Agendas pendentes {agendasPendentes.length}</h2>
      <Organizador>
        {agendasPendentes.length > 0 ? (
          agendasPendentes.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <h4>Descrição:</h4>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/agenda/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma Agenda pendente.</p>
        )}
      </Organizador>
      <h2>Agenda Em analise {agendasEmAnalise.length}</h2>
      <Organizador>
        {agendasEmAnalise.length > 0 ? (
          agendasEmAnalise.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma demanda pendente.</p>
        )}
      </Organizador>
      <h2>Agendas aceitas {agendasAceitas.length}</h2>
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
              <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma demanda pendente.</p>
        )}
      </Organizador>
    </Div>
  );
}
