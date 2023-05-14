import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialValue } from "../models/booksInterface";

const initialState: InitialValue = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = searchSlice.actions;
export default searchSlice.reducer;
