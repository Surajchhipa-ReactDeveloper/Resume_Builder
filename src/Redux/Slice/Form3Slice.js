// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSlice3: null,
};
const formSlice3 = createSlice({
  name: "Form3",
  initialState,
  reducers: {
    Step3Data: (state, action) => {
      state.formSlice3 = action.payload;
    },
  },
});

export const { Step3Data } = formSlice3.actions;

export default formSlice3.reducer;
