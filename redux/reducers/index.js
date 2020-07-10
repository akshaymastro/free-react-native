import { combineReducers } from "redux";
import AdReducer from "./AdReducer";

export default combineReducers({
  Ad: AdReducer,
});
