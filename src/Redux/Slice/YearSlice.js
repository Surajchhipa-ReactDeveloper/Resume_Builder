import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yearDataSlice: null,
};

const YearSelectSlice = createSlice({
  name: "YearSelect",
  initialState,
  reducers: {
    StartEndYear: (state, action) => {
      state.YearSelectSlice = action.payload;
    },
  },
});

export const { StartEndYear } = YearSelectSlice.actions;
export default YearSelectSlice.reducer;
