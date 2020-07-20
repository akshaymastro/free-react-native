import { combineReducers } from "redux";
import AdReducer from "./AdReducer";
import CategoryReducer from "./CategoryReducer";

export default combineReducers({
  Ad: AdReducer,
  CategoryList: CategoryReducer,
});
