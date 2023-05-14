import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GoogleBook,
  RemoveBookDetail,
  BookFavorite,
} from "../models/booksInterface";

const initialState: BookFavorite = {
  bookFavorite: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    getBookFavorite(state, action: PayloadAction<GoogleBook>) {
      state.bookFavorite.push({ ...action.payload });
    },
    removeBookFavorite(state, action: PayloadAction<RemoveBookDetail>) {
      state.bookFavorite = state.bookFavorite.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { getBookFavorite, removeBookFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
