import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slideList: [],
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    setDataSlide: (state, action) => {
      state.slideList = [...action.payload];
    },
  },
});

export const { setDataSlide } = slideSlice.actions;

export default slideSlice.reducer;
