import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  jwt: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS_LIDERANCA: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.jwt = action.payload.jwt;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE_LIDERANCA: {
      const newState = { ...initialState };
      return newState;
    }
    default:
      return state;
  }
}
