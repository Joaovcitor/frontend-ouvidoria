import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";
import isEmail from "validator/lib/isEmail";

export default function CriarEmail() {
  const [user, setUser] = useState([]);
  const [liderancaId, setLiderancaId] = useState("");
  const [eleitorId, setEleitorId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // States para cada campo
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [searchTermLideranca, setSearchTermLideranca] = useState("");
  const [allLiderancas, setAllLiderancas] = useState([]);
  const [filteredLiderancas, setFilteredLiderancas] = useState([]);

  const [searchTermEleitores, setSearchTermEleitores] = useState("");
  const [allEleitores, setAllEleitores] = useState([]);
  const [filteredEleitores, setFilteredEleitores] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/");
        const fetchedUser = response.data.user;
        setUser(fetchedUser);
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
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!isEmail(recipientEmail)) {
      return toast.error("Email inválido");
    }
    try {
      if (user.role === "lideranca" && user.liderancaId) {
        await axios.post("/eleitor/criar", {
          recipientEmail: recipientEmail,
          subject: subject,
          content: content,
          liderancaId: user.liderancaId,
        });
      }
      if (user.role === "adm" && user.id) {
        await axios.post("/email/criar", {
          recipientEmail: recipientEmail,
          subject: subject,
          content: content,
        });
        await axios.post("/email/enviar", {
          to: recipientEmail,
          subject: subject,
          text: content,
        });
      }

      toast.success("Email criado e enviado com sucesso!");
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
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchEleitores() {
      try {
        const response = await axios.get("/eleitor/todos-os-eleitores");
        const responseLiderancas = await axios.get(
          "/liderancas/todas-as-liderancas"
        );
        setAllEleitores(response.data.eleitores);
        setAllLiderancas(responseLiderancas.data.liderancas);
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

    fetchEleitores();
  }, []);

  useEffect(() => {
    const filtered = allLiderancas.filter(
      (lideranca) =>
        lideranca.name &&
        lideranca.name.toLowerCase().includes(searchTermLideranca.toLowerCase())
    );
    setFilteredLiderancas(filtered);
  }, [searchTermLideranca, allLiderancas]);

  useEffect(() => {
    const filtered = allEleitores.filter(
      (eleitor) =>
        eleitor.name &&
        eleitor.name.toLowerCase().includes(searchTermEleitores.toLowerCase())
    );
    setFilteredEleitores(filtered);
  }, [searchTermEleitores, allEleitores]);

  const handleSearchChangeLideranca = (event) => {
    setSearchTermLideranca(event.target.value);
  };
  const handleSearchChangeEleitor = (event) => {
    setSearchTermEleitores(event.target.value);
  };

  const handleButtonClickEmail = (email, id) => {
    toast.success("Eleitor adicionado");
    setRecipientEmail(email);
    setEleitorId(id);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Enviar E-mail</h2>
      {user.role === "adm" ? (
        <>
          <label htmlFor="lideranca">
            Procurar Liderança
            <input
              type="text"
              className="lideranca"
              placeholder="Buscar pelo nome da liderança"
              value={searchTermLideranca}
              onChange={handleSearchChangeLideranca}
            />
          </label>
          <ul>
            {searchTermLideranca && filteredLiderancas.length > 0 ? (
              filteredLiderancas.map((lideranca) => (
                <li key={lideranca.id}>
                  {lideranca.name}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClickEmail(lideranca.email, lideranca.id);
                    }}
                  >
                    Incluir
                  </button>
                </li>
              ))
            ) : searchTermLideranca ? (
              <li>Nenhuma liderança encontrada</li>
            ) : null}
          </ul>
        </>
      ) : (
        ""
      )}
      {user.role === "adm" ? (
        <>
          <label htmlFor="lideranca">
            Procurar Eleitor
            <input
              type="text"
              className="lideranca"
              placeholder="Buscar pelo nome"
              value={searchTermEleitores}
              onChange={handleSearchChangeEleitor}
            />
          </label>
          <ul>
            {searchTermEleitores && filteredEleitores.length > 0 ? (
              filteredEleitores.map((lideranca) => (
                <li key={lideranca.id}>
                  {lideranca.name}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClickEmail(lideranca.email, lideranca.id);
                    }}
                  >
                    Incluir
                  </button>
                </li>
              ))
            ) : searchTermLideranca ? (
              <li>Nenhuma liderança encontrada</li>
            ) : null}
          </ul>
        </>
      ) : (
        ""
      )}
      <label htmlFor="nomeCompleto">
        E-mail:
        <input
          type="email"
          id="nomeCompleto"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
      </label>
      <label htmlFor="telefone">
        Título:
        <input
          type="text"
          id="telefone"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Conteúdo:
        <textarea
          type="email"
          id="email"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando" : "Enviar"}
      </button>
    </Form>
  );
}
