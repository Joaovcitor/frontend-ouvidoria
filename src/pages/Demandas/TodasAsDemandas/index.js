import React, { useEffect, useState } from "react";
import { Organizador, Links, Section } from "./styled";
import axios from "../../../services/axios";

import { format } from "date-fns";

import { toast } from "react-toastify";
import buscarUsuario from "../../../utils/buscarUsuario";

export default function Home() {
  const [demandas, setDemandas] = useState([]);
  const [eleitores, setEleitores] = useState([]);
  const [liderancas, setLiderancas] = useState([]);
  const [user, setUser] = useState([]);

  buscarUsuario(setUser);

  useEffect(() => {
    async function getData() {
      if (user === null) return;
      try {
        if (user.role === "adm") {
          const response = await axios.get("/demandas/todas-as-demandas");
          const responseEleitor = await axios.get(
            "/eleitor/todos-os-eleitores"
          );
          const responseLideranca = await axios.get(
            "/liderancas/todas-as-liderancas"
          );
          if (response.data.length === 0) {
            setDemandas([]);
          } else {
            setDemandas(response.data.demandas);
            setEleitores(responseEleitor.data.eleitores);
            setLiderancas(responseLideranca.data.liderancas);
          }
        } else if (user.role === "lideranca") {
          const response = await axios.get("/demandas/demandas-lideranca");
          if (response.data.length === 0) {
            setDemandas([]);
          } else {
            setDemandas(response.data.demandas);
          }
        }
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, [user.role]);

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
    <Section>
      <h2>Demandas pendentes {demandasPendentes.length}</h2>
      <Organizador>
        {demandasPendentes.length > 0 ? (
          demandasPendentes.map((demanda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === demanda.eleitorId
            );
            const lideranca = liderancas.find(
              (lideranca) => lideranca.id === demanda.liderancaId
            );
            return (
              <nav key={demanda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(demanda.createdAt, "dd/MM/yyyy")}
                </p>
                {demanda.data_conclusao ? (
                  <p>
                    Data da conclusão:{" "}
                    {format(demanda.data_conclusao, "dd/MM/yyyy")}
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
                <p>{demanda.descricao_demanda}</p>
                <p>
                  Status: <span>{demanda.status}</span>
                </p>
                <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma demanda Pendente.</p>
        )}
      </Organizador>
      <h2>Demandas Em analise {demandasEmAnalise.length}</h2>
      <Organizador>
        {demandasEmAnalise.length > 0 ? (
          demandasEmAnalise.map((demanda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === demanda.eleitorId
            );
            const lideranca = liderancas.find(
              (lideranca) => lideranca.id === demanda.liderancaId
            );
            return (
              <nav key={demanda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(demanda.createdAt, "dd/MM/yyyy")}
                </p>
                {demanda.data_conclusao ? (
                  <p>
                    Data da conclusão:{" "}
                    {format(demanda.data_conclusao, "dd/MM/yyyy")}
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
                <p>{demanda.descricao_demanda}</p>
                <p>
                  Status: <span>{demanda.status}</span>
                </p>
                <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma demanda Em Analise.</p>
        )}
      </Organizador>
      <h2>Demandas resolvidas {demandasResolvidas.length}</h2>
      <Organizador>
        {demandasResolvidas.length > 0 ? (
          demandasResolvidas.map((demanda) => {
            const eleitor = eleitores.find(
              (eleitor) => eleitor.id === demanda.eleitorId
            );
            const lideranca = liderancas.find(
              (lideranca) => lideranca.id === demanda.liderancaId
            );
            return (
              <nav key={demanda.id}>
                <p>
                  Dia que foi solicitada:{" "}
                  {format(demanda.createdAt, "dd/MM/yyyy")}
                </p>
                {demanda.data_conclusao ? (
                  <p>
                    Data da conclusão:{" "}
                    <span>{format(demanda.data_conclusao, "dd/MM/yyyy")}</span>
                  </p>
                ) : (
                  ""
                )}
                <p>
                  Eleitor que solicitou:{" "}
                  <span className="nomeEleitor">
                    {eleitor ? eleitor.name : "Não existe"}
                  </span>
                </p>
                <p>
                  Liderança que solicitou:{" "}
                  <span className="nomeEleitor">
                    {lideranca ? lideranca.name : "Não existe"}
                  </span>
                </p>
                <p>Descrição:</p>
                <p>{demanda.descricao_demanda}</p>
                <p>
                  Status: <span>{demanda.status}</span>
                </p>
                <Links to={`/demanda/editar/${demanda.id}`}>Editar</Links>
              </nav>
            );
          })
        ) : (
          <p>Nenhuma demanda resolvida.</p>
        )}
      </Organizador>
    </Section>
  );
}
