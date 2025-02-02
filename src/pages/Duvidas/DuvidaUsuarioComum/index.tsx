import { useEffect, useState } from "react";
import { Div } from "./styled";
import axios from "../../../services/axios";
import { toast } from "react-toastify";
import DuvidasComponent from "../../../components/Duvidas";

import { Duvidas } from "../../../types/api";

export default function DuvidasUsuarioComum() {
  const [agendas, setReclamacoes] = useState<Duvidas[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{
          duvidas: Duvidas[];
        }>("/duvidas/minhas-duvidas");

        console.log(response.data);
        setReclamacoes(response.data.duvidas);
      } catch (e) {
        console.log(e);
        toast.error("Erro ao buscar as reclamações");
      }
    }
    getData();
  }, []);

  const duvidasPendentes = agendas.filter(
    (agenda) => agenda.status === "pendente"
  );

  const duvidasEmAnalise = agendas.filter(
    (agenda) => agenda.status === "em analise"
  );

  const agendasAceitas = agendas.filter(
    (agenda) => agenda.status === "resolvida"
  );

  return (
    <Div>
      <h2>Dúvidas pendentes {duvidasPendentes.length}</h2>
      <DuvidasComponent
        duvidas={duvidasPendentes}
        msg={"Nenhuma dúvida pendente"}
      />

      <h2>Dúvidas Em análise {duvidasEmAnalise.length}</h2>
      <DuvidasComponent
        duvidas={duvidasEmAnalise}
        msg="Nenhuma dúvida em análise"
      />

      <h2>Dúvidas Resolvidas {agendasAceitas.length}</h2>
      <DuvidasComponent
        duvidas={agendasAceitas}
        msg="Nenhuma dúvida resolvida"
      />
    </Div>
  );
}
