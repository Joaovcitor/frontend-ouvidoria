import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";

export default function CriarDuvida() {
  const [secretariaResponsavel, setSecretaria] = useState("");
  const [descricao, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(secretariaResponsavel);
      await axios.post("/duvidas/criar", {
        descricao,
        secretariaResponsavel: secretariaResponsavel,
      });
      toast.success("Dúvida criada com sucesso!");
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
      <h4>OBS.: AO ENVIAR SUA DÚVIDA, VOCÊ NÃO PODERÁ EDITA-LÁ</h4>
      <h2>Cadastrar nova Dúvida</h2>
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
