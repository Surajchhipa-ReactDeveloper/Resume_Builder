// formDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataSliceExperience4: null,
};
const formExperienceSlice4 = createSlice({
  name: "FormExperience",
  initialState,
  reducers: {
    Step4DataExperience: (state, action) => {
      state.formExperienceSlice4 = action.payload;
    },
  },
});

export const { Step4DataExperience } = formExperienceSlice4.actions;

export default formExperienceSlice4.reducer;
