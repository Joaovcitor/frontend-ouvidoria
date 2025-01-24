import { useEffect } from "react";
import axios from "../services/axios";
import type { Reclamacao } from "../types/api";

export default function buscarReclamacoesDaSecretaria(
  setReclamacao: React.Dispatch<React.SetStateAction<Reclamacao[]>>
) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{ reclamacoes: Reclamacao[] }>(
          "/reclamacoes/reclamacoes-secretaria"
        );
        setReclamacao(response.data.reclamacoes);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [setReclamacao]);
}
