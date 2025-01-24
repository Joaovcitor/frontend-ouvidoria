/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Organizador, Links } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";

import { toast } from "react-toastify";

export default function EditarReclamacao({ match }) {
  const { id } = match.params;
  const [reclamacao, setReclamacao] = useState([]);
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");
  const [resposta, setResposta] = useState("");
  const [secretariaResponsavel, setSecretaria] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/reclamacoes/${id}`);
        setReclamacao(response.data.reclamacao);
        setStatus(response.data.reclamacao.status);
        setSecretaria(response.data.reclamacao.secretariaResponsavel);
        setResposta(response.data.reclamacao.resposta);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`/reclamacoes/editar/${id}`, {
        descricao: descricao,
        resposta,
        status,
        secretariaResponsavel,
      });
      toast.success("Agenda editada com sucesso!");
    } catch (e) {
      const errors = get(e, "response.data.errors", "");
      if (typeof errors === "string") {
        toast.error(errors);
      } else if (Array.isArray(errors)) {
        errors.forEach((error) => {
          toast.error(error);
        });
      } else if (typeof errors === "object") {
        Object.values(errors).forEach((error) => {
          if (typeof error === "string") {
            toast.error(error);
          }
        });
      }
    }
  };
  return (
    <Organizador onSubmit={handleSubmit}>
      <nav>
        <p>Descrição:</p>
        <textarea
          value={reclamacao.descricao}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        <p>Resposta:</p>
        <textarea
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
        ></textarea>
        <p>Secretaria Responsável: {reclamacao.secretariaResponsavel}</p>
        <select
          onChange={(e) => setSecretaria(e.target.value)}
          value={secretariaResponsavel}
        >
          <option value="secretaria A">Secretaria A</option>
          <option value="secretaria B">Secretaria B</option>
        </select>
        <p>Status:</p>
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Selecione">Selecione</option>
          <option value="pendente">Pendente</option>
          <option value="em analise">Em analise</option>
          <option value="resolvida">Resolvida</option>
        </select>

        <button type="submit">Editar</button>
      </nav>
    </Organizador>
  );
}
