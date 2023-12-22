import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameList: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDataGame: (state, action) => {
      state.gameList = [...action.payload];
    },
  },
});

export const { setDataGame } = gameSlice.actions;

export default gameSlice.reducer;
