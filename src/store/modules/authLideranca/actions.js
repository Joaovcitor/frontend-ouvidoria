import * as types from "../types";

export function loginRequestLideranca(payload) {
  return {
    type: types.LOGIN_REQUEST_LIDERANCA,
    payload,
  };
}
export function loginSuccessLideranca(payload) {
  return {
    type: types.LOGIN_SUCCESS_LIDERANCA,
    payload,
  };
}

export function loginFailureLideranca(payload) {
  return {
    type: types.LOGIN_FAILURE_LIDERANCA,
    payload,
  };
}
