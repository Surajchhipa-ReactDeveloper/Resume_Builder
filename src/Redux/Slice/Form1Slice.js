import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSlice1: null,
};

const formSlice1 = createSlice({
  name: "Form1",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formSlice1 = action.payload;
    },
  },
});

export const { updateFormData } = formSlice1.actions;
export default formSlice1.reducer;
