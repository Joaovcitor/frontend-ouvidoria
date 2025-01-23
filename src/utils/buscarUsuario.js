import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";

export default function buscarUsuario(setUser) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/");
        setUser(response.data.user);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao buscar suas informações");
      }
    }

    getData();
  }, []);
}
