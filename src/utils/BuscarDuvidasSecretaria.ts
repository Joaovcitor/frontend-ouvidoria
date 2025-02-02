import { useEffect } from "react";
import axios from "../services/axios";
import type { Duvidas } from "../types/api";

export default function buscarDuvidasDaSecretaria(
  setDuvida: React.Dispatch<React.SetStateAction<Duvidas[]>>
) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{ duvidas: Duvidas[] }>(
          "/duvidas/duvidas-secretaria"
        );
        setDuvida(response.data.duvidas);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, [setDuvida]);
}
