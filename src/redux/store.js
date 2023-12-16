import { configureStore } from "@reduxjs/toolkit";
import userSliceReduce from "./userSlice";
import categorySliceReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    user: userSliceReduce,
    category: categorySliceReducer,
  },
});
