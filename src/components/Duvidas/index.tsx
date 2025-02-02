import { Organizador } from "./styled";
import { Duvidas } from "../../types/api";
import { format } from "date-fns";
interface DuvidasComponentProps {
  duvidas: Duvidas[];
  msg: string;
}
export default function DuvidasComponent({
  duvidas,
  msg,
}: DuvidasComponentProps) {
  return (
    <Organizador>
      {duvidas.length > 0 ? (
        duvidas.map((reclamacao) => (
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
