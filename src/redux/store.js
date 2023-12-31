import { configureStore } from "@reduxjs/toolkit";
import userSliceReduce from "./userSlice";
import categorySliceReducer from "./categorySlice";
import slideSliceReducer from "./slideSlice";
import gameSliceReducer from "./gameSlice";
import activeSliceReducer from "./activeSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReduce,
    category: categorySliceReducer,
    slide: slideSliceReducer,
    game: gameSliceReducer,
    active: activeSliceReducer,
  },
});
