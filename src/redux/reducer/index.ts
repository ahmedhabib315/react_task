import { combineReducers } from "@reduxjs/toolkit";
import getListReducer from "./reducer";

const reducer = combineReducers({
  list: getListReducer
});

export default reducer;