import { configureStore } from "@reduxjs/toolkit";
import userSliceReduce from "./userSlice";
import categorySliceReducer from "./categorySlice";
import slideSliceReducer from "./slideSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReduce,
    category: categorySliceReducer,
    slide: slideSliceReducer,
  },
});
