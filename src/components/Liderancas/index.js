/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Organizador, Links } from "./styled";
import { toast } from "react-toastify";

const bairrosSelect = [
  { value: "ALTO_DA_BOA_VISTA", label: "Alto da Boa Vista" },
  { value: "ALTO_SAO_FRANCISCO", label: "Alto São Francisco" },
  { value: "BAVIARA", label: "Baviera" },
  { value: "BOTO", label: "Bôto" },
  { value: "CAMPO_NOVO", label: "Campo Novo" },
  { value: "CAMPO_VELHO", label: "Campo Velho" },
  { value: "CARRASCAL", label: "Carrascal" },
  { value: "CENTRO", label: "Centro" },
  { value: "COHAB", label: "Cohab" },
  { value: "COMBATE", label: "Combate" },
  { value: "CURICACA", label: "Curicaca" },
  { value: "HERVAL", label: "Herval" },
  { value: "IRAJÁ", label: "Irajá" },
  { value: "JARDIM_DOS_MONOLITOS", label: "Jardim dos Monólitos" },
  { value: "MONTE_ALEGRE", label: "Monte Alegre" },
  { value: "NOVA_JERUSALEM", label: "Nova Jerusalém" },
  { value: "PLANALTO_RENASCER", label: "Planalto Renascer" },
  { value: "PLANALTO_UNIVERSITARIO", label: "Planalto Universitário" },
  { value: "PUTIU", label: "Putiú" },
  { value: "SAO_JOAO", label: "São João" },
  { value: "TRIANGULO", label: "Triângulo" },
];

const distritosSelect = [
  { value: "QUIXADA", label: "Quixadá" },
  { value: "CALIFORNIA", label: "California" },
  { value: "CIPO_DOS_ANJOS", label: "Cipó dos Anjos" },
  { value: "CUSTODIO", label: "Custódio" },
  { value: "DANIEL_DE_QUEIROZ", label: "Daniel de Queiroz" },
  { value: "DOM_MAURICIO", label: "Dom Maurício" },
  { value: "JUA", label: "Juá" },
  { value: "JUATAMA", label: "Juatama" },
  { value: "RIACHO_VERDE", label: "Riacho Verde" },
  { value: "SAO_BERNARDO", label: "São Bernardo" },
  { value: "SAO_JOAO_DOS_QUEIROZ", label: "São João dos Queiroz" },
  { value: "VARZEA_DA_ONCA", label: "Várzea da Onça" },
  { value: "TAPUIARA", label: "Tapuiára" },
];

