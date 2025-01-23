import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import history from "../../services/history";
import { toast } from "react-toastify";

import axios from "../../services/axios";

import * as actions from "../../store/modules/auth/actions";

import { Nav } from "./styled";

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(actions.loginFailure());
      await axios.delete("/login/logout");
      toast.success("Logout realizado com sucesso");
      history.push("/login");
    } catch (error) {
      toast.error("Erro ao realizar logout");
    }
  };
  return (
    <Nav>
      {isLoggedIn ? (
        <>
          <Link to="/">
            <AiTwotoneHome size={24} />
          </Link>
          <Link to="/perfil">
            <FaUserAlt size={24} />
          </Link>
          <Link onClick={handleLogout} to="/logout">
            <FaPowerOff size={24} />
          </Link>
        </>
      ) : (
        <>
          <Link>Sobre o Serviço</Link>
          <Link to="/login">Entrar</Link>
          <Link to="/cadastrar">Criar conta</Link>
        </>
      )}
    </Nav>
  );
}
