/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Organizador } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";

import { toast } from "react-toastify";
import buscarUsuario from "../../../utils/buscarUsuario";

export default function Home({ match }) {
  const { id } = match.params;
  const [demanda, setDemanda] = useState([]);
  const [status, setStatus] = useState("");
  const [descricao_demanda, setDescricao] = useState("");
  const [eleitorId, setIdEleitor] = useState("");
  const [eleitor, setEleitor] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  buscarUsuario(setUser);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/demandas/${id}`);
        setDemanda(response.data.demanda);
        setDescricao(response.data.demanda.descricao_demanda);
        setStatus(response.data.demanda.status);
        setIdEleitor(response.data.demanda.eleitorId);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, [id]);

  useEffect(() => {
    async function buscarEleitor() {
      try {
        if (!eleitorId) return;
        const response = await axios.get(`/eleitor/${eleitorId}`);
        setEleitor(response.data.eleitor);
      } catch (e) {
        console.log(e);
      }
    }
    buscarEleitor();
  }, [eleitorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (descricao_demanda.length < 3 || descricao_demanda.length > 800) {
      toast.error("Preencha a descrição de 3 a 800 caracteres!");
      return setIsLoading(false);
    }

    const data_conclusao = status === "Resolvida" ? new Date() : null;

    const demandaPayload = {
      descricao_demanda,
      status,
      ...(data_conclusao && { data_conclusao }),
    };

    try {
      await axios.put(`/demandas/editar/${id}`, demandaPayload);
      toast.success("Demanda editada com sucesso!");

      if (status === "Resolvida") {
        const emailPayload = {
          to: eleitor.email,
          subject: `Demanda resolvida`,
          text: `Olá, ${eleitor.name}, sua demanda foi resolvida. A demanda ${descricao_demanda}`,
        };

        await axios.post("/email/enviar", emailPayload);
        toast.info("E-mail enviado para o eleitor");
      }
    } catch (e) {
      handleErrors(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleErrors = (error) => {
    const errors = get(error, "response.data.errors", "");

    if (typeof errors === "string") {
      toast.error(errors);
    } else if (Array.isArray(errors)) {
      errors.forEach((error) => toast.error(error));
    } else if (typeof errors === "object") {
      Object.values(errors).forEach((error) => {
        if (typeof error === "string") {
          toast.error(error);
        }
      });
    }
  };

  return (
    <Organizador onSubmit={handleSubmit}>
      <nav>
        <p>Descrição:</p>
        <textarea
          value={descricao_demanda}
          onChange={(e) => setDescricao(e.target.value)}
        ></textarea>
        {user.role === "adm" ? (
          <>
            <p>Status:</p>
            <select onChange={(e) => setStatus(e.target.value)} value={status}>
              <option value="Selecione">Selecione</option>
              <option value="Pendente">Pendente</option>
              <option value="Em analise">Em analise</option>
              <option value="Resolvida">Resolvida</option>
            </select>
          </>
        ) : (
          ""
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading && status === "Resolvida" ? "Enviando email" : "Editar"}
        </button>
      </nav>
    </Organizador>
  );
}
