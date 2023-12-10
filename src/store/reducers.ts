import { combineReducers } from "@reduxjs/toolkit";
import { currenciesReducer } from "pages/MainPage/slice";

export const reducers = combineReducers({
  currenciesReducer: currenciesReducer,
});
