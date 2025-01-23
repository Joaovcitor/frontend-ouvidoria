import React, { useEffect, useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";
import isEmail from "validator/lib/isEmail";

export default function Login() {
  const [user, setUser] = useState([]);
  const [liderancaId, setLiderancaId] = useState("");

  // States para cada campo
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [tituloDeEleitorNumero, setTituloEleitor] = useState("");
  const [zona, setZona] = useState("");
  const [secao, setSecao] = useState("");
  const [enderecoRua, setRua] = useState("");
  const [enderecoNumero, setNumeroCasa] = useState("");
  const [bairros, setBairro] = useState("");
  const [distritos, setDistrito] = useState("");

  const [searchTermLideranca, setSearchTermLideranca] = useState("");
  const [allLiderancas, setAllLiderancas] = useState([]);
  const [filteredLiderancas, setFilteredLiderancas] = useState([]);

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

    if (distritos === "QUIXADA" && bairros === "") {
      return toast.error("Eleitor tem que possuir bairro, pois é de quixadá");
    }
    if (nomeCompleto.length < 3) {
      return toast.error("Nome não pode ficar em branco");
    }

    if (!isEmail(email)) {
      return toast.error("Email inválido");
    }
    try {
      if (user.role === "lideranca" && user.liderancaId) {
        await axios.post("/eleitor/criar", {
          name: nomeCompleto,
          telefone,
          email,
          cpf,
          rg,
          tituloDeEleitorNumero,
          zona,
          secao,
          enderecoRua,
          enderecoNumero,
          bairros,
          distritos,
          liderancaId: user.liderancaId,
        });
      }
      if (user.role === "adm" && user.id) {
        await axios.post("/eleitor/criar", {
          name: nomeCompleto,
          telefone,
          email,
          cpf,
          rg,
          tituloDeEleitorNumero,
          zona,
          secao,
          enderecoRua,
          enderecoNumero,
          bairros,
          distritos,
        });
      }

      toast.success("eleitor criado com sucesso!");
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

  useEffect(() => {
    async function fetchEleitores() {
      try {
        const response = await axios.get("/liderancas/todas-as-liderancas");
        setAllLiderancas(response.data.liderancas);
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

  const handleSearchChangeLideranca = (event) => {
    setSearchTermLideranca(event.target.value);
  };
  const handleButtonClickLiderancaId = (voterId) => {
    toast.success("Liderança adicionada ao eleitor");
    setLiderancaId(voterId);
  };

  return <Form onSubmit={handleSubmit}></Form>;
}
