import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./reducers";

export const store = configureStore({
  reducer: reducers,
});

export type Dispatch = typeof store.dispatch;
export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
