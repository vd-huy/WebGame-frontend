import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameList: [],
  gameListSortByCreateAt: [],
  gameListSortByUpdateAt: [],
  gameUpdate: {},
  gameDetail: {},
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setDataGame: (state, action) => {
      state.gameList = [...action.payload];
    },

    sortByDateCreateAt: (state, action) => {
      state.gameListSortByCreateAt = [...action.payload].sort((a, b) => {
        return Number(new Date(b.createdAt) - new Date(a.createdAt));
      });
    },

    sortByDateUpdateAt: (state, action) => {
      state.gameListSortByUpdateAt = [...action.payload].sort((a, b) => {
        return Number(new Date(b.updatedAt) - new Date(a.updatedAt));
      });
    },

    setDateGameUpdate: (state, action) => {
      state.gameUpdate = action.payload;
    },

    setDataGameDetail: (state, action) => {
      state.gameDetail = action.payload;
    },
  },
});

export const {
  setDataGame,
  sortByDateCreateAt,
  sortByDateUpdateAt,
  setDateGameUpdate,
  setDataGameDetail,
} = gameSlice.actions;

export default gameSlice.reducer;
