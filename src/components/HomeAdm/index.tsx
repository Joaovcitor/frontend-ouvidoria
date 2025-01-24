import React, { useEffect, useState } from "react";
import { Div, Section, Organizador, Links, DemandasDe7Dias } from "./styled";
import { MdDiversity3, MdOutlineReceiptLong } from "react-icons/md";
import { Reclamacao } from "../../types/api";
import buscarReclamacoesDaSecretaria from "../../utils/buscarReclamacoesResolvidas";

export default function HomeAdm() {
  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);

  buscarReclamacoesDaSecretaria(setReclamacoes);

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
    (reclamacao) => reclamacao.createdAt <= dataInicio
  );

  return (
    <Organizador>
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
            <>
              <div key={reclamacao.id}>
                <h3>Descricao: {reclamacao.descricao}</h3>
                <p>
                  Secretaria Responsável: {reclamacao.secretariaResponsavel}
                </p>
              </div>
            </>
          ))}
        </nav>
        <nav>
          <h1>Últimas reclamações dos 7 dias para sua secretaria</h1>
          {ultimasReclamacoesDos7Dias.map((reclamacao) => (
            <>
              <div key={reclamacao.id}>
                <h3>Descricao: {reclamacao.descricao}</h3>
                <p>
                  Secretaria Responsável: {reclamacao.secretariaResponsavel}
                </p>
              </div>
            </>
          ))}
        </nav>
      </DemandasDe7Dias>
      <Div>
        <nav>
          <MdOutlineReceiptLong size={40}></MdOutlineReceiptLong>
          <h4>Reclamações</h4>
          <Links to="/reclamacoes-secretarias">Acessar</Links>
        </nav>
      </Div>
      <Div>
        <section>
          <h3>Demandas Resolvidas: {reclamacoesResolvidas.length}</h3>
        </section>
      </Div>
    </Organizador>
  );
}
