import React, { useEffect, useState } from "react";
import { Div, Section, Organizador, Links, DemandasDe7Dias } from "./styled";
import { MdDiversity3, MdOutlineReceiptLong } from "react-icons/md";
import axios from "../../services/axios";
import { toast } from "react-toastify";

export default function HomeAdm() {
  const [demandas, setDemandas] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/reclamacoes/reclamacoes-secretaria");
        setDemandas(response.data.reclamacoes);
      } catch (e) {
        console.log(e);
        toast.error("Ocorreu um erro ao carregar as demandas");
      }
    }
    getData();
  }, []);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const demandasUltimos7Dias = demandas.filter((demanda) => {
    const dataDeHj = new Date(demanda.createdAt);
    return dataDeHj >= sevenDaysAgo;
  });

  return (
    <Organizador>
      <Section>
        <nav className="dados-eleitores">
          <MdDiversity3 size={40}></MdDiversity3>
          <p>Demandas: {demandas.length}</p>
        </nav>
      </Section>
      <DemandasDe7Dias>
        <nav>
          <h4>Reclamações dos últimos 7 dias</h4>
          {demandasUltimos7Dias.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  Data do pedido:{" "}
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
                <Links to={`/demanda/editar/${item.id}`}>Ver demanda</Links>
              </div>
            );
          })}
        </nav>
      </DemandasDe7Dias>
      <Div>
        <nav>
          <MdOutlineReceiptLong size={40}></MdOutlineReceiptLong>
          <h4>Reclamações</h4>
          <Links to="/reclamacoes-secretarias">Acessar</Links>
        </nav>
      </Div>
    </Organizador>
  );
}
