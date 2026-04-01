import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedFavorites = localStorage.getItem("favoriteItems");
const initialState: string[] = savedFavorites ? JSON.parse(savedFavorites) : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state: string[], action: PayloadAction<string>) => {
      const exists = state.includes(action.payload);
      const nextState = exists
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];

      localStorage.setItem("favoriteItems", JSON.stringify(nextState));
      return nextState;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
