import React, { useEffect, useState } from "react";
import { Organizador } from "./styled";
import axios from "../../services/axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeAdm from "../../components/HomeAdm";
import HomeLideranca from "../../components/HomeUserComum";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (user === null) return;
    async function getData() {
      try {
        const response = await axios.get("/");
        console.log(response.data);
        return setUser(response.data.user);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  function renderizarHomeConformeRole() {
    if (user === null) return;
    switch (user.role) {
      case "adm": {
        return (
          <>
            <HomeAdm></HomeAdm>
          </>
        );
      }
      case "comum": {
        return (
          <>
            <HomeLideranca></HomeLideranca>;
          </>
        );
      }
    }
  }

  return (
    <Organizador>
      <h1>Olá {user.name}</h1>
      {renderizarHomeConformeRole()}
    </Organizador>
  );
}
