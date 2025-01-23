import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";
import { format, isValid } from "date-fns";

import { toast } from "react-toastify";

export default function EditarUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/`);
        setEmail(response.data.email);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar suas informações");
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || email.length <= 1) {
      return toast.error("Preencha seu email");
    }

    try {
      await axios.put(`/usuarios/editar-email/`, {
        email,
      });
      toast.success("E-mail editado com sucesso!");
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

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (!password) {
      return toast.error("Preencha sua senha");
    }

    if (password !== confirmPassword) {
      return toast.error("Senhas são diferentes!");
    }

    try {
      await axios.put(`/usuarios/editar-senha/`, {
        password,
        confirmPassword,
      });
      toast.success("E-mail editado com sucesso!");
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
    <Div>
      <Organizador onSubmit={handleSubmit}>
        <label htmlFor="email">
          Editar apenas o E-mail:
          <input
            type="email"
            id="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Editar</button>
      </Organizador>

      <Organizador onSubmit={handleSubmitPassword}>
        Editar apenas a Senha:
        <label htmlFor="email">
          Senha
          <input
            type="password"
            id="password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Confirmar Senha
          <input
            type="password"
            id="password"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Editar</button>
      </Organizador>
    </Div>
  );
}
