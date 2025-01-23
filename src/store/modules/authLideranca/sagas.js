import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";

function* loginRequestLideranca({ payload }) {
  try {
    const response = yield call(axios.post, "/login-lideranca", payload, {
      headers: { "Content-Type": "application/json" },
    });

    yield put(actions.loginSuccessLideranca({ ...response.data }));

    const { jwt } = response.data;
    sessionStorage.setItem("jwt", jwt);
    toast.success("Você fez login com sucesso na lideranca");
    history.push(payload.prevPath);
  } catch (e) {
    console.log(e);
    toast.error("E-mail ou senha inválidos");
    yield put(actions.loginFailureLideranca());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.jwt", "");
  if (!token) return;

  sessionStorage.setItem("jwt", token);
}

export default all([
  takeLatest(types.LOGIN_REQUEST_LIDERANCA, loginRequestLideranca),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
