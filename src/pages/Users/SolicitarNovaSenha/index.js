import React, { useEffect, useState } from "react";
import { Organizador, Links, Div } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";
import { format, isValid } from "date-fns";

import { toast } from "react-toastify";

export default function PedirSenha() {
  const [email, setEmail] = useState("");

  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/email/recuperar-senha`, {
        email,
      });
      toast.success("Solicitação enviada com sucesso!");
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
      <Organizador onSubmit={handleSubmitPassword}>
        Solicitar recuperação de senha:
        <label htmlFor="email">
          Digite seu email
          <input
            type="email"
            id="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </Organizador>
    </Div>
  );
}
