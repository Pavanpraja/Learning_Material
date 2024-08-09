"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter";
import fetchApiReducer from "./Features/fetchapi";
import touchedConSlice from "./Features/touchedCon";

const rootReducer = combineReducers({
  counter: counterReducer,
  fetchApi: fetchApiReducer,
  touch_box: touchedConSlice
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
