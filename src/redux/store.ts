import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./state/filterSlice";
import artSlice from "./state/artSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice,
    art: artSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