export default function Eleitores({
  eleitores,
  bairros,
  distritos,
  page,
  setPage,
  demandas,
}) {
  const eleitoresPorBairro = bairros.map((bairro) => ({
    bairro,
    eleitores: eleitores.filter((eleitor) => eleitor.bairros === bairro),
  }));

  const eleitoresPorDistritos = distritos.map((distrito) => ({
    distrito,
    eleitores: eleitores.filter((eleitor) => eleitor.distritos === distrito),
  }));

  const getBairroLabel = (value) => {
    const bairro = bairrosSelect.find((b) => b.value === value);
    return bairro ? bairro.label : value;
  };

  const getDistritoLabel = (value) => {
    const distrito = distritosSelect.find((b) => b.value === value);
    return distrito ? distrito.label : value;
  };

  const ELEITORES_POR_PAGINA = 10;

  const handlePageChange = (bairro, direction) => {
    setPage((prevPage) => ({
      ...prevPage,
      [bairro]: (prevPage[bairro] || 1) + direction,
    }));
  };

  return (
    <>
      <Organizador>
        {eleitoresPorBairro.map(
          (grupo) =>
            grupo.bairro !== "N/A" && (
              <div key={grupo.bairro}>
                <h3>{getBairroLabel(grupo.bairro)}</h3>
                {grupo.eleitores.length > 0 ? (
                  <>
                    {grupo.eleitores
                      .slice(
                        (page[grupo.bairro] - 1 || 0) * ELEITORES_POR_PAGINA,
                        (page[grupo.bairro] || 1) * ELEITORES_POR_PAGINA
                      )
                      .map((eleitor) => {
                        const qtyDemandas = demandas.filter(
                          (demanda) => demanda.liderancaId === eleitor.id
                        );
                        return (
                          <nav key={eleitor.id}>
                            <p>Nome: {eleitor.name}</p>
                            <p>Seção: {eleitor.secao}</p>
                            <p>Demandas: {qtyDemandas.length}</p>
                            <Links to={`/liderancas/editar/${eleitor.id}`}>
                              Editar
                            </Links>
                            <Links to={`/liderancas/demandas/${eleitor.id}`}>
                              Ver Demandas
                            </Links>
                            <Links
                              to={`/liderancas/agendas-lideranca/${eleitor.id}`}
                            >
                              Ver Agendas
                            </Links>
                            <Links to={`/liderancas/eleitores/${eleitor.id}`}>
                              Ver Eleitores
                            </Links>
                          </nav>
                        );
                      })}
                    <div className="buttons">
                      <button
                        disabled={
                          (page[grupo.bairro] || 1) * ELEITORES_POR_PAGINA >=
                          grupo.eleitores.length
                        }
                        onClick={() => handlePageChange(grupo.bairro, 1)}
                      >
                        Próxima
                      </button>
                      <button
                        disabled={(page[grupo.bairro] || 1) === 1}
                        onClick={() => handlePageChange(grupo.bairro, -1)}
                      >
                        Anterior
                      </button>
                    </div>
                  </>
                ) : (
                  <p>Nenhum eleitor encontrado.</p>
                )}
              </div>
            )
        )}
      </Organizador>
      <h4>Distritos</h4>
      <Organizador>
        {eleitoresPorDistritos.map(
          (grupo) =>
            grupo.distrito !== "QUIXADA" && (
              <div key={grupo.distrito}>
                <h3>{getDistritoLabel(grupo.distrito)}</h3>
                {grupo.eleitores.length > 0 ? (
                  <>
                    {grupo.eleitores
                      .slice(
                        (page[grupo.bairro] - 1 || 0) * ELEITORES_POR_PAGINA,
                        (page[grupo.bairro] || 1) * ELEITORES_POR_PAGINA
                      )
                      .map((eleitor) => {
                        const qtyDemandas = demandas.filter(
                          (demanda) => demanda.liderancaId === eleitor.id
                        );
                        return (
                          <nav key={eleitor.id}>
                            <p>Nome: {eleitor.name}</p>
                            <p>Seção: {eleitor.secao}</p>
                            <p>Demandas: {qtyDemandas.length}</p>
                            <Links to={`/liderancas/editar/${eleitor.id}`}>
                              Editar
                            </Links>
                            <Links to={`/liderancas/demandas/${eleitor.id}`}>
                              Ver Demandas
                            </Links>
                            <Links
                              to={`/liderancas/agendas-lideranca/${eleitor.id}`}
                            >
                              Ver Agendas
                            </Links>
                            <Links to={`/liderancas/eleitores/${eleitor.id}`}>
                              Ver Eleitores
                            </Links>
                          </nav>
                        );
                      })}
                    <div className="buttons">
                      <button
                        disabled={(page[grupo.bairro] || 1) === 1}
                        onClick={() => handlePageChange(grupo.bairro, -1)}
                      >
                        Anterior
                      </button>
                      <button
                        disabled={
                          (page[grupo.bairro] || 1) * ELEITORES_POR_PAGINA >=
                          grupo.eleitores.length
                        }
                        onClick={() => handlePageChange(grupo.bairro, 1)}
                      >
                        Próxima
                      </button>
                    </div>
                  </>
                ) : (
                  <p>Nenhum eleitor encontrado.</p>
                )}
              </div>
            )
        )}
      </Organizador>
    </>
  );
}
