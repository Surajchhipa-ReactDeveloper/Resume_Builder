// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSliceEducation3: null,
};
const formEducationSlice3 = createSlice({
  name: "FormEducation",
  initialState,
  reducers: {
    Step3DataEducation: (state, action) => {
      state.formEducationSlice3 = action.payload;
    },
  },
});

export const { Step3DataEducation } = formEducationSlice3.actions;

export default formEducationSlice3.reducer;
