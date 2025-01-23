import React, { useEffect, useState } from "react";
import { Organizador, Links, Section, FormEmailSubmit } from "./styled";
import axios from "../../../services/axios";
import { get } from "lodash";
import { format, isValid } from "date-fns";

import { toast } from "react-toastify";

export default function Perfil() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitEmail = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Section>
        <FormEmailSubmit onSubmit={handleSubmitEmail}>
          <h3>Mudar E-mail</h3>
          <label htmlFor="email">
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button>Editar</button>
        </FormEmailSubmit>
      </Section>

      <Section>
        <FormEmailSubmit onSubmit={handleSubmitEmail}>
          <h3>Mudar Senha</h3>
          <label htmlFor="email">
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p>confirme a Senha</p>
          <label htmlFor="email">
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button>Editar</button>
        </FormEmailSubmit>
      </Section>
    </>
  );
}
