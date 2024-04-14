// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSlice4: null,
};
const formSlice4 = createSlice({
  name: "Form4",
  initialState,
  reducers: {
    Step4Data: (state, action) => {
      state.formSlice4 = action.payload;
    },
  },
});

export const { Step4Data } = formSlice4.actions;

export default formSlice4.reducer;
