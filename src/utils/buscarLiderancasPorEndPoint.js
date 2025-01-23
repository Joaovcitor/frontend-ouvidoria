import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";

export default function buscarLiderancasPorEndPoint(
  setLiderancas,
  endPoint,
  user
) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/liderancas/${endPoint}`);
        setLiderancas(response.data.liderancas);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar os eleitores");
      }
    }
    getData();
  }, [user.role]);
}
