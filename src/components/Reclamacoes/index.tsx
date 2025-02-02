import { Organizador } from "./styled";
import { Reclamacao } from "../../types/api";
import { format } from "date-fns";
interface DuvidasComponentProps {
  reclamacao: Reclamacao[];
  msg: string;
}
export default function ReclamacoesComponent({
  reclamacao,
  msg,
}: DuvidasComponentProps) {
  return (
    <Organizador>
      {reclamacao.length > 0 ? (
        reclamacao.map((reclamacao) => (
          <nav key={reclamacao.id}>
            <p>
              Dia que foi solicitada:{" "}
              {format(new Date(reclamacao.createdAt), "dd/MM/yyyy")}
            </p>
            <p>Descrição:</p>
            <span>{reclamacao.descricao}</span>
            <p>Resposta:</p>
            <span>
              {reclamacao.resposta
                ? reclamacao.resposta
                : "Aguardando resposta!"}
            </span>
            <p>Status: {reclamacao.status}</p>
          </nav>
        ))
      ) : (
        <p>{msg}</p>
      )}
    </Organizador>
  );
}
