import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSlice2: null,
};

const formSlice2 = createSlice({
  name: "Form2",
  initialState,
  reducers: {
    Step2Data: (state, action) => {
      state.formSlice2 = action.payload;
    },
  },
});

export const { Step2Data } = formSlice2.actions;

export default formSlice2.reducer;
