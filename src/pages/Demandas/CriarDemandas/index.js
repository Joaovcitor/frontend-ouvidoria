/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";
import buscarUsuario from "../../../utils/buscarUsuario";
import buscarEleitoresPorEndPoint from "../../../utils/buscarEleitoresPorEndPoint";
import buscarLiderancasPorEndPoint from "../../../utils/buscarLiderancasPorEndPoint";

export default function CriarDemandas({ match }) {
  const { id } = match.params;
  const [user, setUser] = useState([]);
  const [descricao_demanda, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [eleitorId, setEleitorId] = useState("");
  const [searchTermEleitor, setSearchTermEleitor] = useState("");
  const [allEleitores, setAllEleitores] = useState([]);
  const [filteredEleitores, setFilteredEleitores] = useState([]);

  const [liderancaId, setLiderancaId] = useState("");
  const [searchTermLideranca, setSearchTermLideranca] = useState("");
  const [allLiderancas, setAllLiderancas] = useState([]);
  const [filteredLiderancas, setFilteredLiderancas] = useState([]);

  const handleButtonClick = (voterId) => {
    toast.success("Eleitor adicionado");
    setEleitorId(voterId);
  };

  const handleButtonClickLiderancaId = (voterId) => {
    toast.success("Liderança adicionada");
    setLiderancaId(voterId);
  };

  buscarUsuario(setUser);
  buscarEleitoresPorEndPoint(setAllEleitores, "todos-os-eleitores", user);
  buscarLiderancasPorEndPoint(setAllLiderancas, "todas-as-liderancas", user);

  useEffect(() => {
    const filtered = allEleitores.filter(
      (eleitor) =>
        eleitor.name &&
        eleitor.name.toLowerCase().includes(searchTermEleitor.toLowerCase())
    );
    setFilteredEleitores(filtered);
  }, [searchTermEleitor, allEleitores]);

  const handleSearchChangeEleitor = (event) => {
    setSearchTermEleitor(event.target.value);
  };

  useEffect(() => {
    const filtered = allLiderancas.filter(
      (lideranca) =>
        lideranca.name &&
        lideranca.name.toLowerCase().includes(searchTermLideranca.toLowerCase())
    );
    setFilteredLiderancas(filtered);
  }, [searchTermLideranca, allLiderancas]);

  const handleSearchChangeLideranca = (event) => {
    setSearchTermLideranca(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      switch (user.role) {
        case "adm": {
          await axios.post("/demandas/criar", {
            descricao_demanda,
            status,
            eleitorId: id ? id : eleitorId,
            liderancaId,
          });
          break;
        }
        case "lideranca": {
          await axios.post("/demandas/criar", {
            descricao_demanda,
            status: "pendente",
            eleitorId: id ? id : eleitorId,
            liderancaId: user.liderancaId,
          });
          break;
        }
        default:
          toast.error("Não foi possível definir sua permissão!");
      }

      toast.success("Demanda criada com sucesso!");
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
      <h2>Cadastrar nova demanda</h2>
      <label htmlFor="nome">
        Descrição:
        <textarea
          value={descricao_demanda}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      {user.role === "adm" ? (
        <>
          <label htmlFor="email">
            Status:
            <select onChange={(e) => setStatus(e.target.value)} name="" id="">
              <option value="Selecione">Selecione</option>
              <option value="Pendente">Pendente</option>
              <option value="Em analise">Em analise</option>
              <option value="Resolvida">Resolvida</option>
            </select>
          </label>
        </>
      ) : (
        ""
      )}
      {id ? (
        ""
      ) : (
        <>
          <label htmlFor="search">Nome do Eleitor - se houver:</label>
          <input
            type="text"
            placeholder="Buscar pelo nome do eleitor"
            value={searchTermEleitor}
            onChange={handleSearchChangeEleitor}
          />
          <ul>
            {searchTermEleitor && filteredEleitores.length > 0 ? (
              filteredEleitores.map((eleitor) => (
                <li
                  key={eleitor.id}
                  onClick={() => handleButtonClick(eleitor.id)}
                >
                  {eleitor.name}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClick(eleitor.id);
                    }}
                  >
                    Incluir
                  </button>
                </li>
              ))
            ) : searchTermEleitor ? (
              <li>Nenhum eleitor encontrado</li>
            ) : null}
          </ul>
        </>
      )}

      {user.role === "adm" ? (
        <>
          <label htmlFor="search">Nome da Liderança - se houver:</label>

          <input
            type="text"
            placeholder="Buscar pelo nome da liderança"
            value={searchTermLideranca}
            onChange={handleSearchChangeLideranca}
          />
          <ul>
            {searchTermLideranca && filteredLiderancas.length > 0 ? (
              filteredLiderancas.map((lideranca) => (
                <li
                  key={lideranca.id}
                  onClick={() => handleButtonClickLiderancaId(lideranca.id)}
                >
                  {lideranca.name}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleButtonClickLiderancaId(lideranca.id);
                    }}
                  >
                    Incluir
                  </button>
                </li>
              ))
            ) : searchTermEleitor ? (
              <li>Nenhum eleitor encontrado</li>
            ) : null}
          </ul>
        </>
      ) : (
        ""
      )}

      <button type="submit">Cadastrar</button>
    </Form>
  );
}
