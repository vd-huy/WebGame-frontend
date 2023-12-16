import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setDataCategory: (state, action) => {
      state.categoryList = [...action.payload];
    },
  },
});

export const { setDataCategory } = categorySlice.actions;

export default categorySlice.reducer;
