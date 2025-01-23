import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../services/axios";

export default function buscarEleitores(
  setBairros,
  setDistritos,
  setEleitores,
  endPoint,
  user
) {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/eleitor/${endPoint}`);
        if (response.data.length === 0) {
          setEleitores([]);
          setBairros([]);
        } else {
          setEleitores(response.data.eleitores);
          const bairrosData = response.data.eleitores.map(
            (eleitor) => eleitor.bairros
          );
          const distritoData = response.data.eleitores.map(
            (eleitor) => eleitor.distritos
          );
          setBairros([...new Set(bairrosData)]);
          setDistritos([...new Set(distritoData)]);
        }
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar os eleitores");
      }
    }
    getData();
  }, [user.role]);
}
