import React, { useEffect, useState } from "react";
import { Organizador, Links, Section } from "./styled";
import axios from "../../../services/axios";

import { format } from "date-fns";

import { toast } from "react-toastify";
import buscarUsuario from "../../../utils/buscarUsuario";
import buscarEleitoresPorEndPoint from "../../../utils/buscarEleitoresPorEndPoint";
import buscarLiderancasPorEndPoint from "../../../utils/buscarLiderancasPorEndPoint";
import buscarAgendasPorEndPoint from "../../../utils/buscarAgendasPorEndPoint";

export default function TodasAsAgendas() {
  const [agendas, setAgenda] = useState([]);
  const [eleitores, setEleitores] = useState([]);
  const [liderancas, setLiderancas] = useState([]);
  const [user, setUser] = useState([]);
  buscarUsuario(setUser);

  buscarEleitoresPorEndPoint(setEleitores, `todos-os-eleitores`, user);
  buscarLiderancasPorEndPoint(setLiderancas, `todas-as-liderancas`, user);
  buscarAgendasPorEndPoint(setAgenda, "", user);

  const agendasPendentes = agendas.filter(
    (demanda) => demanda.status === "pendente"
  );

  const agendasEmAnalise = agendas.filter(
    (demanda) => demanda.status === "em analise"
  );

  const agendasAceitas = agendas.filter(
    (demanda) => demanda.status === "aceita"
  );
  return (
    <Section>
      <h2>Agendas pendentes {agendasPendentes.length}</h2>
      <Organizador>
        {agendasPendentes.length > 0 ? (
          agendasPendentes.map((agenda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === agenda.eleitorId
            );
            const lideranca = liderancas.find(
              (eleitor) => eleitor.id === agenda.liderancaId
            );
            return (
              <nav key={agenda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(agenda.createdAt, "dd/MM/yyyy")}
                </p>
                <p>
                  Eleitor que solicitou: {eleitor ? eleitor.name : "Não existe"}
                </p>
                <p>
                  Liderança que solicitou:{" "}
                  {lideranca ? lideranca.name : "Não existe"}
                </p>
                <p>Descrição:</p>
                <p>{agenda.descricao}</p>
                <p>Status: {agenda.status}</p>
                <Links to={`/agenda/editar/${agenda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma demanda pendente.</p>
        )}
      </Organizador>
      <h2>Agendas Em analise {agendasEmAnalise.length}</h2>
      <Organizador>
        {agendasEmAnalise.length > 0 ? (
          agendasEmAnalise.map((agenda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === agenda.eleitorId
            );
            const lideranca = liderancas.find(
              (eleitor) => eleitor.id === agenda.liderancaId
            );
            return (
              <nav key={agenda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(agenda.createdAt, "dd/MM/yyyy")}
                </p>
                <p>Descrição:</p>
                <p>
                  Eleitor que solicitou: {eleitor ? eleitor.name : "Não existe"}
                </p>
                <p>
                  Liderança que solicitou:{" "}
                  {lideranca ? lideranca.name : "Não existe"}
                </p>
                <p>{agenda.descricao}</p>
                <p>
                  Data do compromisso:{" "}
                  {format(agenda.data_do_compromisso, "dd/MM/yyyy")}
                </p>
                <p>Status: {agenda.status}</p>
                <Links to={`/agenda/editar/${agenda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma Agenda pendente.</p>
        )}
      </Organizador>
      <h2>Agendas aceitas {agendasAceitas.length}</h2>
      <Organizador>
        {agendasAceitas.length > 0 ? (
          agendasAceitas.map((agenda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === agenda.eleitorId
            );
            const lideranca = liderancas.find(
              (eleitor) => eleitor.id === agenda.liderancaId
            );

            return (
              <nav key={agenda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(agenda.createdAt, "dd/MM/yyyy")}
                </p>
                {agenda.data_conclusao ? (
                  <p>
                    Data da conclusao:{" "}
                    {format(agenda.data_conclusao, "dd/MM/yyyy")}
                  </p>
                ) : (
                  ""
                )}
                <p>
                  Eleitor que solicitou: {eleitor ? eleitor.name : "Não existe"}
                </p>
                <p>
                  Liderança que solicitou:{" "}
                  {lideranca ? lideranca.name : "Não existe"}
                </p>
                <p>Descrição:</p>
                <p>{agenda.descricao}</p>
                <p>
                  Status: <span>{agenda.status}</span>
                </p>
                <Links to={`/agenda/editar/${agenda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma Agenda aceita.</p>
        )}
      </Organizador>
    </Section>
  );
}
