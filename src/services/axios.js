import axios from "axios";
import history from "./history";
import { toast } from "react-toastify";

// Criação de instância do Axios
const api = axios.create({
  baseURL: "http://localhost:3004",
  withCredentials: true,
});

// Configuração do interceptador de resposta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Tratamento para status 401 e 403
      if (error.response.status === 401 || error.response.status === 403) {
        toast.error("Você não está autorizado a acessar esta página.");
        history.push("/login");
      }
    } else if (error.request) {
      console.error("Problema de rede ou servidor não respondeu.");
      toast.error("Problema de rede. Por favor, verifique sua conexão.");
    } else {
      console.error("Erro desconhecido:", error.message);
      toast.error("Erro desconhecido: " + error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
