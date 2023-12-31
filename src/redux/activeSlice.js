import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: "",
  //   listActive: ["ListGame", "AddGame", "AddSlide"],
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    setComponentActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setComponentActive } = activeSlice.actions;

export default activeSlice.reducer;
