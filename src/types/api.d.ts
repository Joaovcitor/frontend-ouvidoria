export interface Reclamacao {
  id: number;
  descricao: string;
  status: "pendente" | "em analise" | "resolvida";
  createdAt: string;
  secretariaResponsavel: string;
  resposta: string | null;
  Fotos: Fotos[]; // Alterado de Fotos para um array de Fotos
}

export interface Fotos {
  id: number;
  originalname: string;
  filename: string;
  url: string;
}

export interface Duvidas {
  id: number;
  descricao: string;
  status: "pendente" | "em analise" | "resolvida";
  createdAt: string;
  secretariaResponsavel: string;
  resposta: string;
}

export interface User {
  id: number;
  readonly role: "comum" | "adm" | "secretario";
  email: string;
  name: string;
  readonly cpf: string;
  createdAt: string;
  updatedAt: string;
  isAdmAndComum: boolean;
  isMemberOfSecretario: boolean;
  belongingSecretariat: string;
  earlyAccess: boolean;
  password: string;
}
