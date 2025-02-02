import React, { useState } from "react";
import { FaBars, FaTimes, FaUserAlt, FaPowerOff } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import history from "../../services/history";
import { toast } from "react-toastify";
import axios from "../../services/axios";

import * as actions from "../../store/modules/auth/actions";

import { Nav, MenuIcon, Menu, MenuLinks } from "./styled";

export default function Header() {
  const [open, setOpen] = useState(false);
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
      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        <h1>Ouvidoria Quixadá</h1>
      </MenuIcon>

      <Menu open={open}>
        {isLoggedIn ? (
          <MenuLinks>
            <Link to="/">
              <AiTwotoneHome size={24} />
              Home
            </Link>
            <Link to="/perfil">
              <FaUserAlt size={24} />
              Perfil
            </Link>
            <Link onClick={handleLogout} to="/logout">
              <FaPowerOff size={24} />
              Sair
            </Link>
          </MenuLinks>
        ) : (
          <MenuLinks>
            <Link to="/sobre">Sobre</Link>
            <Link to="/login">Entrar</Link>
            <Link to="/cadastrar">Criar conta</Link>
          </MenuLinks>
        )}
      </Menu>
    </Nav>
  );
}
