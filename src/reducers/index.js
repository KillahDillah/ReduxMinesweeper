import { combineReducers } from "redux";
import mines from "./mines";
import squares from "./squares";

const rootReducer = combineReducers({
  mines,
  squares,
});

export default rootReducer;
