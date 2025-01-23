import React, { useEffect, useState } from "react";
import { Organizador, Links } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";
import history from "../../../services/history";

import { toast } from "react-toastify";

export default function CriarUsuario() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/usuario/criar", {
        name: name,
        password: password,
        cpf: cpf,
        email: email,
      });
      toast.success("Usuário criado com sucesso!");
      return history.push("/");
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
      <label htmlFor="nomeCompleto">
        Nome completo:
        <input
          type="text"
          id="nomeCompleto"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        E-mail:
        <input
          type="email"
          id="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        CPF:
        <input
          type="text"
          id="text"
          value={cpf || ""}
          onChange={(e) => setCpf(e.target.value)}
        />
      </label>
      <button type="submit">Criar</button>
    </Organizador>
  );
}
