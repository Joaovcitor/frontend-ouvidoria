import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import authLideranca from "./authLideranca/sagas";

export default function* rootSaga() {
  return yield all([auth, authLideranca]);
}
