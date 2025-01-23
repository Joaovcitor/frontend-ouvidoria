/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";

export default function CriarReclamacao({ match }) {
  const { id } = match.params;
  const [secretaria_responsavel, setSecretaria] = useState("");
  const [descricao, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/reclamacoes/criar", {
        descricao,
        secretaria_responsavel,
      });
      toast.success("Reclamação criada com sucesso!");
      history.push("/");
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
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h4>OBS.: AO CRIAR SUA RECLAMAÇÃO, VOCÊ NÃO PODERÁ EDITA-LÁ</h4>
      <h2>Cadastrar nova reclamação</h2>
      <label htmlFor="nome">
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label htmlFor="email">
        Secretaria responsável:
        <select onChange={(e) => setSecretaria(e.target.value)} name="" id="">
          <option value="Selecione">Selecione</option>
          <option value="nao sei">Não sei</option>
          <option value="secretaria A">secretaria A</option>
          <option value="secretaria B">secretaria B</option>
        </select>
      </label>

      <button type="submit">Cadastrar</button>
    </Form>
  );
}
