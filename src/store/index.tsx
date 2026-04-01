import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "../store/cartSlice";
import favoritesReducer from "../store/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
