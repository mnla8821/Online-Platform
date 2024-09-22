import { createSlice } from "@reduxjs/toolkit";

export const ModeSlice = createSlice({
  name: "ModeSlice",
  initialState: {
    isDark: JSON.parse(localStorage.getItem("changeMode")),
  },

  reducers: {
    handleChangeMode: (state) => {
      localStorage.setItem("changeMode", JSON.stringify(!state.isDark));
      state.isDark = !state.isDark;
    },
  },
});

export const { handleChangeMode } = ModeSlice.actions;

export default ModeSlice.reducer;
