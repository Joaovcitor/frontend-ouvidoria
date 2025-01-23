/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { format } from "date-fns";

import { toast } from "react-toastify";

export default function DemandasLiderancas({ match }) {
  const { id } = match.params;
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `/demandas/demandas-da-lideranca/${id}`
        );
        if (response.data.length === 0) {
          setDemandas([]);
        } else {
          setDemandas(response.data.demandas);
        }
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, []);

  const demandasPendentes = demandas.filter(
    (demanda) => demanda.status === "Pendente"
  );

  const demandasEmAnalise = demandas.filter(
    (demanda) => demanda.status === "Em analise"
  );

  const demandasResolvidas = demandas.filter(
    (demanda) => demanda.status === "Resolvida"
  );
  return (
    <Div>
      <h2>Demandas pendentes {demandasPendentes.length}</h2>
      <Organizador>
        {demandasPendentes.length > 0 ? (
          demandasPendentes.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <h4>Descrição:</h4>
              <p>{demanda.descricao_demanda}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma demanda pendente.</p>
        )}
      </Organizador>
      <h2>Demandas Em analise {demandasEmAnalise.length}</h2>
      <Organizador>
        {demandasEmAnalise.length > 0 ? (
          demandasEmAnalise.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao_demanda}</p>
              <p>Status: {demanda.status}</p>
              <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
            </nav>
          ))
        ) : (
          <p>Nenhuma demanda pendente.</p>
        )}
      </Organizador>
      <h2>Demandas resolvidas {demandasResolvidas.length}</h2>
      <Organizador>
        {demandasResolvidas.length > 0 ? (
          demandasResolvidas.map((demanda) => (
            <nav key={demanda.id}>
              <p>
                Dia que foi solicitada:{" "}
                {format(demanda.createdAt, "dd/MM/yyyy")}
              </p>
              <p>Descrição:</p>
              <p>{demanda.descricao_demanda}</p>
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
