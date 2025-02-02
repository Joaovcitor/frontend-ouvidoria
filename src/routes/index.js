import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

import Page404 from "../pages/Page404";

import EditarUsuario from "../pages/Users/Editar";
import PedirSenha from "../pages/Users/SolicitarNovaSenha";
import ResetarSenha from "../pages/Users/RecuperarSenha";
import CriarUsuario from "../pages/Users/CriarUsuario";
import CriarReclamacao from "../pages/Reclamacoes/CriarReclamacao";
import Perfil from "../pages/Users/Perfil";
import ReclamacoesUsuarioComum from "../pages/Reclamacoes/ReclamacaoUsuarioComum";
import ReclamacoesSecretaria from "../pages/Reclamacoes/ReclamacaoSecretaria";
import EditarReclamacao from "../pages/Reclamacoes/EditarReclamacao";
import About from "../pages/about";
import CriarDuvida from "../pages/Duvidas/CriarDuvida";
import DuvidasUsuarioComum from "../pages/Duvidas/DuvidaUsuarioComum";
import DuvidasSecretaria from "../pages/Duvidas/DuvidaSecretaria";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} isClosed={false} />

      <Route
        exact
        path="/cadastrar"
        isClosed={false}
        component={CriarUsuario}
      />

      {/* rotas de reclamações */}
      <Route
        exact
        path="/cadastrar-reclamacao"
        isClosed
        component={CriarReclamacao}
      />

      <Route
        exact
        path="/minhas-reclamacoes"
        isClosed
        component={ReclamacoesUsuarioComum}
      />

      <Route
        exact
        path="/minhas-reclamacoes"
        isClosed
        component={ReclamacoesUsuarioComum}
      />

      <Route
        exact
        path="/reclamacoes-secretarias"
        isClosed
        component={ReclamacoesSecretaria}
      />

      <Route
        exact
        path="/reclamacoes/editar/:id"
        isClosed
        component={EditarReclamacao}
      />

      <Route exact path="/perfil/" isClosed component={Perfil} />
      <Route
        exact
        path="/pedir-senha-nova"
        isClosed={false}
        component={PedirSenha}
      />

      <Route
        exact
        path="/perfil/resetar-senha/:token"
        isClosed={false}
        component={ResetarSenha}
      />

      <Route exact path="/sobre" isClosed={false} component={About} />

      <Route exact path="/cadastrar-duvida" isClosed component={CriarDuvida} />
      <Route
        exact
        path="/minhas-duvidas"
        isClosed
        component={DuvidasUsuarioComum}
      />

      <Route
        exact
        path="/duvidas-secretaria"
        isClosed
        component={DuvidasSecretaria}
      />

      <Route path="*" component={Page404} />
    </Switch>
  );
}
