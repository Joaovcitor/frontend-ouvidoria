import { combineReducers } from "redux";
import auth from "./auth/reducer";
import authLideranca from "./authLideranca/reducer";

export default combineReducers({
  auth,
  authLideranca,
});
