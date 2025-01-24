import React, { useEffect, useState } from "react";
import { Organizador } from "./styled";
import axios from "../../services/axios";
import HomeAdm from "../../components/HomeAdm";
import HomeLideranca from "../../components/HomeUserComum";

import { User } from "../../types/api";
import { toast } from "react-toastify";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get<{ user: User }>("/");

        if (response.data.user) {
          setUser(response.data.user);
        } else {
          console.error("A resposta não contém o objeto user.");
        }
      } catch (e) {
        console.log("Erro na requisição:", e);
      }
    }

    getData();
  }, []);

  function renderizarHomeConformeRole() {
    if (!user) {
      toast.warning(
        "não foi possível carregar suas informações, tente novamente mais tarde!"
      );
      return null;
    }

    switch (user.role) {
      case "adm":
        return <HomeAdm />;
      case "comum":
        return <HomeLideranca />;
      default:
        return null;
    }
  }

  return (
    <Organizador>
      {user ? (
        <>
          <h1>Olá {user.name}</h1>
          {renderizarHomeConformeRole()}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Organizador>
  );
}
