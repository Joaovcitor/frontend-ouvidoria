import React, { useState } from "react";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";
import { get } from "lodash";
import { Form } from "./styled";

export default function CriarReclamacao() {
  const [secretaria_responsavel, setSecretaria] = useState("");
  const [descricao, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const reclamacaoResponse = await axios.post("/reclamacoes/criar", {
        descricao,
        secretaria_responsavel,
      });

      const formData = new FormData();
      formData.append("foto", file);
      formData.append("reclamacao_id", reclamacaoResponse.data.reclamacao.id);

      await axios.post("/fotos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Reclamação criada com sucesso!");
      history.push("/");
    } catch (e) {
      const errors = get(e, "response.data.errors", "");

      if (typeof errors === "string") {
        toast.error(errors);
      } else if (Array.isArray(errors)) {
        errors.forEach((error) => toast.error(error));
      } else if (typeof errors === "object") {
        Object.values(errors).forEach((error) => {
          if (typeof error === "string") toast.error(error);
        });
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h4>OBS.: AO CRIAR SUA RECLAMAÇÃO, VOCÊ NÃO PODERÁ EDITÁ-LA</h4>
      <h2>Cadastrar nova reclamação</h2>

      <label>
        Descrição:
        <textarea
          value={descricao}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Secretaria responsável:
        <select onChange={(e) => setSecretaria(e.target.value)}>
          <option value="Selecione">Selecione</option>
          <option value="nao sei">Não sei</option>
          <option value="secretaria A">Secretaria A</option>
          <option value="secretaria B">Secretaria B</option>
        </select>
      </label>

      <h2>Upload de Imagem</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="200" />}

      <button type="submit">Cadastrar</button>
    </Form>
  );
}
