import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/login", payload, {
      headers: { "Content-Type": "application/json" }
    });

    yield put(actions.loginSuccess({ ...response.data }));

    const { jwt } = response.data;
    sessionStorage.setItem("jwt", jwt)
    toast.success("Você fez login com sucesso");
    history.push(payload.prevPath)
  } catch (e) {
    console.log(e);
    toast.error("E-mail ou senha inválidos");
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.jwt", "");
  if (!token) return;

  sessionStorage.setItem("jwt", token);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),

])
