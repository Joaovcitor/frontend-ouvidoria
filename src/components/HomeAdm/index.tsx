import React, { useEffect, useState } from "react";
import { Div, Section, Organizador, Links, DemandasDe7Dias } from "./styled";
import { MdDiversity3, MdOutlineReceiptLong } from "react-icons/md";
import { Reclamacao, Duvidas } from "../../types/api";
import buscarReclamacoesDaSecretaria from "../../utils/buscarReclamacoesResolvidas";
import buscarDuvidasDaSecretaria from "../../utils/BuscarDuvidasSecretaria";

export default function HomeAdm() {
  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);
  const [duvidas, setDuvidas] = useState<Duvidas[]>([]);

  buscarReclamacoesDaSecretaria(setReclamacoes);
  buscarDuvidasDaSecretaria(setDuvidas);

  const reclamacoesResolvidas: Reclamacao[] = reclamacoes.filter(
    (reclamacao) => reclamacao.status === "resolvida"
  );
  const reclamacoesPendentes: Reclamacao[] = reclamacoes.filter(
    (reclamacao) => reclamacao.status === "pendente"
  );
  const reclamacoesEmAnalise: Reclamacao[] = reclamacoes.filter(
    (reclamacao) => reclamacao.status === "em analise"
  );

  const hoje = new Date();
  const seteDiasAtras = new Date();
  seteDiasAtras.setDate(hoje.getDate() - 7);

  const dataInicio = seteDiasAtras.toISOString();

  const ultimasReclamacoesDos7Dias: Reclamacao[] = reclamacoes.filter(
    (reclamacao) => reclamacao.createdAt >= dataInicio
  );

  const ultimasDuvidasDos7Dias: Duvidas[] = duvidas.filter(
    (duvidas) => duvidas.createdAt >= dataInicio
  );

  return (
    <Organizador>
      <Div>
        <nav>
          <MdOutlineReceiptLong size={40}></MdOutlineReceiptLong>
          <h4>Reclamações</h4>
          <Links to="/reclamacoes-secretarias">Acessar</Links>
        </nav>
        <nav>
          <MdOutlineReceiptLong size={40}></MdOutlineReceiptLong>
          <h4>Dúvidas</h4>
          <Links to="/duvidas-secretaria">Acessar</Links>
        </nav>
      </Div>
      <Section>
        <nav className="dados-eleitores">
          <MdDiversity3 size={40}></MdDiversity3>
          <p>Reclamações da sua secretaria: {reclamacoes.length}</p>
        </nav>
      </Section>
      <DemandasDe7Dias>
        <nav>
          <h1>Últimas reclamações dos 7 dias para sua secretaria</h1>
          {ultimasReclamacoesDos7Dias.map((reclamacao) => (
            <div key={reclamacao.id}>
              <h3>Descricao: {reclamacao.descricao}</h3>
              <Links to={`/reclamacoes/editar/${reclamacao.id}`}>
                Ver Reclamação
              </Links>
            </div>
          ))}
        </nav>
        <nav>
          <h1>Últimas dúvidas enviadas dos 7 dias para sua secretaria</h1>
          {ultimasDuvidasDos7Dias.map((reclamacao) => (
            <div key={reclamacao.id}>
              <h3>Descricao: {reclamacao.descricao}</h3>
              <Links to={`/duvidas/editar/${reclamacao.id}`}>
                Ver Reclamação
              </Links>
            </div>
          ))}
        </nav>
      </DemandasDe7Dias>
    </Organizador>
  );
}
