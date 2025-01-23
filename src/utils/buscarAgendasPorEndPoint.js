import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";

export default function buscarAgendasPorEndPoint(setAgenda, endPoint, user) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/agenda/${endPoint}`);
        setAgenda(response.data.agendas);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar os eleitores");
      }
    }
    getData();
  }, [user.role]);
}
