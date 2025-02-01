import { configureStore } from "@reduxjs/toolkit";
import ModeSlice from "./ModeSlice";

const store = configureStore({
  reducer: {
    mode: ModeSlice,
  },
});

export default store;
